import imgSimulatorScreenshotIphone1520240523At17261 from "figma:asset/8fee3e36d895d950fda9a0b89552402ae742aa82.png";
import imgScreenshot20240528At10151 from "figma:asset/db58a2e698450af752983d301616d494583cdca1.png";
import imgScreenshot20240528At10051 from "figma:asset/ac25224327511da568fee91c7ac6ec136f729772.png";

function Frame() {
  return (
    <div className="bg-white relative rounded-[24.043px] shrink-0">
      <div className="content-stretch flex gap-[1.315px] items-start overflow-clip relative rounded-[inherit]">
        <div className="h-[526px] relative shrink-0 w-[242.627px]" data-name="simulator_screenshot_-_iphone_15_-_2024-05-23_at_17.26 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSimulatorScreenshotIphone1520240523At17261} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[6.106px] border-black border-solid inset-[-6.106px] pointer-events-none rounded-[30.1491px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[28.199px] shrink-0">
      <div className="content-stretch flex gap-[1.542px] items-start overflow-clip relative rounded-[inherit]">
        <div className="h-[525.494px] relative shrink-0 w-[242.393px]" data-name="Screenshot 2024-05-28 at 10.15 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20240528At10151} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[7.162px] border-black border-solid inset-[-7.162px] pointer-events-none rounded-[35.3608px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative rounded-[24.02px] shrink-0">
      <div className="content-stretch flex gap-[1.313px] items-start overflow-clip relative rounded-[inherit]">
        <div className="h-[525.494px] relative shrink-0 w-[242.393px]" data-name="Screenshot 2024-05-28 at 10.05 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20240528At10051} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[6.1px] border-black border-solid inset-[-6.1px] pointer-events-none rounded-[30.1202px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[85.215px] items-start relative shrink-0">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function HeroHeadingRight() {
  return (
    <div className="bg-[#f6f6f6] relative size-full" data-name="Hero Heading Right">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[24px] items-center justify-center px-[24px] py-[64px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}