import imgScreenshot20251027At75341Pm1 from "figma:asset/3e346b2c5c178a9cc57d12bf04780fbcf1467632.png";

export default function HeroHeadingRight({ noScale = false }: { noScale?: boolean }) {
  return (
    <div className="bg-[#f6f6f6] relative size-full" data-name="Hero Heading Right">
      <div className="flex flex-row items-center justify-center size-full">
        <div className={`box-border content-stretch flex gap-[24px] items-center justify-center px-[24px] py-8 md:py-[64px] relative size-full ${noScale ? 'overflow-auto' : 'md:overflow-visible overflow-hidden'}`}>
          <div 
            className={`h-[529px] relative shrink-0 w-[1268px] origin-center ${noScale ? 'scale-100' : 'md:scale-100 scale-[0.28]'}`}
            data-name="Screenshot 2025-10-27 at 7.53.41 PM 1"
          >
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251027At75341Pm1} />
          </div>
        </div>
      </div>
    </div>
  );
}
