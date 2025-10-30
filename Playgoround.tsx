import svgPaths from "./svg-u6een6j1ky";
import imgScreenshot20250910At53309Pm1 from "figma:asset/077a76cf86e001dde7278ddf355f24072c2c85af.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#1a1a1a] text-[88px] text-center tracking-[-0.88px] uppercase w-full">Playground</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[118px] items-start relative shrink-0 w-[1200px]" data-name="Column">
      <Content />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1200px]" data-name="Container">
      <Column />
    </div>
  );
}

function HeroHeadingLeft() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[80px] h-[244px] items-center justify-center overflow-clip px-[24px] py-[64px] relative shrink-0 w-[1440px]" data-name="Hero Heading Left">
      <Container />
    </div>
  );
}

function FeaturesList() {
  return (
    <div className="bg-white box-border gap-[28px] grid grid-cols-[901px_minmax(0px,_1fr)] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[838px] overflow-clip px-[53px] py-[38px] relative shrink-0 w-[1440px]" data-name="Features List">
      <div className="[grid-area:1_/_1] h-[654px] relative shrink-0 w-[1151.95px]" data-name="Screenshot 2025-09-10 at 5.33.09 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250910At53309Pm1} />
      </div>
      <div className="[grid-area:1_/_2] h-[762px] relative rounded-[30.624px] shrink-0 w-[353px]" data-name="Screen Recording 2025-09-17 at 3.00.37 PM 1">
        <div className="absolute inset-0 overflow-hidden rounded-[30.624px]">
          <video autoPlay className="absolute h-[101.46%] left-[-2.1%] max-w-none top-[-0.65%] w-[104.19%]" controlsList="nodownload" loop playsInline>
            <source src="/_videos/v1/c91da438b8da60c60e9ce1e893cd2043471099ba" />
          </video>
        </div>
        <div aria-hidden="true" className="absolute border-[#474747] border-[5.404px] border-solid inset-[-5.404px] pointer-events-none rounded-[36.0283px]" />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[580px]" data-name="Intro">
      <div className="font-['Helvetica_Neue:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[0px] w-full">
        <p className="leading-[1.5] mb-0 text-[24px]">
          <span>{`Gatherly / `}</span>
          <a className="[text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://bulb-pop-48287330.figma.site">
            <span className="[text-underline-position:from-font] decoration-solid leading-[1.5] text-[24px]" href="https://bulb-pop-48287330.figma.site">
              Link
            </span>
          </a>
        </p>
        <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] text-[20px]">
          <span>{`Figma Make · 9 hours · 151 versions `}</span>· Concept project
        </p>
      </div>
    </div>
  );
}

function Feature() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Feature">
      <p className="basis-0 font-['Helvetica_Neue:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[16px]">
        <span className="font-['Helvetica_Neue:Bold',sans-serif]">The problem:</span>
        <span>
          {` 60% of adults say making friends is hard. Group chats fizzle, swiping feels impersonal, and hangouts rarely happen.`}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
        <span className="font-['Helvetica_Neue:Bold',sans-serif]">The idea:</span>
        <span>{` Gatherly connects you with friends-of-friends for real activities. No swiping. No strangers. Just reliable people who show up. The aha moment? Realizing Gatherly could tackle both the loneliness epidemic and the flaky-friend epidemic. Check out the prototype and let me know what you think!`}</span>
      </p>
    </div>
  );
}

function Column1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Feature />
    </div>
  );
}

function Columns() {
  return (
    <div className="content-stretch flex gap-[40px] items-start justify-center relative shrink-0 w-[1200px]" data-name="Columns">
      <Intro />
      <Column1 />
    </div>
  );
}

function FeaturesList1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[80px] items-start justify-center overflow-clip px-[24px] py-[64px] relative shrink-0 w-[1440px]" data-name="Features List">
      <Columns />
    </div>
  );
}

function FeaturesList2() {
  return (
    <div className="bg-white box-border gap-[28px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[838px] overflow-clip px-[53px] py-[38px] relative shrink-0 w-[1440px]" data-name="Features List">
      <div className="[grid-area:1_/_2_/_span_2] aspect-[346/762] justify-self-center relative rounded-[40px] shrink-0" data-name="Screen Recording 2025-09-17 at 10.43.36 AM 1">
        <div className="absolute inset-0 overflow-hidden rounded-[40px]">
          <video autoPlay className="absolute h-full left-[-0.97%] max-w-none top-0 w-[101.95%]" controlsList="nodownload" loop playsInline>
            <source src="/_videos/v1/40384d35a61b4334fab5c4bc859891aa7921957a" />
          </video>
        </div>
        <div aria-hidden="true" className="absolute border-[#474747] border-[6px] border-solid inset-[-6px] pointer-events-none rounded-[46px]" />
      </div>
    </div>
  );
}

