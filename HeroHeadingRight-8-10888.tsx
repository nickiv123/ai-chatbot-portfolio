import imgImg2950 from "figma:asset/aa67976bd6888cef1042fcf237f9c0b16cbf309d.png";
import imgImg30421 from "figma:asset/b5bfb73e55b6d0f471f554d779a0413478fcbcac.png";

function Frame2() {
  return (
    <div className="bg-white relative rounded-[30.123px] shrink-0">
      <div className="content-stretch flex gap-[1.647px] items-start overflow-clip relative rounded-[inherit]">
        <div className="h-[585.938px] relative shrink-0 w-[270.386px]" data-name="RPReplay_Final1713295527 1">
          <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
            <source src="/_videos/v1/0b4d15d05f7fe34c22e66cc561e7e240fabd7db0" />
          </video>
        </div>
        <div className="absolute bg-[#fffeff] h-[27.097px] left-[72.09px] rounded-[14.667px] top-[7.21px] w-[122.557px]" />
      </div>
      <div aria-hidden="true" className="absolute border-[7.65px] border-black border-solid inset-[-7.65px] pointer-events-none rounded-[37.7732px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative rounded-[31.323px] shrink-0">
      <div className="content-stretch flex gap-[1.713px] items-start overflow-clip relative rounded-[inherit]">
        <div className="h-[583.671px] relative shrink-0 w-[269.228px]" data-name="IMG_2950">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg2950} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[7.955px] border-black border-solid inset-[-7.955px] pointer-events-none rounded-[39.278px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[26.714px] shrink-0">
      <div className="content-stretch flex gap-[1.461px] items-start overflow-clip relative rounded-[inherit]">
        <div className="h-[584.447px] relative shrink-0 w-[269.586px]" data-name="IMG_3042 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg30421} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[6.785px] border-black border-solid inset-[-6.785px] pointer-events-none rounded-[33.4986px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[85px] h-[575px] items-start relative shrink-0">
      <Frame2 />
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame3 />
    </div>
  );
}

export default function HeroHeadingRight() {
  return (
    <div className="bg-[#f6f6f6] relative size-full" data-name="Hero Heading Right">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[24px] items-center justify-center px-[24px] py-[64px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}