import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "./ui/dialog";
import imgScreenshot20251027At81808Pm1 from "figma:asset/a9da2f0f756f7288d6b341b75823d08e39cfa662.png";
import imgScreenshot20251027At75341Pm1 from "figma:asset/3e346b2c5c178a9cc57d12bf04780fbcf1467632.png";
import imgFrame11 from "figma:asset/5cdcbcf31b99ce603a8bcce2607875877a958436.png";
import imgFrame14 from "figma:asset/1d237d9660a28fbf06125c92819bcd9528f3bf9a.png";
import imgFrame15 from "figma:asset/585196854011b0848fef03854f4672a9cadb8748.png";
import imgOhwow13388Desert1 from "figma:asset/3597559a30f322fca08a09a796d1297196f50679.png";
import imgAfterScreen1 from "figma:asset/6b47253b4f6a57fd41cef27a0d0c38f32b1a8c42.png";
import imgAfterScreen2 from "figma:asset/87ed7afd1838f80e12d7db560b9a27f80a5fa50e.png";
import imgAfterScreen3 from "figma:asset/0b3629d6d79f2f3be40c9c5ae49ea01c27c7e35c.png";
import Frame1244832153 from "../imports/Frame1244832153";
import Frame124483215317 from "../imports/Frame1244832153-17-5421";
import Frame1244832153176454 from "../imports/Frame1244832153-17-6454";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgMasteryScreen1 from "figma:asset/672dc054b619725ed87966e8ea3b2fed2d67d688.png";
import imgMasteryScreen2 from "figma:asset/42a89549bc5c5599145efe7ea3bb5618d39d6b6d.png";
import imgMasteryScreen3 from "figma:asset/9ad06ec0cb9875625628331424c1e7b6d519ca37.png";
import HeroHeadingRight from "../imports/HeroHeadingRight-17-8932";
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

