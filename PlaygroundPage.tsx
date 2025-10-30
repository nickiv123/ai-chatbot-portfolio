import { motion, useInView } from "motion/react";
import { useRef } from "react";
import React from "react";
import svgPaths from "../imports/svg-u6een6j1ky";
import imgScreenshot20250910At53309Pm1 from "figma:asset/077a76cf86e001dde7278ddf355f24072c2c85af.png";
import imgNudgeyScreen from "figma:asset/f1ac7655484ea9c32d806e9927c286dd9b4e5a5f.png";
import imgCosmicPrinter from "figma:asset/d767a34ff5da05a17ec1377080869d15e069e3a5.png";
import imgCorporateQuiz from "figma:asset/77fa3eeac77007a4d4b0a6a3b4ca49a73333769f.png";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Eye } from "lucide-react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import Heading1 from "../imports/Heading1";
import Heading1Mobile from "../imports/Heading1Mobile";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};



interface Project {
  title: string;
  link: string;
  metadata: string;
  problem: string;
  idea: string;
  mediaType?: 'video' | 'image';
  mediaSrc?: string;
  objectFit?: 'cover' | 'contain';
}

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="border-b border-black/10 py-24"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Title and View Prototype Link */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl flex-1">
            {project.title}
          </h2>
          <div className="flex gap-2 flex-shrink-0">
            {/* Preview Button - Mobile Only */}
            {project.mediaType && project.mediaSrc && (
              <motion.button
                onClick={() => setIsPreviewOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 px-6 py-3 bg-white border border-black text-black rounded-full hover:bg-black/5 transition-all relative z-20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">Preview</span>
              </motion.button>
            )}
            {/* Play Button */}
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-black/80 transition-all relative z-20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm">Play</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Metadata */}
        <p className="text-sm text-black/40 mb-8">
          {project.metadata}
        </p>

        {/* Problem and Idea */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-black/40 text-xs mb-2">Problem</h3>
            <p className="text-sm leading-relaxed text-black/60">
              {project.problem}
            </p>
          </div>

          <div>
            <h3 className="text-black/40 text-xs mb-2">Idea</h3>
            <p className="text-sm leading-relaxed text-black/60">
              {project.idea}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Mobile Preview Dialog */}
      {project.mediaType && project.mediaSrc && (
        <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
          <DialogContent className="max-w-[95vw] max-h-[90vh] p-0 bg-transparent border-0 shadow-none">
            <DialogTitle className="sr-only">{project.title} Preview</DialogTitle>
            <DialogDescription className="sr-only">
              Preview of {project.title} {project.mediaType === 'image' ? 'image' : 'video'}
            </DialogDescription>
            <div className={`w-full h-full rounded-[20px] overflow-hidden shadow-2xl ${project.objectFit === 'contain' ? 'bg-white' : ''}`}>
              {project.mediaType === 'image' ? (
                <img alt={`${project.title} preview screenshot`} className={`w-full h-full ${project.objectFit === 'contain' ? 'object-contain' : 'object-cover'}`} src={project.mediaSrc} />
              ) : (
                <video autoPlay loop muted playsInline className="w-full h-full object-cover" aria-label={`${project.title} preview video`}>
                  <source src={project.mediaSrc} type="video/mp4" />
                </video>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Hover Image - Desktop Only */}
      {project.mediaType && project.mediaSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            x: mousePosition.x,
            y: mousePosition.y
          }}
          transition={{ 
            opacity: { duration: 0.3 },
            x: { duration: 0 },
            y: { duration: 0 }
          }}
          className="hidden lg:block fixed pointer-events-none z-10"
          style={{ 
            display: isHovered ? 'block' : 'none',
            left: 0,
            top: 0,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className={`w-[600px] h-[400px] rounded-[30px] overflow-hidden shadow-2xl ${project.objectFit === 'contain' ? 'bg-white' : ''}`}>
            {project.mediaType === 'image' ? (
              <img alt="" className={`w-full h-full ${project.objectFit === 'contain' ? 'object-contain' : 'object-cover'}`} src={project.mediaSrc} role="presentation" />
            ) : (
              <video autoPlay loop muted playsInline className="w-full h-full object-cover" aria-label={`${project.title} preview video`}>
                <source src={project.mediaSrc} type="video/mp4" />
              </video>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
}

export default function PlaygroundPage() {
  const projects: Project[] = [
    {
      title: "Gatherly",
      link: "https://bulb-pop-48287330.figma.site",
      metadata: "Figma Make · 9 hours · 151 versions · Concept project",
      problem: "60% of adults say making friends is hard. Group chats fizzle, swiping feels impersonal, and hangouts rarely happen.",
      idea: "Gatherly connects you with friends-of-friends for real activities. No swiping. No strangers. Just reliable people who show up. The aha moment? Realizing Gatherly could tackle both the loneliness epidemic and the flaky-friend epidemic. Check out the prototype and let me know what you think!",
      mediaType: "image",
      mediaSrc: imgScreenshot20250910At53309Pm1,
    },
    {
      title: "Nudgey",
      link: "https://bagel-fabric-95097869.figma.site",
      metadata: "Figma Make · 6 hours · 133 versions · Concept project",
      problem: "Habit tracking apps use one-size-fits-all motivation that doesn't work. Everyone gets the same generic reminders regardless of what actually motivates them. Resulting in high abandonment rates and ignored notifications. Some people need gentle encouragement, others need Duolingo-owl persistence, but current apps treat everyone the same.",
      idea: "Nudgey features an AI ghost mascot that learns your unique motivational style and adapts in real-time. Ignore reminders? It gets more persistent. Stay consistent? It celebrates supportively. The ghost analyzes your behavior patterns to deliver the right motivation at the right time in the right tone.",
      mediaType: "image",
      mediaSrc: imgNudgeyScreen,
      objectFit: "contain",
    },
    {
      title: "Cosmic Dot Matrix Printer",
      link: "https://skit-kit-13527101.figma.site",
      metadata: "For fun project",
      problem: "Daily rituals have lost their charm in our hyperdigital world. Horoscopes are consumed as quick swipes, lacking the tangible magic and anticipation that made them special.",
      idea: "A horoscope printer that bridges nostalgia and playful daily rituals. Using retro dot matrix printing aesthetics, it transforms your daily cosmic forecast into a tangible keepsake. The satisfying whir and tactile output make checking your horoscope feel like a delightful ceremony rather than just another notification.",
      mediaType: "image",
      mediaSrc: imgCosmicPrinter,
    },
    {
      title: "Do You Speak Corporate?",
      link: "https://mode-agenda-32217227.figma.site",
      metadata: "For fun project",
      problem: "Corporate jargon has become so absurd that meetings feel like a foreign language course. Buzzwords like 'synergize,' 'circle back,' and 'move the needle' dominate conversations, leaving people confused and fatigued by meaningless business-speak.",
      idea: "A satirical quiz that gamifies workplace jargon fluency. Test how well you can decode corporate nonsense while enjoying a playful critique of business communication. Perfect for commiserating with colleagues or introducing new hires to the peculiar language of the corporate world.",
      mediaType: "image",
      mediaSrc: imgCorporateQuiz,
      objectFit: "contain",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <NavigationBar currentPage="playground" />
      
      {/* Main Content */}
      <main id="main-content">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-72 pb-16 md:pt-40 md:pb-20"
        aria-label="Playground projects"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Mobile: Background Playground Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:hidden fixed inset-0 flex items-center justify-center z-0"
            style={{ transform: 'scale(0.25)', pointerEvents: 'auto' }}
          >
            <Heading1Mobile />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Desktop: Left side Title (scrolls with content) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block lg:col-span-5 order-1 lg:pt-6"
            >
              <Heading1 />
            </motion.div>

            {/* Projects List (Mobile: with relative z-index, Desktop: on right) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-7 order-2 relative z-10"
            >
              {projects.map((project, index) => (
                <ProjectItem 
                  key={project.title} 
                  project={project} 
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
      </main>

      <Footer currentPage="playground" />
    </div>
  );
}