function Intro1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[580px]" data-name="Intro">
      <div className="font-['Helvetica_Neue:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[0px] w-full">
        <p className="leading-[1.5] mb-0 text-[24px]">
          <span>{`Nudgey / `}</span>
          <a className="[text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://bagel-fabric-95097869.figma.site">
            <span className="[text-underline-position:from-font] decoration-solid leading-[1.5] text-[24px]" href="https://bagel-fabric-95097869.figma.site">
              Link
            </span>
          </a>
        </p>
        <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] text-[20px]">
          <span>{`Figma Make · 6 hours · 133 versions `}</span>· Concept project
        </p>
      </div>
    </div>
  );
}

function Feature1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Feature">
      <div className="basis-0 font-['Helvetica_Neue:Regular',sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[16px]">
        <p className="leading-[1.5] mb-0">
          <span className="font-['Helvetica_Neue:Bold',sans-serif] not-italic">{`Problem: `}</span>
          <span>{`Habit tracking apps use one-size-fits-all motivation that doesn't work. Everyone gets the same generic reminders regardless of what actually motivates them. Resulting in high abandonment rates and ignored notifications. Some people need gentle encouragement, others need Duolingo-owl persistence, but current apps treat everyone the same.`}</span>
        </p>
        <p className="leading-[1.5] mb-0">&nbsp;</p>
        <p className="leading-[1.5]">
          <span className="font-['Helvetica_Neue:Bold',sans-serif] not-italic">Idea:</span>
          <span>{` Nudgey features an AI ghost mascot that learns your unique motivational style and adapts in real-time. Ignore reminders? It gets more persistent. Stay consistent? It celebrates supportively. The ghost analyzes your behavior patterns to deliver the right motivation at the right time in the right tone.`}</span>
        </p>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Feature1 />
    </div>
  );
}

function Columns1() {
  return (
    <div className="content-stretch flex gap-[40px] items-start justify-center relative shrink-0 w-[1200px]" data-name="Columns">
      <Intro1 />
      <Column2 />
    </div>
  );
}

function FeaturesList3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[80px] items-start justify-center overflow-clip px-[24px] py-[64px] relative shrink-0 w-[1440px]" data-name="Features List">
      <Columns1 />
    </div>
  );
}

function FeaturesList4() {
  return (
    <div className="bg-white box-border gap-[28px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[838px] overflow-clip px-[53px] py-[38px] relative shrink-0 w-[1440px]" data-name="Features List">
      <div className="[grid-area:1_/_2_/_span_2] aspect-[600/1300] justify-self-center relative rounded-[40px] shrink-0" data-name="Screen Recording 2025-09-17 at 11.02.20 AM 1">
        <video autoPlay className="absolute max-w-none object-cover rounded-[40px] size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/60a84a980649c0aa23d1c0afb754dff49e84008a" />
        </video>
        <div aria-hidden="true" className="absolute border-[#474747] border-[6px] border-solid inset-0 pointer-events-none rounded-[40px]" />
      </div>
    </div>
  );
}

function Intro2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[580px]" data-name="Intro">
      <div className="font-['Helvetica_Neue:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[0px] w-full">
        <p className="leading-[1.5] mb-0 text-[24px]">
          <span>{`Spark / `}</span>
          <a className="[text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://kilt-goblin-42211359.figma.site">
            <span className="[text-underline-position:from-font] decoration-solid leading-[1.5] text-[24px]" href="https://kilt-goblin-42211359.figma.site">
              Link
            </span>
          </a>
        </p>
        <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] text-[20px]">
          <span>{`Figma Make · 4 hours · 138 versions `}</span>· Concept project
        </p>
      </div>
    </div>
  );
}

function Feature2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Feature">
      <div className="basis-0 font-['Helvetica_Neue:Regular',sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[16px]">
        <p className="leading-[1.5] mb-0">
          <span className="font-['Helvetica_Neue:Bold',sans-serif] not-italic">Problem:</span>
          <span>{` Our brains are wired against us. Due to negativity bias, we remember bad experiences 5x longer than positive ones an evolutionary survival mechanism that now sabotages our mental wellbeing in modern life. When we're feeling down, we struggle to recall the good moments that could lift our spirits, trapped in cycles of negative thinking.`}</span>
        </p>
        <p className="leading-[1.5] mb-0">&nbsp;</p>
        <p className="leading-[1.5]">
          <span className="font-['Helvetica_Neue:Bold',sans-serif] not-italic">Idea:</span>
          <span>{` Spark is a personal joy collection app that helps users combat their brain's negativity bias through science-backed positive psychology. Users save meaningful content photos, messages, quotes, achievements in organized folders. When feeling low, they can instantly access their curated collection of positive memories, gradually retraining their neural pathways to notice and remember joy.`}</span>
        </p>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Feature2 />
    </div>
  );
}

function Columns2() {
  return (
    <div className="content-stretch flex gap-[40px] items-start justify-center relative shrink-0 w-[1200px]" data-name="Columns">
      <Intro2 />
      <Column3 />
    </div>
  );
}

function FeaturesList5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[80px] items-start justify-center overflow-clip px-[24px] py-[64px] relative shrink-0 w-[1440px]" data-name="Features List">
      <Columns2 />
    </div>
  );
}

