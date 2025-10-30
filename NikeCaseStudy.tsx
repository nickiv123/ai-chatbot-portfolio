import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import imgScreenshot20231001At1135 from "figma:asset/1fb04748621306514010ca2cb60fdfe2c9400df0.png";
import imgScreenshot20231001At1137 from "figma:asset/313f518af20107e39ebbcd1870da3dde053b8a6d.png";
import imgScreenshot20231001At1113 from "figma:asset/684619289ccdd0a9f9b846ce9c31cb88198be9c3.png";
import imgHoiNikeExpertStudioOriginal1 from "figma:asset/574cd359c39e4e1d65ca83e005426eaf13fc5a77.png";
import imgImg5965 from "figma:asset/e610f576ae70f46353985efa0b70026c9c3c4eeb.png";
import imgImg5966 from "figma:asset/8a3895f29cac2c19ff41fe3bc427166437ebf643.png";
import imgImg5973 from "figma:asset/cab97f76360c6945a237b35f1ad740bb1ccbd151.png";
import imgImg5974 from "figma:asset/99b5dd9589b3598a0825245c887dd3ecee8f4111.png";
import imgImg5975 from "figma:asset/7d29368b6d33f19f9f8b5400d3eb6a8a5b869d41.png";
import imgScreenshot20230909At9341 from "figma:asset/9d0a21e709113fcfc9e8b7e0dadc92d85956eaa6.png";
import imgImg3686 from "figma:asset/174fc5c06a13601f3fce45082becb2d168ed65a1.png";
import imgImg3687 from "figma:asset/2807219f65c937fb789a5a29c61bbbb546f69d3f.png";
import imgScreenshot20240506At2501 from "figma:asset/ed94d0f9d75f335e303886649351252f33c849d0.png";
import imgMockup1 from "figma:asset/7b803a90165988c7823195fee977e6fe16b46e02.png";
import imgMockup2 from "figma:asset/a5872a0f3dc4a9eceb3220ef5f433fe120e16c45.png";
import imgMockup3 from "figma:asset/d11ac8d980391bd273f9cd6405a65401cb8e44f4.png";
import imgMockupAbout from "figma:asset/ce241487b415801256502ed59b2edc603a34efce.png";
import imgRequestCaseStudy from "figma:asset/c71ed3af37517a44144ed757d2bbf31a173bd9ae.png";
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

