import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import imgAdvertiseOnGoogleAdsOfficialLogo1 from "figma:asset/513291a82e5a7c8569af29d12dc085550d9fa3d7.png";
import imgNikeBooking from "figma:asset/b1b5d5860aaae13c9c4dfb081dfa84db8d6ba19b.png";
import imgOhWow from "figma:asset/8fee3e36d895d950fda9a0b89552402ae742aa82.png";
import imgMastery from "figma:asset/30030651e2ef21ab05d130c35bb75789bb6c8a2b.png";
import imgScreenshot20240528At10151 from "figma:asset/db58a2e698450af752983d301616d494583cdca1.png";
import imgScreenshot20240528At10051 from "figma:asset/ac25224327511da568fee91c7ac6ec136f729772.png";
import imgHeroPhoto from "figma:asset/f29dea4be9967ac1b7342dc5d69d184d6c554272.png";
import CurvedLoop from "./CurvedLoop";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import DecryptedText from "./DecryptedText";

// Component for animated project cards
function ProjectCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function ResponsivePortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState("Click to view case study");
  const [cursorBgColor, setCursorBgColor] = useState("bg-black");
  const [showBanner, setShowBanner] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const heroSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end end"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Track active section based on scroll position and show/hide nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "work", "about"];
      const scrollPosition = window.scrollY + 200;

      // Show nav after scrolling 100px
      setShowNav(window.scrollY > 100);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-neutral-50 min-h-screen relative cursor-none">
      {/* Custom Cursor */}
      <div
        className="hidden md:block fixed pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
        aria-hidden="true"
      >
        <div className="w-3 h-3 rounded-full transition-colors duration-200 border border-black" style={{ backgroundColor: '#BBFF85' }} />
      </div>

      {/* Custom Tooltip */}
      {showTooltip && (
        <div
          className="hidden md:block fixed pointer-events-none z-[99] -translate-x-1/2 transition-opacity duration-200"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y - 40}px`,
          }}
          role="tooltip"
          aria-live="polite"
        >
          <div className="bg-neutral-900 text-neutral-50 text-sm px-3 py-1.5 rounded-md whitespace-nowrap">
            {tooltipText}
          </div>
        </div>
      )}
      {/* Navigation - shows on scroll or always visible at top */}
      <NavigationBar 
        currentPage="home"
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Dismissible Banner */}
      {showBanner && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[90] px-4"
        >

        </motion.div>
      )}

      {/* Hero Section */}
      <main id="main-content">
      <section id="home" className="relative min-h-screen flex flex-col justify-between py-6 md:py-8 lg:py-12 overflow-hidden bg-[#2a2a2a]" aria-label="Hero section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 w-full flex-1 flex flex-col">
          
          {/* Row 1: Nicki + Tagline */}
          <div className="flex items-center justify-between border-b border-neutral-50/20 flex-1 min-h-0 gap-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] 2xl:text-[12rem] text-neutral-50 leading-none font-semibold"
            >
              <DecryptedText 
                text="Nicki" 
                animateOn="view"
                sequential={true}
                speed={80}
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs sm:text-sm lg:text-base text-neutral-50/90 max-w-[120px] sm:max-w-xs lg:max-w-sm text-right"
            >
              A designer dedicated to blurring the lines between digital and physical experiences.
            </motion.p>
          </div>

          {/* Row 2: Specialties + Vuong */}
          <div className="flex items-center justify-between border-b border-neutral-50/20 flex-1 min-h-0 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs sm:text-sm lg:text-base text-neutral-50/70 max-w-xs"
            >
              Product Design, UX Research,<br />
              Service Design, Digital Experiences
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] 2xl:text-[12rem] text-neutral-50 leading-none text-right font-semibold"
            >
              <DecryptedText 
                text="Vuong" 
                animateOn="view"
                sequential={true}
                speed={80}
              />
            </motion.h1>
          </div>

          {/* Row 3: Product-led + Contact */}
          <div className="flex items-center justify-between border-b border-neutral-50/20 flex-1 min-h-0 gap-4">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] 2xl:text-[12rem] text-neutral-50 leading-none font-semibold"
            >
              <DecryptedText 
                text="Product-led" 
                animateOn="view"
                sequential={true}
                speed={80}
              />
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs sm:text-sm lg:text-base text-neutral-50/70 text-right hidden md:block"
            >
              Google Ads<br />Nike<br />Startups
            </motion.div>
          </div>

          {/* Row 4: Location + Designer */}
          <div className="flex items-center justify-between flex-1 min-h-0 gap-4">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs sm:text-sm lg:text-base text-neutral-50/70"
            >
              Los Angeles<br />
              —California
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] 2xl:text-[12rem] text-neutral-50 leading-none text-right font-semibold"
            >
              <DecryptedText 
                text="Designer" 
                animateOn="view"
                sequential={true}
                speed={80}
              />
            </motion.h3>
          </div>

        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-16 md:py-24 lg:py-32 pt-[112px] pr-[0px] pb-[30px] pl-[0px]" aria-label="Featured work">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 md:mb-24"
          >
            <CurvedLoop 
              marqueeText="✦ Selected ✦ work"
              speed={2}
              curveAmount={400}
              direction="left"
              interactive={true}
            />
          </motion.div>

          {/* Project 1: Nike Booking Tool */}
          <ProjectCard delay={0.1}>
          <div className="mb-32 md:mb-48">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-normal">
                      Nike Booking Tool
                    </h3>
                    <p className="text-base md:text-lg text-black/60 leading-relaxed">
                      A global booking tool that streamlines Nike's in-store experience, drives revenue, and builds customer loyalty.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-8 border-t border-black/10 mt-8">
                  <p className="text-xs uppercase tracking-wider text-black/40 text-[14px]">2022 - 2023</p>
                  <p className="text-sm text-black/40">B2C / Global / Service Design</p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <a 
                  href="/nike-case-study" 
                  className="block"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, "", "/nike-case-study");
                    window.dispatchEvent(new PopStateEvent("popstate"));
                  }}
                  onMouseEnter={() => {
                    setShowTooltip(true);
                    setTooltipText("View");
                    setCursorBgColor("bg-green-500");
                  }}
                  onMouseLeave={() => {
                    setShowTooltip(false);
                    setCursorBgColor("bg-black");
                  }}
                >
                  <div className="aspect-[4/3] bg-neutral-200 rounded-2xl p-8 md:p-12 flex items-center justify-center hover:bg-neutral-300 transition-colors">
                    <div className="w-64 md:w-80">
                      <img
                        alt="Nike booking tool mobile app interface showing in-store experience booking"
                        className="w-full h-auto rounded-3xl shadow-2xl bg-white"
                        src={imgNikeBooking}
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          </ProjectCard>

          {/* Project 2: Google Ads */}
          <ProjectCard delay={0.2}>
          <div className="mb-32 md:mb-48">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-normal">
                      AI-Powered Shopping Experiences
                    </h3>
                    <p className="text-base md:text-lg text-black/60 leading-relaxed">
                      Design Better, More Helpful Shopping Experiences With AI and LLMs
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-8 border-t border-black/10 mt-8">
                  <p className="text-xs uppercase tracking-wider text-black/40 text-[14px]">2024 - 2025</p>
                  <p className="text-sm text-black/40">Design / UXR / Optimization</p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div 
                  onMouseEnter={() => {
                    setShowTooltip(true);
                    setTooltipText("Not available");
                    setCursorBgColor("bg-black");
                  }}
                  onMouseLeave={() => {
                    setShowTooltip(false);
                    setCursorBgColor("bg-black");
                  }}
                >
                  <div className="aspect-[4/3] bg-neutral-200 rounded-2xl p-8 md:p-12 flex items-center justify-center hover:bg-neutral-300 transition-colors">
                    <img
                      alt="Google Ads logo representing AI-powered shopping experiences project"
                      className="w-full max-w-lg h-auto"
                      src={imgAdvertiseOnGoogleAdsOfficialLogo1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ProjectCard>

          {/* Project 3: Mastery */}
          <ProjectCard delay={0.1}>
          <div className="mb-32 md:mb-48">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-normal">
                      Mastery
                    </h3>
                    <p className="text-base md:text-lg text-black/60 leading-relaxed">
                      Mental performance app with AI personalization designed to help athletes achieve peak performance through guided exercises and tracking.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-8 border-t border-black/10 mt-8">
                  <p className="text-xs uppercase tracking-wider text-black/40 text-[14px]">2024</p>
                  <p className="text-sm text-black/40">Mobile / B2C / Product Design</p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <a 
                  href="/mastery-case-study" 
                  className="block"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, "", "/mastery-case-study");
                    window.dispatchEvent(new PopStateEvent("popstate"));
                  }}
                  onMouseEnter={() => {
                    setShowTooltip(true);
                    setTooltipText("View");
                    setCursorBgColor("bg-green-500");
                  }}
                  onMouseLeave={() => {
                    setShowTooltip(false);
                    setCursorBgColor("bg-black");
                  }}
                >
                  <div className="aspect-[4/3] bg-neutral-200 rounded-2xl p-8 md:p-12 flex items-center justify-center hover:bg-neutral-300 transition-colors">
                    <div className="w-64 md:w-80">
                      <img
                        alt="Mastery mental performance app mobile interface for athletes"
                        className="w-full h-auto rounded-3xl shadow-2xl"
                        src={imgMastery}
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          </ProjectCard>

          {/* Project 4: Oh Wow Travel */}
          <ProjectCard delay={0.2}>
          <div className="mb-32 md:mb-48">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-normal">
                      Oh Wow
                    </h3>
                    <p className="text-base md:text-lg text-black/60 leading-relaxed">
                      Curated travel guide platform helping users discover unique experiences and hidden gems around the world.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-8 border-t border-black/10 mt-8">
                  <p className="text-xs uppercase tracking-wider text-black/40 text-[14px]">2023</p>
                  <p className="text-sm text-black/40">Web / Mobile / UX Design</p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <a 
                  href="/oh-wow-case-study" 
                  className="block"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, "", "/oh-wow-case-study");
                    window.dispatchEvent(new PopStateEvent("popstate"));
                  }}
                  onMouseEnter={() => {
                    setShowTooltip(true);
                    setTooltipText("View");
                    setCursorBgColor("bg-green-500");
                  }}
                  onMouseLeave={() => {
                    setShowTooltip(false);
                    setCursorBgColor("bg-black");
                  }}
                >
                  <div className="aspect-[4/3] bg-neutral-200 rounded-2xl p-8 md:p-12 flex items-center justify-center hover:bg-neutral-300 transition-colors">
                    <div className="w-64 md:w-80">
                      <img
                        alt="Oh Wow curated travel guide platform mobile interface"
                        className="w-full h-auto rounded-3xl shadow-2xl"
                        src={imgOhWow}
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          </ProjectCard>
        </div>
      </section>


      </main>

      <Footer currentPage="home" />
    </div>
  );
}
