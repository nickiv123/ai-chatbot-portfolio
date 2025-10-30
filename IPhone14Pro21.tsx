import svgPaths from "./svg-ds07lkbr4i";
import imgNike216098158542 from "figma:asset/3599c4549f2565ef513bfc60f307a4ada234d5ec.png";
import imgNikeLan201808012355520Ljs2 from "figma:asset/dcad1eedbd1cf5e06dd131e60dad12a7bd5911e1.png";

function Frame10() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.11] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">{`New York City `}</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-white h-[38px] left-[calc(20%+4.4px)] rounded-[30px] top-[253px] w-[149px]">
      <div className="box-border content-stretch flex flex-col gap-[10px] h-[38px] items-center justify-center overflow-clip px-[34px] py-[13px] relative rounded-[inherit] w-[149px]">
        <Frame10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#777777] border-solid inset-0 pointer-events-none rounded-[30px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.11] not-italic relative shrink-0 text-white">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[16px] tracking-[-0.24px] w-[362px]">Customized Nike Apparel In-store.</p>
      <p className="font-['Futura:Bold',sans-serif] relative shrink-0 text-[28px] text-nowrap tracking-[-0.42px] whitespace-pre">NIKE BY YOU</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[36px] overflow-clip relative rounded-[30px] shrink-0 w-[118px]">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[1.11] left-[21px] not-italic text-[16px] text-black text-nowrap top-[9px] tracking-[-0.24px] whitespace-pre">Book Now</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[20px] top-[86px]">
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#b0a8a8] h-[211px] left-0 overflow-clip top-[353px] w-[393px]">
      <div className="absolute h-[210px] left-[-6px] top-px w-[405px]" data-name="nike-2-1609815854 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNike216098158542} />
      </div>
      <div className="absolute bg-black h-[211px] left-0 opacity-30 top-0 w-[393px]" />
      <Frame7 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[353px]">
      <Frame />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.11] not-italic relative shrink-0 text-white">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[16px] tracking-[-0.24px] w-[362px]">Get Personalized Advice from Nike’s Athletes.</p>
      <p className="font-['Futura:Bold',sans-serif] relative shrink-0 text-[28px] text-nowrap tracking-[-0.42px] whitespace-pre">EXPERT SESSION</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white h-[36px] overflow-clip relative rounded-[30px] shrink-0 w-[118px]">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[1.11] left-[21px] not-italic text-[16px] text-black text-nowrap top-[9px] tracking-[-0.24px] whitespace-pre">Book Now</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[20px] top-[75px]">
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#b0a8a8] h-[211px] left-0 overflow-clip top-[568px] w-[393px]">
      <div className="absolute h-[210px] left-[-6px] top-px w-[399px]" data-name="nike_LAN_2018_0801_235552-0_LJS 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNikeLan201808012355520Ljs2} />
      </div>
      <div className="absolute bg-black h-[211px] left-0 opacity-30 top-0 w-[393px]" />
      <Frame6 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[568px]">
      <Frame1 />
    </div>
  );
}