export default function NikeCaseStudy() {
  const [activeSection, setActiveSection] = useState("home");
  const [oldScreensActiveIndex, setOldScreensActiveIndex] = useState(0);
  const [newScreensActiveIndex, setNewScreensActiveIndex] = useState(0);
  const oldScreensScrollRef = useRef<HTMLDivElement>(null);
  const newScreensScrollRef = useRef<HTMLDivElement>(null);

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
        const itemWidth = container.scrollWidth / 5; // 5 screens
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
      <section className="pt-32 pb-32 md:pt-40 md:pb-40 lg:pt-48 lg:pb-48" aria-label="Nike case study hero">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-[1.05]">
              Digital Booking Tool
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-black/50">
              <span>Nike</span>
              <span className="hidden md:inline">·</span>
              <span>2022 to 2023</span>
              <span className="hidden md:inline">·</span>
              <span>Product Design / Service Design</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TL;DR Section */}
      <TLDRSection
        projectName="Nike Digital Booking Tool"
        content={{
          "Hiring Manager": "Led product and service design for Nike's digital booking platform across retail stores worldwide. Coordinated with cross-functional teams (marketing, operations, training) to streamline scheduling and reduce manual work. Result: 51% reduction in no-shows and global standardization of booking experiences.",
          "Designer": "Designed a unified booking platform bridging Nike's digital and physical retail experiences. Solved for real-time availability, seamless hand-offs, and multi-region consistency. Built service design flows accounting for both customer and staff touchpoints, creating a premium, scalable system.",
          "Product Manager": "Unified fragmented booking tools into one platform for Nike retail. Collaborated with researchers, designers, and cross-functional stakeholders to prioritize features reducing no-shows and manual coordination. Shipped in 6 months, cutting no-shows by 51% and becoming Nike's global standard.",
          "Founder": "Built a digital booking platform for Nike that unified fragmented regional tools. Focused on speed and consistency across markets. Delivered real-time scheduling, seamless digital-to-store hand-offs, and measurable impact: 51% fewer no-shows and global adoption.",
          "Recruiter": "Product and service designer for Nike's digital booking tool (2022-2023). Led design across online and in-store retail touchpoints. Collaborated with researchers, PM, engineers, and operations teams. Strong fit for retail tech, service design, or omnichannel product roles at scale."
        }}
      />

      {/* Hero Image */}
      <section className="pb-32 md:pb-40 lg:pb-48">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden relative">
              {/* Faded Background Image */}
              <motion.div
                className="relative"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <img 
                  src={imgHoiNikeExpertStudioOriginal1} 
                  alt="Nike Expert Studio" 
                  className="w-full opacity-30"
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
                    src={imgMockup3} 
                    alt="Nike In-Store Experiences" 
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
                    src={imgMockup2} 
                    alt="Nike By You Registration" 
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
                    src={imgMockup1} 
                    alt="Nike Experience Booking" 
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
                  A unified digital booking platform designed to bridge online and physical touchpoints for Nike retail, streamlining service scheduling and enabling a premium experience for both customers and staff.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-black/40 text-sm mb-3">Problem</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    Booking in-store experiences felt inconsistent across regions: multiple tools, manual coordination, unclear confirmations. As a result, no-shows were high and store teams spent more time managing logistics than engaging with athletes.
                  </p>
                </div>

                <div>
                  <h3 className="text-black/40 text-sm mb-3">Solution</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    We created a unified digital booking platform that streamlines service scheduling, real-time availability, and seamless hand-offs between digital bookings and store execution - enabling a premium, efficient experience for both customers and staff.
                  </p>
                </div>

                <div>
                  <h3 className="text-black/40 text-sm mb-3">Impact</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    The redesigned tool cut no-shows by <span className="text-black">51%</span>, reduced manual coordination time, and became the standard for Nike's connected retail experiences worldwide.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <h3 className="text-black/40 text-sm mb-3">Role</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    Product Designer / Service Designer
                  </p>
                </div>

                <div>
                  <h3 className="text-black/40 text-sm mb-3">Team</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    2 UX Researchers, 1 Product Designer, 1 PM, 1 Engineer, Cross-functional teams (Marketing, Store Design, Operations, Training)
                  </p>
                </div>

                <div>
                  <h3 className="text-black/40 text-sm mb-3">Timeline</h3>
                  <p className="text-base leading-relaxed text-black/60">
                    6 months (Ongoing)
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
                <h3 className="text-black/40 text-sm mb-6">Starting point</h3>
                <h4 className="text-xl md:text-2xl mb-4">Why is booking Nike experiences so hard?</h4>
                <p className="text-base leading-relaxed text-black/60">
                  A brand built on innovation had a booking process that felt outdated. Customers faced long forms, confusing flows, and little clarity on what they were signing up for. We set out to make booking feel as inspiring as the brand itself.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-black/40 text-sm mb-6">Discovery</h3>
                <h4 className="text-xl md:text-2xl mb-4">Great intent, broken execution</h4>
                <p className="text-base leading-relaxed text-black/60">
                  Across stores and regions, the experience varied wildly. Some markets used spreadsheets, others clunky web forms. Associates spent more time coordinating than connecting. We saw a chance to unify it all.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-black/40 text-sm mb-6">Challenge</h3>
                <h4 className="text-xl md:text-2xl mb-4">Designing one system for a global brand</h4>
                <p className="text-base leading-relaxed text-black/60">
                  Nike needed a single, scalable platform that worked for any service, language, or region, without losing the local flavor that makes each store unique. Our north star: make it effortless everywhere.
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
                  The original tool was a quick fix put together during COVID to manage social distancing. It stuck around longer than intended, but a proof of concept in Paris made it clear the booking experience wasn't working: it was messy, confusing, and led to a <span className="text-black">76% no-show rate</span>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Old Screens with Phone Frames */}
      <section className="pb-32 md:pb-40 lg:pb-48">
        <div className="bg-[#f6f6f6] py-16 md:py-20 lg:py-24">
          <div className="flex items-center md:justify-center px-6 md:px-12">
            <div 
              ref={oldScreensScrollRef}
              className="flex gap-4 md:gap-6 lg:gap-8 items-center md:justify-center overflow-x-auto md:overflow-x-visible w-full md:flex-wrap lg:flex-nowrap scrollbar-hide"
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
                className="shrink-0 md:shrink md:flex-1 md:max-w-[200px] lg:max-w-[242px]"
              >
                <div className="bg-white relative rounded-[24.043px]">
                  <div className="content-stretch flex gap-[1.315px] items-start overflow-clip relative rounded-[inherit]">
                    <div className="h-[526px] md:h-auto md:aspect-[242.627/526] relative w-[242.627px] md:w-full shrink-0">
                      <img 
                        alt="Nike - Old Version 1" 
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                        src={imgImg5973} 
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
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 md:shrink md:flex-1 md:max-w-[200px] lg:max-w-[242px]"
              >
                <div className="bg-white relative rounded-[28.199px]">
                  <div className="content-stretch flex gap-[1.542px] items-start overflow-clip relative rounded-[inherit]">
                    <div className="h-[525.494px] md:h-auto md:aspect-[242.393/525.494] relative w-[242.393px] md:w-full shrink-0">
                      <img 
                        alt="Nike - Old Version 2" 
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                        src={imgImg5974} 
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
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 md:shrink md:flex-1 md:max-w-[200px] lg:max-w-[242px]"
              >
                <div className="bg-white relative rounded-[24.02px]">
                  <div className="content-stretch flex gap-[1.313px] items-start overflow-clip relative rounded-[inherit]">
                    <div className="h-[525.494px] md:h-auto md:aspect-[242.393/525.494] relative w-[242.393px] md:w-full shrink-0">
                      <img 
                        alt="Nike - Old Version 3" 
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                        src={imgImg5975} 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone Frame 4 */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 md:shrink md:flex-1 md:max-w-[200px] lg:max-w-[242px]"
              >
                <div className="bg-white relative rounded-[24.043px]">
                  <div className="content-stretch flex gap-[1.315px] items-start overflow-clip relative rounded-[inherit]">
                    <div className="h-[526px] md:h-auto md:aspect-[242.627/526] relative w-[242.627px] md:w-full shrink-0">
                      <img 
                        alt="Nike - Old Version 4" 
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                        src={imgImg5965} 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone Frame 5 */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 md:shrink md:flex-1 md:max-w-[200px] lg:max-w-[242px]"
              >
                <div className="bg-white relative rounded-[28.199px]">
                  <div className="content-stretch flex gap-[1.542px] items-start overflow-clip relative rounded-[inherit]">
                    <div className="h-[525.494px] md:h-auto md:aspect-[242.393/525.494] relative w-[242.393px] md:w-full shrink-0">
                      <img 
                        alt="Nike - Old Version 5" 
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                        src={imgImg5966} 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Dot Indicators for Old Screens - Mobile Only */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {[0, 1, 2, 3, 4].map((index) => (
              <button
                key={index}
                onClick={() => {
                  if (oldScreensScrollRef.current) {
                    const container = oldScreensScrollRef.current;
                    const itemWidth = container.scrollWidth / 5;
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

      {/* Research */}
      <section className="pb-32 md:pb-40 lg:pb-48">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">Research & insights</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-8 space-y-10">
              <div>
                <h3 className="text-black/40 text-sm mb-6">User insights</h3>
                <h4 className="text-xl md:text-2xl mb-4">What our associates taught us</h4>
                <p className="text-base leading-relaxed text-black/60">
                  Through interviews and shadowing, we discovered something deeper than UX issues: a trust gap. People didn't always know what they were booking or whether their spot was confirmed. The fix wasn't just a better interface; it was clarity and confidence.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-black/40 text-sm mb-6">Hypothesis</h3>
                <h4 className="text-xl md:text-2xl mb-4">Simplicity builds trust, and trust builds conversion</h4>
                <p className="text-base leading-relaxed text-black/60">
                  We believed a transparent flow, visual feedback, and clear confirmation would encourage more users to complete their bookings, and actually show up. We mapped the journey to remove every unnecessary decision.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-black/40 text-sm mb-6">Design approach</h3>
                <h4 className="text-xl md:text-2xl mb-4">From chaos to clarity</h4>
                <p className="text-base leading-relaxed text-black/60">
                  We reimagined the entire flow: quick selections, real-time slot availability, personalized confirmation screens. Every step aimed to make users feel in control, while staying true to Nike's bold, motivating tone.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Design Introduction */}
      <section className="pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">The design</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-8">
              <div>
                <h3 className="text-black/40 text-sm mb-6">Making it feel like Nike</h3>
                <p className="text-base leading-relaxed text-black/60">
                  This wasn't about minimalism for its own sake. We used motion, bold typography, and storytelling cues that mirrored the feeling of unboxing new gear, turning an everyday task into a micro-moment of excitement.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Full Width Mockups with Phone Frames */}
      <section className="pb-32 md:pb-40 lg:pb-48">
        <div className="bg-[#f6f6f6] py-16 md:py-20 lg:py-24">
          <div className="flex items-center md:justify-center px-6 md:px-12 py-8 md:py-0">
            <div 
              ref={newScreensScrollRef}
              className="flex gap-12 md:gap-12 lg:gap-20 items-center md:justify-center overflow-x-auto overflow-y-hidden md:overflow-x-visible w-full"
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
              >
                <div className="bg-white relative rounded-[24.043px] shrink-0">
                  <div className="content-stretch flex gap-[1.315px] items-start overflow-clip relative rounded-[inherit]">
                    <div className="h-[526px] relative shrink-0 w-[242.627px]">
                      <img 
                        alt="Nike In-Store Experiences" 
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                        src={imgMockup3} 
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
              >
                <div className="bg-white relative rounded-[28.199px] shrink-0">
                  <div className="content-stretch flex gap-[1.542px] items-start overflow-clip relative rounded-[inherit]">
                    <div className="h-[525.494px] relative shrink-0 w-[242.393px]">
                      <img 
                        alt="Nike By You About" 
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                        src={imgMockupAbout} 
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
              >
                <div className="bg-white relative rounded-[24.02px] shrink-0">
                  <div className="content-stretch flex gap-[1.313px] items-start overflow-clip relative rounded-[inherit]">
                    <div className="h-[525.494px] relative shrink-0 w-[242.393px]">
                      <img 
                        alt="Nike By You Registration" 
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                        src={imgMockup2} 
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
                <h4 className="text-xl md:text-2xl mb-4">Effortless booking, elevated brand experience</h4>
                <p className="text-base leading-relaxed text-black/60">
                  We simplified the consumer-facing flow so members can discover and reserve in-store experiences directly from the Nike app homepage or via QR code in just a few taps. This reduction in friction not only streamlined operations but also strengthened Nike's brand perception.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h4 className="text-xl md:text-2xl mb-4">Control, confidence, and clarity</h4>
                <p className="text-base leading-relaxed text-black/60">
                  The new flow introduces notifications, accessible booking management, and real-time updates, giving members full control over their visits and eliminating ambiguity from the experience.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h4 className="text-xl md:text-2xl mb-4">Reducing no-shows through transparency</h4>
                <p className="text-base leading-relaxed text-black/60">
                  We redesigned both text and email confirmations with a clear hierarchy, bold CTAs, and mobile-first layouts. Members can now easily adjust their bookings, resulting in fewer no-shows and more accurate in-store scheduling.
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
              <p className="text-6xl md:text-7xl lg:text-8xl mb-4">51%</p>
              <p className="text-xl md:text-2xl">Reduction in no-shows</p>
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
                  This project reminded me that innovation isn't always about new features; it's about removing friction. The simplest ideas, executed thoughtfully, can reshape how millions interact with a brand they already love.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-black/40 text-sm mb-6">Future opportunities</h3>
                <div className="space-y-4 text-base leading-relaxed text-black/60">
                  <p>Mobile wait list for walk-in and notifications for consumers in Asia</p>
                  <p>Wait time estimation for customization services</p>
                  <p>Automated surveys after the experience</p>
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
