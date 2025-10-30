import svgPaths from "./svg-zbs6lutne6";
import img0C281F6366084875Ac40Afe30C247C991 from "figma:asset/ada25f500685ca72d12cedf9feb60325f06b3112.png";
import imgCircle from "figma:asset/d9a32334729f9d40d02fbb2ee57ffa97ce105e6a.png";
import imgUpRight from "figma:asset/9ee8f9edd7f875d8bec3f1c466f51073279aae1c.png";
import imgRightArrowStraight from "figma:asset/4922dea12e9242d760987aabb7fb74a26ca27936.png";
import imgImg6481 from "figma:asset/1aedec79b77c5879d9faca582733bbd81879f242.png";
import imgImg65951 from "figma:asset/245b534fc69e6ece2925559acab4bfbad8c32e3c.png";
import imgImg1733 from "figma:asset/725ea1c43b88fac709b59c70216ef01b1f428ce5.png";
import imgImg80871 from "figma:asset/b9083f0d903076d96d3aacfbefc2cf1c39b70dbd.png";
import imgImg4992 from "figma:asset/1af226d562cdda9535d3ce773271c15799be57d7.png";
import imgImg2157 from "figma:asset/9b5e6ec8b6ea2e3153193a250d8001c8e6b31249.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#1a1a1a] text-[88px] text-center tracking-[-0.88px] uppercase w-full">About me</p>
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

function Intro() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[580px]" data-name="Intro">
      <p className="font-['Helvetica_Neue:Bold','Noto_Sans:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[#1a1a1a] text-[24px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
        2025 So Far →
      </p>
    </div>
  );
}

function Feature() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Feature">
      <div className="basis-0 font-['Helvetica_Neue:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[16px]">
        <p className="mb-0">Explored Arches + Zion 🏜️</p>
        <p className="mb-0">Ran 259.7 miles</p>
        <p>10K PR (1:05:59)</p>
      </div>
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

function FeaturesList() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[80px] items-start justify-center overflow-clip px-[24px] py-[64px] relative shrink-0 w-[1440px]" data-name="Features List">
      <Columns />
    </div>
  );
}

function Intro1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[580px]" data-name="Intro">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] w-full">Early days</p>
    </div>
  );
}

function Feature1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Feature">
      <div className="basis-0 font-['Helvetica_Neue:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[16px]">
        <p className="mb-0">{`Born and raised in Viet Nam, I loved drawing and art from a young age. Since I didn't have the luxury of owning art supplies at the time, somehow I ended up using my mom's lipstick to draw on the walls.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`I'm still amazed that my parents let me do this and never painted over my creations.`}</p>
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

function FeaturesList1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[80px] items-start justify-center overflow-clip px-[24px] py-[64px] relative shrink-0 w-[1440px]" data-name="Features List">
      <Columns1 />
    </div>
  );
}

function Columns2() {
  return (
    <div className="content-stretch flex gap-[80px] items-center justify-center relative shrink-0 w-[960px]" data-name="Columns">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "681.984375", "--transform-inner-height": "1068" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[1068px] relative w-[682px]" data-name="0C281F63-6608-4875-AC40-AFE30C247C99 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img0C281F6366084875Ac40Afe30C247C991} />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturesList2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[80px] h-[982px] items-center justify-center overflow-clip px-[24px] py-[64px] relative shrink-0 w-[1440px]" data-name="Features List">
      <Columns2 />
      <div className="absolute h-[242px] left-[99px] top-[321px] w-[282px]" data-name="Circle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCircle} />
        </div>
      </div>
      <p className="absolute font-['Reenie_Beanie:Regular',sans-serif] leading-[normal] left-[807px] not-italic text-[52px] text-black top-[87px] w-[214px]">Me</p>
      <p className="absolute font-['Reenie_Beanie:Regular',sans-serif] leading-[normal] left-[77px] not-italic text-[52px] text-black top-[48px] w-[397px]">Oldest known artifact</p>
      <div className="absolute h-[110px] left-[702px] top-[95px] w-[92.288px]" data-name="Up right">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUpRight} />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9993971586227417)+(var(--transform-inner-height)*0.03471750393509865)))] items-center justify-center left-[205px] top-[87px] w-[calc(1px*((var(--transform-inner-height)*0.9993971586227417)+(var(--transform-inner-width)*0.03471750393509865)))]" style={{ "--transform-inner-width": "253.96875", "--transform-inner-height": "61.78125" } as React.CSSProperties}>
        <div className="flex-none rotate-[271.99deg]">
          <div className="h-[61.789px] relative w-[253.973px]" data-name="Right arrow straight">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[156.78%] left-[-4.7%] max-w-none top-[-22.61%] w-[107.67%]" src={imgRightArrowStraight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Intro2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[580px]" data-name="Intro">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] w-full">Nicki love being outdoor and exploring different countries.</p>
    </div>
  );
}