function ViewProject() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[21px] items-center px-0 py-[10px] relative shrink-0 w-[115px]" data-name="View project">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap underline whitespace-pre">View Case Study</p>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Footer Links">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#212121] text-[14px] w-[min-content]">Booking Tool</p>
      <ViewProject />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <FooterLinks />
    </div>
  );
}

function Column4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Content1 />
    </div>
  );
}

function ViewProject1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[21px] items-center px-0 py-[10px] relative shrink-0 w-[115px]" data-name="View project">
      <a className="[white-space-collapse:collapse] block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap" href="https://apps.apple.com/us/app/oh-wow/id6469464202">
        <p className="cursor-pointer leading-[1.5] underline whitespace-pre">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid">{`View `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid">Case Study</span>
        </p>
      </a>
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Footer Links">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#212121] text-[14px] w-[min-content]">Personal Travel Guide</p>
      <ViewProject1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <FooterLinks1 />
    </div>
  );
}

function Column5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Content2 />
    </div>
  );
}

function ViewProject2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[21px] items-center px-0 py-[10px] relative shrink-0 w-[115px]" data-name="View project">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap underline whitespace-pre">View Case Study</p>
    </div>
  );
}

function FooterLinks2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Footer Links">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#212121] text-[14px] w-[min-content]">Global Insights</p>
      <ViewProject2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <FooterLinks2 />
    </div>
  );
}

function Column6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Content3 />
    </div>
  );
}

function ViewProject3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[21px] items-center px-0 py-[10px] relative shrink-0 w-[115px]" data-name="View project">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap underline whitespace-pre">View Case Study</p>
    </div>
  );
}

function FooterLinks3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Footer Links">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#212121] text-[14px] w-[min-content]">Mastery</p>
      <ViewProject3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <FooterLinks3 />
    </div>
  );
}

function Column7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Content4 />
    </div>
  );
}

function Meme() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[183px]" data-name="Meme">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap whitespace-pre">ABOUT ME</p>
    </div>
  );
}

function Meme1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[183px]" data-name="Meme">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap whitespace-pre">HOME</p>
    </div>
  );
}

function FooterLinks4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Footer Links">
      <Meme1 />
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[178.67px]" data-name="Email">
      <a className="[white-space-collapse:collapse] block font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap" href="mailto:itsncki@gmail.com">
        <p className="cursor-pointer leading-[1.5] whitespace-pre">EMAIL</p>
      </a>
    </div>
  );
}

function FooterLinks5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Footer Links">
      <Email />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Meme />
      <FooterLinks4 />
      <FooterLinks5 />
    </div>
  );
}

function Column8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Content5 />
    </div>
  );
}

function SmallColumns() {
  return (
    <div className="box-border content-stretch flex gap-[32px] items-start pb-0 pt-[16px] px-0 relative shrink-0 w-[703px]" data-name="Small Columns">
      <Column4 />
      <Column5 />
      <Column6 />
      <Column7 />
      <Column8 />
    </div>
  );
}

function Columns3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[960px]" data-name="Columns">
      <SmallColumns />
    </div>
  );
}

function Telescope() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="telescope">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="telescope">
          <path d={svgPaths.p13975800} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Copyright() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-0 py-[16px] relative shadow-[0px_-1px_0px_0px_#e4ebf3] shrink-0 w-[940px]" data-name="Copyright">
      <Telescope />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#212121] text-[14px] text-center text-nowrap whitespace-pre">Currently looking for the next adventure!</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f6f6f6] box-border content-stretch flex flex-col gap-[40px] h-[391px] items-center justify-center overflow-clip pb-[8px] pt-[64px] px-[24px] relative shrink-0 w-[1440px]" data-name="Footer">
      <Columns3 />
      <Copyright />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[3825px] items-start left-0 top-[146px]">
      <HeroHeadingLeft />
      <FeaturesList />
      <FeaturesList1 />
      <FeaturesList2 />
      <FeaturesList3 />
      <FeaturesList4 />
      <FeaturesList5 />
      <Footer />
    </div>
  );
}

function HomeSmile() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="home-smile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="home-smile">
          <path d={svgPaths.p4921200} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <HomeSmile />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">Home</p>
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
          <g id="Icon">
            <path d={svgPaths.p334b6c80} fill="var(--fill-0, #BBFF85)" />
            <path d={svgPaths.p3dc49580} fill="var(--fill-0, #BBFF85)" />
            <path d={svgPaths.p1cef8100} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
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
    <div className="absolute bg-[rgba(246,246,246,0.4)] box-border grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[60px] left-[380px] overflow-clip px-[24px] py-0 right-[392px] rounded-[76px] top-[62px]" data-name="Navbar Logo Left">
      <AboutMe />
      <HomeVutton />
      <HelloWorld />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[380px] right-[392px] top-[62px]">
      <NavbarLogoLeft />
    </div>
  );
}

export default function Playgoround() {
  return (
    <div className="bg-white relative size-full" data-name="Playgoround">
      <Group />
      <Frame5 />
    </div>
  );
}