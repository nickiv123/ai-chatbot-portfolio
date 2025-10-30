function Heading() {
  return (
    <div className="absolute h-[17.5px] left-0 top-0 w-[168.195px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[12.25px] text-neutral-950 text-nowrap top-[0.5px] tracking-[-0.0179px] whitespace-pre">Nike Booking Tool</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[14.5px] items-start left-0 top-[28px] w-[71.945px]" data-name="Link">
      <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-[rgba(0,0,0,0.6)] text-nowrap tracking-[-0.0179px] underline whitespace-pre">View Project</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[45.5px] left-0 top-0 w-[168.195px]" data-name="Container">
      <Heading />
      <Link />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[17.5px] left-0 top-0 w-[168.203px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[12.25px] text-neutral-950 text-nowrap top-[0.5px] tracking-[-0.0179px] whitespace-pre">Personal Travel Guide</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[14.5px] items-start left-0 top-[28px] w-[71.945px]" data-name="Link">
      <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-[rgba(0,0,0,0.6)] text-nowrap tracking-[-0.0179px] underline whitespace-pre">View Project</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[45.5px] left-[210.19px] top-0 w-[168.203px]" data-name="Container">
      <Heading1 />
      <Link1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[12.25px] text-neutral-950 text-nowrap top-[0.5px] tracking-[-0.0179px] whitespace-pre">Google Ads</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[12.25px] text-[rgba(0,0,0,0.4)] text-nowrap top-[0.5px] tracking-[-0.0179px] whitespace-pre">Not available</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[45.5px] items-start left-[420.4px] top-0 w-[168.195px]" data-name="Container">
      <Heading2 />
      <Paragraph />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[17.5px] left-0 top-0 w-[168.203px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[12.25px] text-neutral-950 text-nowrap top-[0.5px] tracking-[-0.0179px] whitespace-pre">Mastery</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[14.5px] items-start left-0 top-[28px] w-[71.945px]" data-name="Link">
      <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-[rgba(0,0,0,0.6)] text-nowrap tracking-[-0.0179px] underline whitespace-pre">View Project</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[45.5px] left-[630.59px] top-0 w-[168.203px]" data-name="Container">
      <Heading3 />
      <Link2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[65px] relative shrink-0 w-[420px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[37px] leading-[17.5px] left-0 not-italic text-[80px] text-neutral-950 top-[27.84px] w-[425px]">ABOUT ME</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[340px] h-[65px] items-start relative shrink-0">
      <Heading4 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[65px] justify-center leading-[0] not-italic relative shrink-0 text-[80px] text-neutral-950 w-[247px]">
        <p className="leading-[17.5px]">EMAIL</p>
      </div>
    </div>
  );
}

function Link3() {
  return <div className="basis-0 grow min-h-px min-w-px shrink-0 w-px" data-name="Link" />;
}

export default function Footer() {
  return (
    <div className="bg-[#f6f6f6] relative size-full" data-name="Footer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[56px] items-start pb-0 pt-[140px] px-[42px] relative size-full">
          <Container4 />
          <Frame />
          <Link3 />
        </div>
      </div>
    </div>
  );
}