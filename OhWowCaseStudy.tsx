import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import imgSimulatorScreenshotIphone1520240523At17261 from "figma:asset/8fee3e36d895d950fda9a0b89552402ae742aa82.png";
import imgScreenshot20240528At10151 from "figma:asset/db58a2e698450af752983d301616d494583cdca1.png";
import imgScreenshot20240528At10051 from "figma:asset/ac25224327511da568fee91c7ac6ec136f729772.png";
import imgOhwow13388Desert1 from "figma:asset/4d2cacf289e7dab08ce1f9fddb83098e992ed12b.png";
import imgImg2950 from "figma:asset/aa67976bd6888cef1042fcf237f9c0b16cbf309d.png";
import imgImg30421 from "figma:asset/b5bfb73e55b6d0f471f554d779a0413478fcbcac.png";
import imgNewPreviousSolution from "figma:asset/41675e9a839025ba1994cba4f8394a6ea6bac66d.png";
import imgNewExploreScreen from "figma:asset/808dac608691360453a330b2af11ff064d68d69d.png";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import TLDRSection from "./TLDRSection";

// Animated section component
function AnimatedSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function OhWowCaseStudy() {
  const [activeSection, setActiveSection] = useState("home");
  const [oldScreensActiveIndex, setOldScreensActiveIndex] = useState(0);
  const [newScreensActiveIndex, setNewScreensActiveIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const oldScreensScrollRef = useRef<HTMLDivElement>(null);
  const newScreensScrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "work", "about"];
      const scrollPosition = window.scrollY + 200;

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

  useEffect(() => {
    const handleOldScreensScroll = () => {
      if (oldScreensScrollRef.current) {
        const container = oldScreensScrollRef.current;
        const scrollLeft = container.scrollLeft;
        const itemWidth = container.scrollWidth / 3; // 3 screens
        const activeIndex = Math.round(scrollLeft / itemWidth);
        setOldScreensActiveIndex(activeIndex);
      }
    };

    const handleNewScreensScroll = () => {
      if (newScreensScrollRef.current) {
        const container = newScreensScrollRef.current;
        const scrollLeft = container.scrollLeft;
        const itemWidth = container.scrollWidth / 3; // 3 screens
        const activeIndex = Math.round(scrollLeft / itemWidth);
        setNewScreensActiveIndex(activeIndex);
      }
    };

    const oldScrollContainer = oldScreensScrollRef.current;
    const newScrollContainer = newScreensScrollRef.current;

    if (oldScrollContainer) {
      oldScrollContainer.addEventListener("scroll", handleOldScreensScroll);
    }
    if (newScrollContainer) {
      newScrollContainer.addEventListener("scroll", handleNewScreensScroll);
    }

    return () => {
      if (oldScrollContainer) {
        oldScrollContainer.removeEventListener("scroll", handleOldScreensScroll);
      }
      if (newScrollContainer) {
        newScrollContainer.removeEventListener("scroll", handleNewScreensScroll);
      }
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <NavigationBar />

      <main id="main-content">
      {/* Hero */}
      <section className="pt-32 pb-32 md:pt-40 md:pb-40 lg:pt-48 lg:pb-48" aria-label="Oh Wow case study hero">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 md:mb-8 leading-[1.05]">
              Your Personal Travel Guide
            </h1>
            <div className="flex flex-col sm:flex-row sm:flex-wrap md:items-center gap-2 sm:gap-3 md:gap-8 text-black/50">
              <span>Oh Wow!</span>
              <span className="hidden sm:inline">·</span>
              <span>2023 to 2024</span>
              <span className="hidden sm:inline">·</span>
              <span>Mobile / B2C / Product Design / Design System</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TL;DR Section */}
      <TLDRSection
        projectName="Oh Wow"
        content={{
          "Hiring Manager": "Led redesign of Oh Wow, an audio-story travel app with failing retention. Simplified discovery and navigation, built immersive playback flows, and shipped a design system. In 3 months, improved retention by 2× and reduced drop-offs by 40%.",
          "Designer": "Redesigned Oh Wow's V2 to solve for clunky discovery and poor navigation flow. Focused on effortless exploration, intuitive audio playback, and creating moments of delight. Built a design system for consistency. Result: 2× retention improvement and smoother user journeys.",
          "Product Manager": "Diagnosed retention issues in Oh Wow V1 and led redesign focused on discovery and engagement. Worked with PM and 2 engineers to prioritize features that reduced friction. Delivered in 3 months with 2× retention lift and 40% fewer drop-offs.",
          "Founder": "Redesigned a travel audio app with plummeting retention in just 3 months. Focused on intuitive discovery and magical storytelling. Built fast under resource constraints. Impact: 2× retention, 40% fewer drop-offs, and product-market fit validation.",
          "Recruiter": "Product designer for Oh Wow travel app (2023-2024). Led end-to-end redesign including discovery flows and design system. 3-month timeline with small team. Great fit for mobile app design, consumer products, or content-focused experiences."
        }}
      />

      {/* Hero Image */}
      <section ref={heroRef} className="pb-32 md:pb-40 lg:pb-48">
        <div className="w-full">
          <AnimatedSection>
            <div className="overflow-hidden relative">
              {/* Faded Background Image with Parallax */}
              <motion.div
                className="relative"
                style={{ y: backgroundY }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <img 
                  src={imgOhwow13388Desert1} 
                  alt="Desert landscape" 
                  className="w-full opacity-30"
                />
              </motion.div>
              
              {/* Overlaid Mobile Screenshots */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 md:gap-8">
                <motion.div
                  className="w-1/4 max-w-[200px]"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img 
                    src={imgSimulatorScreenshotIphone1520240523At17261} 
                    alt="Oh Wow app - Home" 
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </motion.div>
                
                <motion.div
                  className="w-1/4 max-w-[200px]"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img 
                    src={imgScreenshot20240528At10151} 
                    alt="Oh Wow app - Story view" 
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </motion.div>
                
                <motion.div
                  className="w-1/4 max-w-[200px]"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img 
                    src={imgScreenshot20240528At10051} 
                    alt="Oh Wow app - Discovery" 
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview Section */}
      <section className="pb-32 md:pb-40 lg:pb-48">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">Overview</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-8 space-y-6">
              <div>
                <p className="text-base leading-relaxed text-black/60 mb-8">
                  We re-imagined Oh Wow! as a seamless audio-story travel companion. The new flow prioritized effortless discovery of nearby stories, intuitive playback, and immersive context enabling users to explore cities through curated narratives instead of scattered content.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-black/40 text-sm mb-3">Problem</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    Launched in January 2024, while initial launch of Oh Wow! piqued interest, retention plummeted. Users downloaded the app, listened once, and dropped off. The experience lacked flow, discovery felt clunky, and navigation created friction instead of delight.
                  </p>
                </div>

                <div>
                  <h3 className="text-black/40 text-sm mb-3">Solution</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    A redesigned experience that made exploration accessible again, transforming idle walks into moments of wonder through spontaneous discovery and magical storytelling.
                  </p>
                </div>

                <div>
                  <h3 className="text-black/40 text-sm mb-3">Impact</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    Version 2 improved retention by over <span className="text-black">2×</span>, boosted average session time, and reduced navigation drop-offs by <span className="text-black">40%</span>.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <h3 className="text-black/40 text-sm mb-3">Role</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    Product Designer
                  </p>
                </div>

                <div>
                  <h3 className="text-black/40 text-sm mb-3">Team</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    1 Product Designer, 1 PM, 2 Engineers
                  </p>
                </div>

                <div>
                  <h3 className="text-black/40 text-sm mb-3">Timeline</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    3 Months
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="pb-32 md:pb-40 lg:pb-48">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">Background</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-black/40 text-sm mb-6">The problem</h3>
                <h4 className="text-xl md:text-2xl mb-4">Great idea, weak retention</h4>
                <p className="text-base leading-relaxed text-black/60">
                  The first version of Oh Wow! launched to strong curiosity but poor follow-through. Users downloaded, listened once, and left. The culprit: too many steps, limited features, and a navigation system that made exploration harder, not easier.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-black/40 text-sm mb-6">The insight</h3>
                <h4 className="text-xl md:text-2xl mb-4">Discovery should feel effortless</h4>
                <p className="text-base leading-relaxed text-black/60">
                  Travelers aren't planners, they're wanderers. Our research showed users wanted spontaneous discovery: "Tell me something cool about where I'm standing right now." That became our north star: make exploration feel magical, not mechanical.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-black/40 text-sm mb-6">The challenge</h3>
                <h4 className="text-xl md:text-2xl mb-4">Where curiosity meets clarity</h4>
                <p className="text-base leading-relaxed text-black/60">
                  We needed to simplify the interface to emphasize exploration, context, and continuity. Each story card became a mini-journey, combining imagery, transcripts, and local context to make learning feel personal and memorable.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Previous Solution Introduction */}
      <section className="pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">The previous solution</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-8">
              <div>
                <p className="text-base leading-relaxed text-black/60">
                  The first version had great intent but broken execution. Navigation was clunky, the flow was confusing, and users struggled to find stories near them. It was clear we needed to start from scratch.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Old Screens with Phone Frames */}
      <section className="pb-32 md:pb-40 lg:pb-48">
        <div className="bg-[#f6f6f6] py-16 md:py-20 lg:py-24">
          <div className="flex items-center justify-center px-6 md:px-12">
            <div 
              ref={oldScreensScrollRef}
              className="content-stretch flex gap-[24px] md:gap-[85px] h-auto md:h-[575px] items-start md:items-center justify-start md:justify-center overflow-x-auto md:overflow-x-visible w-full scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {/* Phone Frame 1 - First Screen */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0"
              >
                <div className="bg-white relative rounded-[30.123px]">
                  <div className="content-stretch flex gap-[1.647px] items-start overflow-clip relative rounded-[inherit]">
                    <div className="h-[585.938px] relative shrink-0 w-[270.386px]">
                      <img 
                        alt="Oh Wow - Explore Screen" 
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                        src={imgNewExploreScreen} 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone Frame 2 - Old Design */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0"
              >
                <div className="bg-white relative rounded-[30.123px]">
                  <div className="content-stretch flex gap-[1.647px] items-start overflow-clip relative rounded-[inherit]">
                    <div className="h-[585.938px] relative shrink-0 w-[270.386px]">
                      <img 
                        alt="Oh Wow - Old Version" 
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                        src={imgImg2950} 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone Frame 3 - Old Design */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0"
              >
                <div className="bg-white relative rounded-[30.123px]">
                  <div className="content-stretch flex gap-[1.647px] items-start overflow-clip relative rounded-[inherit]">
                    <div className="h-[585.938px] relative shrink-0 w-[270.386px]">
                      <img 
                        alt="Oh Wow - Old Version" 
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                        src={imgImg30421} 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Dot Indicators for Old Screens - Mobile Only */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => {
                  if (oldScreensScrollRef.current) {
                    const container = oldScreensScrollRef.current;
                    const itemWidth = container.scrollWidth / 3;
                    container.scrollTo({
                      left: itemWidth * index,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  oldScreensActiveIndex === index
                    ? 'w-8 bg-black'
                    : 'w-2 bg-black/30'
                }`}
                aria-label={`Go to screen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="pb-32 md:pb-40 lg:pb-48">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <div className="bg-[#f6f6f6] rounded-2xl p-12 md:p-16 lg:p-20 text-center">
              <p className="text-3xl md:text-4xl lg:text-5xl mb-8 leading-snug">
                "I usually listen to podcasts and audio books while walking to work and back home. I love listening to the stories and history behind places I visit and finally with Ohwow I can do that easily. Great App! Use it everyday!"
              </p>
              <p className="text-xl md:text-2xl text-black/60">
                - Schwaberdoodles (App Store)
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Design Introduction */}
      <section className="pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">The redesign</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-8">
              <div>
                <h3 className="text-black/40 text-sm mb-6">A smarter way to explore the world</h3>
                <p className="text-base leading-relaxed text-black/60">
                  We simplified the interface to emphasize exploration, context, and continuity. Each story card became a mini-journey, combining imagery, transcripts, and local context to make learning feel personal and memorable.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Full Width Mockups with Phone Frames */}
      <section className="pb-32 md:pb-40 lg:pb-48">
        <div className="bg-[#f6f6f6] py-16 md:py-20 lg:py-24">
          <div className="flex items-center justify-center px-6 md:px-12">
            <div 
              ref={newScreensScrollRef}
              className="flex gap-8 md:gap-12 lg:gap-20 items-center justify-start md:justify-center overflow-x-auto md:overflow-x-visible w-full scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {/* Phone Frame 1 */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0"
              >
                <div className="bg-white relative rounded-[24.043px]">
                  <div className="content-stretch flex gap-[1.315px] items-start overflow-clip relative rounded-[inherit]">
                    <div className="h-[526px] relative shrink-0 w-[242.627px]">
                      <img 
                        alt="Oh Wow - Home Screen" 
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                        src={imgSimulatorScreenshotIphone1520240523At17261} 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone Frame 2 */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0"
              >
                <div className="bg-white relative rounded-[28.199px]">
                  <div className="content-stretch flex gap-[1.542px] items-start overflow-clip relative rounded-[inherit]">
                    <div className="h-[525.494px] relative shrink-0 w-[242.393px]">
                      <img 
                        alt="Oh Wow - Map View" 
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                        src={imgScreenshot20240528At10151} 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone Frame 3 */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0"
              >
                <div className="bg-white relative rounded-[24.02px]">
                  <div className="content-stretch flex gap-[1.313px] items-start overflow-clip relative rounded-[inherit]">
                    <div className="h-[525.494px] relative shrink-0 w-[242.393px]">
                      <img 
                        alt="Oh Wow - Story Player" 
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                        src={imgScreenshot20240528At10051} 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Dot Indicators for New Screens - Mobile Only */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => {
                  if (newScreensScrollRef.current) {
                    const container = newScreensScrollRef.current;
                    const itemWidth = container.scrollWidth / 3;
                    container.scrollTo({
                      left: itemWidth * index,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  newScreensActiveIndex === index
                    ? 'w-8 bg-black'
                    : 'w-2 bg-black/30'
                }`}
                aria-label={`Go to screen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="pb-32 md:pb-40 lg:pb-48">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">Results</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-black/40 text-sm mb-6">Key outcomes</h3>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl mb-4">Improved engagement and retention</h4>
                <p className="text-base leading-relaxed text-black/60">
                  Version 2 delivered a clear and meaningful engagement boost: users returned more frequently, average session time increased, and retention improved meaningfully.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h4 className="text-xl md:text-2xl mb-4">Reduced navigation friction</h4>
                <p className="text-base leading-relaxed text-black/60">
                  The new flow reduced navigation drop-offs by 40%, making it easier for users to discover and listen to stories about places near them.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h4 className="text-xl md:text-2xl mb-4">Market evolution</h4>
                <p className="text-base leading-relaxed text-black/60">
                  However, shortly after launch, a broader shift occurred in the travel-audio ecosystem: conversational AI tools such as ChatGPT made it easier for users to request location-based stories on-demand, reducing the novelty of our "audio tour" format and limiting longer-term growth.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Impact Metric */}
      <section className="pb-32 md:pb-40 lg:pb-48">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <div className="bg-[#A6FF61] rounded-2xl p-12 md:p-16 lg:p-20 text-center">
              <p className="text-6xl md:text-7xl lg:text-8xl mb-4">2×</p>
              <p className="text-xl md:text-2xl">Improvement in retention</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reflection */}
      <section className="pb-32 md:pb-40 lg:pb-48">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">Reflection</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-black/40 text-sm mb-6">What I learned</h3>
                <p className="text-base leading-relaxed text-black/60">
                  This project taught me the importance of simplifying complex experiences and making discovery feel natural. While external market forces ultimately reshaped the product's trajectory, the core lesson remains: focus on reducing friction and making users feel delighted, not overwhelmed.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-black/40 text-sm mb-6">Future opportunities</h3>
                <div className="space-y-4 text-base leading-relaxed text-black/60">
                  <p>Currently working on V3 of the app and web-app</p>
                  <p>Exploring integration with AI-powered personalized recommendations</p>
                  <p>Expanding content library with user-generated stories</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Request Case Study */}
      <section className="md:pb-40 lg:pb-48 pt-[0px] pr-[0px] pb-[100px] pl-[0px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="bg-[#F5F5F5] rounded-2xl p-12 md:p-16 lg:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <AnimatedSection className="lg:col-span-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl">Request a case study</h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1} className="lg:col-span-8">
                <div className="space-y-8">
                  <p className="text-base md:text-lg leading-relaxed text-black/60">
                    Want to learn more about this project? Get in touch to request a case study.
                  </p>
                  <a
                    href="mailto:itsncki@gmail.com"
                    className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-black/80 transition-colors"
                  >
                    GET IN TOUCH
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16675 10H15.8334M15.8334 10L10.0001 4.16669M15.8334 10L10.0001 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer currentPage="case-study" />
    </div>
  );
}