function Feature2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Feature">
      <div className="basis-0 font-['Helvetica_Neue:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[16px]">
        <p className="mb-0">{`Growing up in Portland, OR nurtured my love for nature and creativity. It allowed me to explore art, fashion, and psychology. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>Here are some of snippets of my life. Enjoy!</p>
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

function Columns3() {
  return (
    <div className="content-stretch flex gap-[40px] items-start justify-center relative shrink-0 w-[1200px]" data-name="Columns">
      <Intro2 />
      <Column3 />
    </div>
  );
}

function FeaturesList3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[80px] items-start justify-center overflow-clip px-[24px] py-[64px] relative shrink-0 w-[1440px]" data-name="Features List">
      <Columns3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[grid-area:2_/_3] content-stretch flex gap-[28px] items-start relative shrink-0">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="IMG_6481">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg6481} />
      </div>
    </div>
  );
}

function FeaturesList4() {
  return (
    <div className="bg-white box-border gap-[28px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[1240px] overflow-clip px-[53px] py-[38px] relative shrink-0 w-[1440px]" data-name="Features List">
      <div className="[grid-area:1_/_1] relative shrink-0" data-name="IMG_6595 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg65951} />
      </div>
      <div className="[grid-area:1_/_2] relative shrink-0" data-name="IMG_1733">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg1733} />
      </div>
      <div className="[grid-area:1_/_3] relative shrink-0" data-name="IMG_8087 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg80871} />
      </div>
      <div className="[grid-area:2_/_1] relative shrink-0" data-name="IMG_4992">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg4992} />
      </div>
      <div className="[grid-area:2_/_2] relative shrink-0" data-name="IMG_2157">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg2157} />
      </div>
      <Frame1 />
    </div>
  );
}

function Intro3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[580px]" data-name="Intro">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] w-full">What my co-worker said about me</p>
    </div>
  );
}

function Feature3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Feature">
      <div className="basis-0 font-['Helvetica_Neue:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[0px] text-[16px]">
        <p className="mb-0">
          <span>{`“Jumping into the O2O service documentation willing to help! She understands our fast timeline + is willing to jump in to help the team. `}</span>
          <span className="font-['Helvetica_Neue:Bold',sans-serif] not-italic">She takes feedback well + immediately actions it! She is a true team player-- bringing positive energy + a willingness to help her teammates!</span>
          <span>{` I am super thankful for her proactive approach!"`}</span>
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>- Nicole M / Global Project Manager@Nike</p>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Feature3 />
    </div>
  );
}

function Columns4() {
  return (
    <div className="content-stretch flex gap-[40px] items-start justify-center relative shrink-0 w-[1200px]" data-name="Columns">
      <Intro3 />
      <Column4 />
    </div>
  );
}

function FeaturesList5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[80px] items-start justify-center overflow-clip px-[24px] py-[64px] relative shrink-0 w-[1440px]" data-name="Features List">
      <Columns4 />
    </div>
  );
}

function Intro4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[580px]" data-name="Intro">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] w-full">Simple things that I love</p>
    </div>
  );
}

function Feature4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Feature">
      <div className="basis-0 font-['Helvetica_Neue:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[16px]">
        <p className="mb-0">Going on walks/hiking/running</p>
        <p className="mb-0">Hosting dinner parties</p>
        <p>Vibe coding and sharing my experience on TikTok</p>
      </div>
    </div>
  );
}

function Column5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Feature4 />
    </div>
  );
}

function Columns5() {
  return (
    <div className="content-stretch flex gap-[40px] items-start justify-center relative shrink-0 w-[1200px]" data-name="Columns">
      <Intro4 />
      <Column5 />
    </div>
  );
}

function FeaturesList6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[80px] items-start justify-center overflow-clip px-[24px] py-[64px] relative shrink-0 w-[1440px]" data-name="Features List">
      <Columns5 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Footer Links">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#212121] text-[14px] w-[min-content]">Booking Tool</p>
      <div className="box-border content-stretch flex gap-[10px] h-[21px] items-center px-0 py-[10px] relative shrink-0 w-[115px]" data-name="View project">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap underline whitespace-pre">View Project</p>
      </div>
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

function Column6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Content1 />
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Footer Links">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#212121] text-[14px] w-[min-content]">Personal Travel Guide</p>
      <div className="box-border content-stretch flex gap-[10px] h-[21px] items-center px-0 py-[10px] relative shrink-0 w-[115px]" data-name="View project">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap underline whitespace-pre">View Project</p>
      </div>
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

