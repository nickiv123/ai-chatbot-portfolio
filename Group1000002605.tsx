import svgPaths from "./svg-x2an9a3pen";

function HomeSmile() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="home-smile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="home-smile">
          <g id="Icon">
            <path d={svgPaths.p2f2f3880} fill="var(--fill-0, #A6FF61)" />
            <path d={svgPaths.p4921200} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <HomeSmile />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0">
      <Frame1 />
    </div>
  );
}

function HomeVutton() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(246,246,246,0)] relative shrink-0" data-name="Home vutton">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[24px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Globe() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="globe-04">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="globe-04">
          <path d={svgPaths.p1cef8100} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <Globe />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">Playground</p>
    </div>
  );
}

function HelloWorld() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(246,246,246,0)] relative shrink-0" data-name="Hello world">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[24px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="star-06">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="star-06">
          <path d={svgPaths.p17a51e80} id="Icon" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <Star />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">About Me</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0">
      <Frame />
    </div>
  );
}

function AboutMe() {
  return (
    <div className="[grid-area:1_/_3] bg-[rgba(246,246,246,0)] relative shrink-0" data-name="About Me">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[24px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function NavbarLogoLeft() {
  return (
    <div className="absolute bg-[rgba(246,246,246,0.4)] h-[60px] left-0 right-0 rounded-[76px] top-0" data-name="Navbar Logo Left">
      <div className="box-border grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] overflow-clip px-[24px] py-0 relative rounded-[inherit] size-full">
        <AboutMe />
        <HomeVutton />
        <HelloWorld />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(72,72,72,0.8)] border-solid inset-[-0.5px] pointer-events-none rounded-[76.5px]" />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <NavbarLogoLeft />
    </div>
  );
}