function Map() {
  return (
    <div className="absolute left-[17px] size-[22px] top-[8px]" data-name="map-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_4_226)" id="map-01">
          <path d={svgPaths.p313d2d00} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_4_226">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-white h-[37px] left-[20px] rounded-[16px] top-[253px] w-[56px]">
      <div className="h-[37px] overflow-clip relative rounded-[inherit] w-[56px]">
        <Map />
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Calendar() {
  return (
    <div className="absolute h-[23px] left-[calc(80%+38.6px)] top-[63px] w-[26px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 23">
        <g id="calendar">
          <path d={svgPaths.p3bbe1100} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="home-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="home-01">
          <path d={svgPaths.p191bd400} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SearchSm() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="search-sm">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="search-sm">
          <path d={svgPaths.p24273300} id="Icon" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" />
        </g>
      </svg>
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="heart">
          <path clipRule="evenodd" d={svgPaths.p3fbb7e80} fillRule="evenodd" id="Icon" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ShoppingBag() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="shopping-bag-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="shopping-bag-02">
          <path d={svgPaths.pbe9f700} id="Icon" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="user-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="user-01">
          <path d={svgPaths.p1dfedb00} id="Icon" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bottom-[51px] content-stretch flex gap-[52px] items-center left-[calc(50%+0.5px)] translate-x-[-50%]">
      <Home />
      <SearchSm />
      <Heart />
      <ShoppingBag />
      <User />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[-1.4px] contents left-1/2 translate-x-[-50%]">
      <div className="absolute bg-white bottom-[6.6px] h-[4.67px] left-[calc(50%+0.524px)] rounded-[100px] translate-x-[-50%] w-[140.432px]" data-name="rect" />
      <div className="absolute bg-white bottom-[9px] h-[5px] left-[calc(50%-3.668px)] rounded-[100px] translate-x-[-50%] w-[140.432px]" data-name="rect" />
      <div className="absolute bg-black bottom-[7px] h-[5px] left-[calc(50%-2.62px)] rounded-[100px] translate-x-[-50%] w-[140.432px]" data-name="rect" />
      <div className="absolute bg-white bottom-px h-[83px] left-1/2 translate-x-[-50%] w-[393px]">
        <div aria-hidden="true" className="absolute border border-[#f6f6f6] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute bg-white bottom-[-1.4px] h-[4.67px] left-[calc(50%-0.524px)] rounded-[100px] translate-x-[-50%] w-[140.432px]" data-name="rect" />
      <div className="absolute bg-white bottom-px h-[5px] left-[calc(50%-4.716px)] rounded-[100px] translate-x-[-50%] w-[140.432px]" data-name="rect" />
      <div className="absolute bg-black bottom-[8px] h-[5px] left-[calc(50%-3.668px)] rounded-[100px] translate-x-[-50%] w-[140.432px]" data-name="rect" />
      <p className="absolute bottom-[47px] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.11] left-[calc(30%+5.248px)] not-italic text-[#8c8c8c] text-[11px] text-center tracking-[-0.165px] translate-x-[-50%] translate-y-[100%] w-[28.296px]">Shop</p>
      <p className="absolute bottom-[47px] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.11] left-[calc(50%+0.652px)] not-italic text-[#8c8c8c] text-[11px] text-center tracking-[-0.165px] translate-x-[-50%] translate-y-[100%] w-[50.304px]">Favorites</p>
      <p className="absolute bottom-[47px] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.11] left-[calc(70%-3.62px)] not-italic text-[#8c8c8c] text-[11px] text-center tracking-[-0.165px] translate-x-[-50%] translate-y-[100%] w-[20.96px]">Bag</p>
      <p className="absolute bottom-[47px] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.11] left-[calc(90%-8.408px)] not-italic text-[#8c8c8c] text-[11px] text-center tracking-[-0.165px] translate-x-[-50%] translate-y-[100%] w-[34.584px]">Profile</p>
      <Frame8 />
      <p className="absolute bottom-[47px] font-['Inter:Medium',sans-serif] font-medium h-[11.209px] leading-[1.11] left-[calc(10%+9.944px)] not-italic text-[11px] text-black text-center tracking-[-0.165px] translate-x-[-50%] translate-y-[100%] w-[32.488px]">Home</p>
    </div>
  );
}

export default function IPhone14Pro() {
  return (
    <div className="bg-white overflow-clip relative rounded-[45px] size-full" data-name="iPhone 14 Pro - 21">
      <Group2 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.14] left-[20px] not-italic text-[20px] text-nowrap text-white top-[796px] tracking-[-1px] whitespace-pre">{`Shoes `}</p>
      <div className="absolute font-['Futura:Condensed_ExtraBold',sans-serif] leading-[0.895] left-[21px] not-italic text-[54px] text-black top-[131px] tracking-[-2.7px] w-[362px]">
        <p className="mb-0">NIKE IN - STORE</p>
        <p>EXPERIENCES</p>
      </div>
      <Frame9 />
      <div className="absolute h-0 left-0 top-[304px] w-[393px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 1">
            <line id="Line 802" stroke="var(--stroke-0, #CBCBCB)" x2="393" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(60%+57.2px)] size-[20px] top-[182px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, #DF3423)" id="Ellipse 216" r="10" />
        </svg>
      </div>
      <Group />
      <Group1 />
      <Frame11 />
      <div className="absolute h-[16px] left-[18px] top-[68px] w-[8px]">
        <div className="absolute inset-[-7.19%_-14.38%_-7.19%_-20.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 19">
            <path d={svgPaths.p26083500} id="Vector 22" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2.3" />
          </svg>
        </div>
      </div>
      <Calendar />
    </div>
  );
}