function Column7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Content2 />
    </div>
  );
}

function FooterLinks2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Footer Links">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#212121] text-[14px] w-[min-content]">Global Insights</p>
      <div className="box-border content-stretch flex gap-[10px] h-[21px] items-center px-0 py-[10px] relative shrink-0 w-[115px]" data-name="View project">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap underline whitespace-pre">View Project</p>
      </div>
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

function Column8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Content3 />
    </div>
  );
}

function FooterLinks3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Footer Links">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#212121] text-[14px] w-[min-content]">Mastery</p>
      <div className="box-border content-stretch flex gap-[10px] h-[21px] items-center px-0 py-[10px] relative shrink-0 w-[115px]" data-name="View project">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap underline whitespace-pre">View Project</p>
      </div>
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

function Column9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Content4 />
    </div>
  );
}

function FooterLinks4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Footer Links">
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[183px]" data-name="Meme">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap whitespace-pre">ABOUT ME</p>
      </div>
    </div>
  );
}

function FooterLinks5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Footer Links">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[178.67px]" data-name="Email">
        <a className="[white-space-collapse:collapse] block font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap" href="mailto:itsncki@gmail.com">
          <p className="cursor-pointer leading-[1.5] whitespace-pre">EMAIL</p>
        </a>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[183px]" data-name="Meme">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap whitespace-pre">ABOUT ME</p>
      </div>
      <FooterLinks4 />
      <FooterLinks5 />
    </div>
  );
}

function Column10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Content5 />
    </div>
  );
}

function SmallColumns() {
  return (
    <div className="box-border content-stretch flex gap-[32px] items-start pb-0 pt-[16px] px-0 relative shrink-0 w-[703px]" data-name="Small Columns">
      <Column6 />
      <Column7 />
      <Column8 />
      <Column9 />
      <Column10 />
    </div>
  );
}

function Columns6() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[960px]" data-name="Columns">
      <SmallColumns />
    </div>
  );
}

function Copyright() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-0 py-[16px] relative shadow-[0px_-1px_0px_0px_#e4ebf3] shrink-0 w-[940px]" data-name="Copyright">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="telescope">
        <div className="absolute inset-[11.03%_6.46%_8.33%_8.62%]" data-name="Icon">
          <div className="absolute inset-[-5.17%_-4.91%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
              <path d={svgPaths.p3488d480} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#212121] text-[14px] text-center text-nowrap whitespace-pre">Currently looking for the next adventure!</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f6f6f6] box-border content-stretch flex flex-col gap-[40px] h-[391px] items-center justify-center overflow-clip pb-[8px] pt-[64px] px-[24px] relative shrink-0 w-[1440px]" data-name="Footer">
      <Columns6 />
      <Copyright />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4025px] items-start left-0 top-[146px]">
      <HeroHeadingLeft />
      <FeaturesList />
      <div className="h-0 relative shrink-0 w-[1320px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1320 1">
            <line id="Line 814" stroke="var(--stroke-0, #232323)" x2="1320" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FeaturesList1 />
      <FeaturesList2 />
      <FeaturesList3 />
      <FeaturesList4 />
      <FeaturesList5 />
      <FeaturesList6 />
      <Footer />
    </div>
  );
}

function NavbarLogoLeft() {
  return (
    <div className="absolute bg-[rgba(246,246,246,0.4)] box-border grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[60px] left-[380px] overflow-clip px-[24px] py-0 right-[392px] rounded-[76px] top-[62px]" data-name="Navbar Logo Left">
      <div className="[grid-area:1_/_3] bg-[rgba(246,246,246,0)] relative shrink-0" data-name="About Me">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[24px] relative size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="star-06">
                  <div className="absolute inset-[8.333%]" data-name="Icon">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                        <path d={svgPaths.p38bcf800} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">About Me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] bg-[rgba(246,246,246,0)] relative shrink-0" data-name="Home vutton">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[24px] relative size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="home-smile">
                  <div className="absolute inset-[9.45%_12.5%_12.5%_12.5%]" data-name="Icon">
                    <div className="absolute inset-[-5.34%_-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
                        <path d={svgPaths.p3ae530f0} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">Home</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_2] bg-[rgba(246,246,246,0)] relative shrink-0" data-name="Hello world">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[24px] relative size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="globe-04">
                <div className="absolute inset-[8.333%]" data-name="Icon">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                      <path d={svgPaths.p2474a100} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">Playground</p>
            </div>
          </div>
        </div>
      </div>
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

export default function AboutMe() {
  return (
    <div className="bg-white relative size-full" data-name="About Me">
      <Group />
      <Frame />
    </div>
  );
}