export default function MasteryCaseStudy() {
  const [activeSection, setActiveSection] = useState("home");
  const [beforeScreensActiveIndex, setBeforeScreensActiveIndex] = useState(0);
  const [afterScreensActiveIndex, setAfterScreensActiveIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const beforeScreensScrollRef = useRef<HTMLDivElement>(null);
  const afterScreensScrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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
    const handleBeforeScreensScroll = () => {
      if (beforeScreensScrollRef.current) {
        const container = beforeScreensScrollRef.current;
        const scrollLeft = container.scrollLeft;
        const itemWidth = container.scrollWidth / 3; // 3 screens
        const activeIndex = Math.round(scrollLeft / itemWidth);
        setBeforeScreensActiveIndex(activeIndex);
      }
    };

    const handleAfterScreensScroll = () => {
      if (afterScreensScrollRef.current) {
        const container = afterScreensScrollRef.current;
        const scrollLeft = container.scrollLeft;
        const itemWidth = container.scrollWidth / 3; // 3 screens
        const activeIndex = Math.round(scrollLeft / itemWidth);
        setAfterScreensActiveIndex(activeIndex);
      }
    };

    const beforeScrollContainer = beforeScreensScrollRef.current;
    const afterScrollContainer = afterScreensScrollRef.current;

    if (beforeScrollContainer) {
      beforeScrollContainer.addEventListener("scroll", handleBeforeScreensScroll);
    }
    if (afterScrollContainer) {
      afterScrollContainer.addEventListener("scroll", handleAfterScreensScroll);
    }

    return () => {
      if (beforeScrollContainer) {
        beforeScrollContainer.removeEventListener("scroll", handleBeforeScreensScroll);
      }
      if (afterScrollContainer) {
        afterScrollContainer.removeEventListener("scroll", handleAfterScreensScroll);
      }
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <NavigationBar />

      <main id="main-content">
      {/* Hero */}
      <section className="pt-32 pb-32 md:pt-40 md:pb-40 lg:pt-48 lg:pb-48" aria-label="Mastery case study hero">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-[1.05]">
              Mastery
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-black/50">
              <span>Your Mental Coach</span>
              <span className="hidden md:inline">·</span>
              <span>2024</span>
              <span className="hidden md:inline">·</span>
              <span>Mobile / Product Design / Design System</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TL;DR Section */}
      <TLDRSection
        projectName="Mastery"
        content={{
          "Hiring Manager": "Led end-to-end redesign of Mastery, a mental performance app for athletes. Simplified onboarding, built AI-assisted goal setting, and created a design system for consistency. Delivered in 3 months, helping secure $1M+ in pre-seed funding and positioning the product for scale.",
          "Designer": "Transformed a confusing MVP into a guided mental training experience. Rebuilt onboarding flow, designed AI-assisted goal setting interactions, and shipped a design system for cross-screen consistency. Focused on clarity, behavioral design, and creating a calm, focused interface for athletes.",
          "Product Manager": "Diagnosed engagement drop-offs in Mastery's MVP and led redesign to improve usability and retention. Collaborated with PM and 6 engineers to prioritize features like weekly tracking and AI personalization. Result: $1M+ funding secured and clear product-market validation.",
          "Founder": "Redesigned a struggling mental performance app in 3 months under tight constraints. Built AI features, simplified flows, and created a scalable design system. Impact: $1M+ funding secured, positioning Mastery as a credible tool for athletes and teams.",
          "Recruiter": "Led product design for Mastery, a mental performance app for athletes. 3-month timeline working with PM and engineering team. Delivered end-to-end redesign including onboarding, AI features, and design system. Best fit for product design roles in health/wellness, mobile-first products, or early-stage startups."
        }}
      />

      {/* Hero Image */}
      <section ref={heroRef} className="pb-32 md:pb-40 lg:pb-48 relative overflow-hidden">
        <AnimatedSection>
          {/* Full Width Background with Parallax */}
          <div className="relative overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{ y: backgroundY }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <img 
                src={imgOhwow13388Desert1} 
                alt="Tennis Court" 
                className="w-full h-full object-cover opacity-30"
              />
            </motion.div>
            
            {/* Overlaid Mobile Screenshots */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 md:gap-8 px-8">
              <motion.div
                className="w-1/4 max-w-[200px]"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <img 
                  src={imgMasteryScreen1} 
                  alt="Mastery Goal/Vision Screen" 
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
                  src={imgMasteryScreen2} 
                  alt="Mastery Chat/Typing Screen" 
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
                  src={imgMasteryScreen3} 
                  alt="Mastery Profile Screen" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
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
                  A mental performance app designed to help athletes achieve peak performance through guided visualization exercises, progress tracking, and AI-assisted goal setting.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-black/40 text-sm mb-3">Problem</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    The original Mastery MVP was confusing and lacked structure. Athletes struggled to understand how to use the app, engagement dropped quickly, and the product failed to deliver on its core promise of helping users visualize success and build consistent mental habits.
                  </p>
                </div>

                <div>
                  <h3 className="text-black/40 text-sm mb-3">Solution</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    I led the end-to-end redesign, transforming it from a clunky prototype into a guided, user-centered experience. I simplified the onboarding flow, introduced AI-assisted goal setting, and built a lightweight design system to create visual and behavioral consistency across screens.
                  </p>
                </div>

                <div>
                  <h3 className="text-black/40 text-sm mb-3">Impact</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    The redesign helped secure <span className="text-black">$1M+ in pre-seed funding</span>, increased engagement through weekly tracking and reflection features, and positioned Mastery as a credible mental performance tool for athletes and teams.
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
                    1 Product Designer, 1 PM, 6 Engineers
                  </p>
                </div>

                <div>
                  <h3 className="text-black/40 text-sm mb-3">Timeline</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    3 months
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
                <h3 className="text-black/40 text-sm mb-6">The spark</h3>
                <h4 className="text-xl md:text-2xl mb-4">What if mindset could be trained like muscle?</h4>
                <p className="text-base leading-relaxed text-black/60">
                  Athletes spend hours on physical reps, yet their mental game often goes uncoached. Mastery set out to change that, helping athletes visualize success, build focus, and strengthen performance through guided mental training.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-black/40 text-sm mb-6">Discovery</h3>
                <h4 className="text-xl md:text-2xl mb-4">A powerful idea hidden in a confusing app</h4>
                <p className="text-base leading-relaxed text-black/60">
                  Users struggled to navigate sessions, track progress, or feel motivation to return. Engagement dropped off after the first week, not from lack of belief, but lack of clarity. The app had potential, but the experience was getting in the way.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-black/40 text-sm mb-6">Challenge</h3>
                <h4 className="text-xl md:text-2xl mb-4">Transform mental training into a daily ritual</h4>
                <p className="text-base leading-relaxed text-black/60">
                  We needed to create an experience that felt like a coach in your pocket - simple, structured, and rewarding. The goal: turn visualization into a habit, not a chore. The challenge was making mental performance training feel accessible without losing its depth and credibility.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Previous Solution Introduction */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">The previous solution</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-8">
              <div>
                <p className="text-base leading-relaxed text-black/60">
                  The original MVP was a proof of concept that showed promise but lacked polish. Navigation was confusing, the interface felt cluttered, and users didn't know where to start. The onboarding flow was unclear, leading to high drop-off rates and low engagement.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Before Screens - Figma Design */}
      <section className="pb-16 md:pb-20">
        <AnimatedSection>
          <div className="w-full overflow-hidden">
            <Frame1244832153 />
          </div>
        </AnimatedSection>
      </section>

      {/* Previous Solution - All Screens */}
      <section className="pb-32 md:pb-40 lg:pb-48">
        <AnimatedSection>
          <Dialog>
            <div className="md:hidden text-center text-xs text-black/40 mb-2">
              Tap to zoom
            </div>
            <DialogTrigger className="w-full border-0 bg-transparent p-0 cursor-pointer md:cursor-default md:pointer-events-none">
              <div className="w-full overflow-hidden md:overflow-visible">
                <HeroHeadingRight />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-auto">
              <DialogTitle className="sr-only">Previous Solution Screens</DialogTitle>
              <DialogDescription className="sr-only">
                Full view of the previous Mastery app screens showing the original interface design
              </DialogDescription>
              <div className="w-full">
                <HeroHeadingRight noScale={true} />
              </div>
            </DialogContent>
          </Dialog>
        </AnimatedSection>
      </section>

      {/* Research & Design Approach */}
      <section className="pb-32 md:pb-40 lg:pb-48">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">Research & insights</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-black/40 text-sm mb-6">User insights</h3>
                <h4 className="text-xl md:text-2xl mb-4">Athletes need structure, not complexity</h4>
                <p className="text-base leading-relaxed text-black/60">
                  Through user interviews and testing sessions, we discovered that athletes wanted a clear path forward. They didn't need more features - they needed better guidance. The mental training concepts were valuable, but users needed the app to show them exactly what to do and when.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-black/40 text-sm mb-6">Hypothesis</h3>
                <h4 className="text-xl md:text-2xl mb-4">Clarity drives consistency</h4>
                <p className="text-base leading-relaxed text-black/60">
                  We believed that by simplifying the flow, providing clear onboarding, and offering visible progress tracking, users would develop a consistent practice. A guided experience would help them understand the value quickly and build the habit of mental training.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-black/40 text-sm mb-6">Design approach</h3>
                <h4 className="text-xl md:text-2xl mb-4">From confusion to coaching</h4>
                <p className="text-base leading-relaxed text-black/60">
                  We redesigned the entire experience with a coach-like approach: progressive onboarding, AI-assisted goal creation, weekly check-ins, and a clean interface that put content first. Every decision aimed to reduce friction and increase clarity, making mental performance training feel accessible and actionable.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Redesigned Solution */}
      <section className="pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">The redesigned solution</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-8">
              <div>
                <p className="text-base leading-relaxed text-black/60">
                  The new Mastery experience guides users from day one with clear onboarding, AI-powered personalization, and progress tracking that makes growth visible. The interface is clean and focused, putting mental training exercises front and center while providing structure through weekly goals and reflections.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Redesigned Solution Screens */}
      <section className="pb-32 md:pb-40 lg:pb-48">
        <div className="bg-[#f6f6f6] py-16 md:py-20 lg:py-24">
          <div className="flex items-center md:justify-center px-6 md:px-12">
            <div 
              ref={afterScreensScrollRef}
              className="flex gap-4 md:gap-6 lg:gap-8 items-center md:justify-center overflow-x-auto md:overflow-x-visible w-full md:flex-wrap lg:flex-nowrap scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {/* Screen 1 - Goal/Vision */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 md:shrink md:flex-1 md:max-w-[200px] lg:max-w-[270px]"
              >
                <div className="bg-white relative rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    alt="Mastery - Goal/Vision Screen" 
                    className="w-full h-auto object-cover"
                    src={imgMasteryScreen1}
                  />
                </div>
              </motion.div>

              {/* Screen 2 - Chat/Typing */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 md:shrink md:flex-1 md:max-w-[200px] lg:max-w-[270px]"
              >
                <div className="bg-white relative rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    alt="Mastery - Chat/Typing Screen" 
                    className="w-full h-auto object-cover"
                    src={imgMasteryScreen2}
                  />
                </div>
              </motion.div>

              {/* Screen 3 - Profile */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 md:shrink md:flex-1 md:max-w-[200px] lg:max-w-[270px]"
              >
                <div className="bg-white relative rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    alt="Mastery - Profile Screen" 
                    className="w-full h-auto object-cover"
                    src={imgMasteryScreen3}
                  />
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Dot Indicators for After Screens - Mobile Only */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => {
                  if (afterScreensScrollRef.current) {
                    const container = afterScreensScrollRef.current;
                    const itemWidth = container.scrollWidth / 3;
                    container.scrollTo({
                      left: itemWidth * index,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  afterScreensActiveIndex === index
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl">Impact & results</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-black/40 text-sm mb-6">Launch success</h3>
                <h4 className="text-xl md:text-2xl mb-4">Proof that simplicity wins</h4>
                <p className="text-base leading-relaxed text-black/60">
                  Within two months, Mastery grew to 500+ active beta users, helping secure $1M+ pre-seed funding. Athletes reported higher engagement and satisfaction, describing it as "finally, a mental coach that fits into real training."
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-black/40 text-sm mb-6">Key metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl mb-2">$1M+</p>
                    <p className="text-base text-black/60">Pre-seed funding secured</p>
                  </div>
                  <div>
                    <p className="text-3xl mb-2">500+</p>
                    <p className="text-base text-black/60">Active beta users</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-black/40 text-sm mb-6">Current status</h3>
                <h4 className="text-xl md:text-2xl mb-4">V2 launched, V3 in development</h4>
                <p className="text-base leading-relaxed text-black/60">
                  V2 of the app launched on May 31st, 2024. We're currently working on V3 of the app and a web-app experience to expand access to mental performance training.
                </p>
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
