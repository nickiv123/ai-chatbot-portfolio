import { useRef, useEffect, useState, useMemo, useId } from 'react';
import './CurvedLoop.css';

const CurvedLoop = ({
  marqueeText = '',
  subtext = '',
  speed = 2,
  className,
  subtextClassName,
  curveAmount = 400,
  direction = 'left',
  interactive = true
}) => {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (hasTrailing ? marqueeText.replace(/\s+$/, '') : marqueeText) + '\u00A0';
  }, [marqueeText]);

  const subtextProcessed = useMemo(() => {
    if (!subtext) return '';
    const hasTrailing = /\s|\u00A0$/.test(subtext);
    return (hasTrailing ? subtext.replace(/\s+$/, '') : subtext) + '\u00A0';
  }, [subtext]);

  const measureRef = useRef(null);
  const textPathRef = useRef(null);
  const pathRef = useRef(null);
  const subtextMeasureRef = useRef(null);
  const subtextPathRef = useRef(null);
  const subtextPathElRef = useRef(null);
  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);
  const [subtextSpacing, setSubtextSpacing] = useState(0);
  const [subtextOffset, setSubtextOffset] = useState(0);
  const uid = useId();
  const pathId = `curve-${uid}`;
  const subtextPathId = `curve-subtext-${uid}`;
  const pathD = `M-100,40 L1540,40`;
  const subtextPathD = `M-100,95 L1540,95`;

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef(direction);
  const velRef = useRef(0);

  const textLength = spacing;
  const totalText = textLength
    ? Array(Math.ceil(1800 / textLength) + 2)
        .fill(text)
        .join('')
    : text;
  const ready = spacing > 0;

  const subtextLength = subtextSpacing;
  const totalSubtext = subtextLength && subtext
    ? Array(Math.ceil(1800 / subtextLength) + 2)
        .fill(subtextProcessed)
        .join('')
    : subtextProcessed;
  const subtextReady = subtextSpacing > 0 && subtext;

  useEffect(() => {
    if (measureRef.current) setSpacing(measureRef.current.getComputedTextLength());
    if (subtextMeasureRef.current && subtext) setSubtextSpacing(subtextMeasureRef.current.getComputedTextLength());
  }, [text, className, subtextProcessed, subtextClassName, subtext]);

  useEffect(() => {
    if (!spacing) return;
    if (textPathRef.current) {
      const initial = -spacing;
      textPathRef.current.setAttribute('startOffset', initial + 'px');
      setOffset(initial);
    }
  }, [spacing]);

  useEffect(() => {
    if (!subtextSpacing || !subtext) return;
    if (subtextPathRef.current) {
      const initial = -subtextSpacing;
      subtextPathRef.current.setAttribute('startOffset', initial + 'px');
      setSubtextOffset(initial);
    }
  }, [subtextSpacing, subtext]);

  useEffect(() => {
    if (!spacing || !ready) return;
    let frame = 0;
    const step = () => {
      if (!dragRef.current) {
        const delta = dirRef.current === 'right' ? speed : -speed;
        
        // Main text
        if (textPathRef.current) {
          const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
          let newOffset = currentOffset + delta;

          const wrapPoint = spacing;
          if (newOffset <= -wrapPoint) newOffset += wrapPoint;
          if (newOffset > 0) newOffset -= wrapPoint;

          textPathRef.current.setAttribute('startOffset', newOffset + 'px');
          setOffset(newOffset);
        }

        // Subtext (synced with main text)
        if (subtextPathRef.current && subtextReady) {
          const currentOffset = parseFloat(subtextPathRef.current.getAttribute('startOffset') || '0');
          let newOffset = currentOffset + delta;

          const wrapPoint = subtextSpacing;
          if (newOffset <= -wrapPoint) newOffset += wrapPoint;
          if (newOffset > 0) newOffset -= wrapPoint;

          subtextPathRef.current.setAttribute('startOffset', newOffset + 'px');
          setSubtextOffset(newOffset);
        }
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready, subtextSpacing, subtextReady]);

  const onPointerDown = e => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.target.setPointerCapture(e.pointerId);
  };

  const onPointerMove = e => {
    if (!interactive || !dragRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;

    // Main text
    if (textPathRef.current) {
      const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
      let newOffset = currentOffset + dx;

      const wrapPoint = spacing;
      if (newOffset <= -wrapPoint) newOffset += wrapPoint;
      if (newOffset > 0) newOffset -= wrapPoint;

      textPathRef.current.setAttribute('startOffset', newOffset + 'px');
      setOffset(newOffset);
    }

    // Subtext
    if (subtextPathRef.current && subtextReady) {
      const currentOffset = parseFloat(subtextPathRef.current.getAttribute('startOffset') || '0');
      let newOffset = currentOffset + dx;

      const wrapPoint = subtextSpacing;
      if (newOffset <= -wrapPoint) newOffset += wrapPoint;
      if (newOffset > 0) newOffset -= wrapPoint;

      subtextPathRef.current.setAttribute('startOffset', newOffset + 'px');
      setSubtextOffset(newOffset);
    }
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? 'right' : 'left';
  };

  const cursorStyle = interactive ? (dragRef.current ? 'grabbing' : 'grab') : 'auto';

  return (
    <div
      className="curved-loop-jacket text-2xl sm:text-xl md:text-base"
      style={{ visibility: ready ? 'visible' : 'hidden', cursor: cursorStyle, marginTop: '-40px' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg className="curved-loop-svg" viewBox="0 0 1440 160">
        <text ref={measureRef} xmlSpace="preserve" style={{ visibility: 'hidden', opacity: 0, pointerEvents: 'none' }}>
          {text}
        </text>
        {subtext && (
          <text ref={subtextMeasureRef} xmlSpace="preserve" style={{ visibility: 'hidden', opacity: 0, pointerEvents: 'none' }}>
            {subtextProcessed}
          </text>
        )}
        <defs>
          <path ref={pathRef} id={pathId} d={pathD} fill="none" stroke="transparent" />
          {subtext && (
            <path ref={subtextPathElRef} id={subtextPathId} d={subtextPathD} fill="none" stroke="transparent" />
          )}
        </defs>
        {ready && (
          <text fontWeight="bold" xmlSpace="preserve" className={className}>
            <textPath ref={textPathRef} href={`#${pathId}`} startOffset={offset + 'px'} xmlSpace="preserve">
              {totalText}
            </textPath>
          </text>
        )}
        {subtextReady && (
          <text xmlSpace="preserve" className={subtextClassName || className}>
            <textPath ref={subtextPathRef} href={`#${subtextPathId}`} startOffset={subtextOffset + 'px'} xmlSpace="preserve">
              {totalSubtext}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;
