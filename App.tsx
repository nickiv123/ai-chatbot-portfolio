import { useState, useEffect } from "react";
import ResponsivePortfolio from "./components/ResponsivePortfolio";
import NikeCaseStudy from "./components/NikeCaseStudy";
import OhWowCaseStudy from "./components/OhWowCaseStudy";
import MasteryCaseStudy from "./components/MasteryCaseStudy";
import PlaygroundPage from "./components/PlaygroundPage";
import AboutMePage from "./components/AboutMePage";
import { Toaster } from "./components/ui/sonner";
import { motion, AnimatePresence } from "motion/react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      aria-hidden="true"
    />
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Add lang attribute to document
    document.documentElement.lang = 'en';

    // Detect keyboard navigation
    const handleFirstTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
        window.addEventListener('mousedown', handleMouseDownOnce);
      }
    };

    const handleMouseDownOnce = () => {
      document.body.classList.remove('user-is-tabbing');
      window.removeEventListener('mousedown', handleMouseDownOnce);
      window.addEventListener('keydown', handleFirstTab);
    };

    window.addEventListener('keydown', handleFirstTab);

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handlePopState);
    
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener('keydown', handleFirstTab);
      window.removeEventListener('mousedown', handleMouseDownOnce);
    };
  }, []);

  // Simple routing with fallback for Figma preview
  const renderContent = () => {
    if (currentPath === "/nike-case-study") return <NikeCaseStudy />;
    if (currentPath === "/oh-wow-case-study") return <OhWowCaseStudy />;
    if (currentPath === "/mastery-case-study") return <MasteryCaseStudy />;
    if (currentPath === "/playground") return <PlaygroundPage />;
    if (currentPath === "/about") return <AboutMePage />;
    // Default to home page for root and any unmatched paths
    return <ResponsivePortfolio />;
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <CustomCursor />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPath}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
      <Toaster />
    </>
  );
}
