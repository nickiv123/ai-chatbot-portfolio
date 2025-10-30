import { motion } from "motion/react";
import svgPaths from "../imports/svg-u6een6j1ky";

// Navigation Icons
function HomeSmileIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <path 
            d={svgPaths.p4921200} 
            fill={isActive ? "#BBFF85" : "transparent"}
            stroke="#2a2a2a" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </g>
      </svg>
    </div>
  );
}

function GlobeIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {isActive && (
          <>
            <path d={svgPaths.p334b6c80} fill="#BBFF85" />
            <path d={svgPaths.p3dc49580} fill="#BBFF85" />
          </>
        )}
        <path d={svgPaths.p1cef8100} stroke="#2a2a2a" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function StarIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <path d={svgPaths.p17a51e80} fill={isActive ? "#BBFF85" : "transparent"} stroke="#2a2a2a" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

interface NavigationBarProps {
  currentPage?: "home" | "playground" | "about";
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

export default function NavigationBar({ 
  currentPage, 
  activeSection = "home",
  onSectionChange 
}: NavigationBarProps) {
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage === "home") {
      // On home page, scroll to top
      onSectionChange?.("home");
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // On other pages, navigate to home
      window.scrollTo(0, 0);
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const handlePlaygroundClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage === "playground") {
      // Already on playground, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to playground
      window.scrollTo(0, 0);
      window.history.pushState({}, "", "/playground");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage === "about") {
      // Already on about page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to about page
      window.scrollTo(0, 0);
      window.history.pushState({}, "", "/about");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  return (
    <nav className="fixed bottom-4 md:top-6 md:bottom-auto left-0 right-0 z-50 px-4">
      <div className="max-w-fit mx-auto bg-[rgba(246,246,246,0.4)] backdrop-blur-md rounded-full px-2 py-2">
        <div className="flex items-center gap-1">
          {/* Home */}
          <motion.a
            href="#home"
            onClick={handleHomeClick}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Navigate to home page"
            aria-current={currentPage === "home" ? "page" : undefined}
          >
            <HomeSmileIcon isActive={currentPage === "home"} />
            <span className={`text-sm text-neutral-900 whitespace-nowrap ${
              currentPage === "home" ? "font-semibold" : "font-normal"
            } ${currentPage === "home" ? "" : "hidden"} sm:inline`}>
              Home
            </span>
          </motion.a>

          {/* Playground */}
          <motion.a
            href="/playground"
            onClick={handlePlaygroundClick}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Navigate to playground page"
            aria-current={currentPage === "playground" ? "page" : undefined}
          >
            <GlobeIcon isActive={currentPage === "playground"} />
            <span className={`text-sm text-neutral-900 whitespace-nowrap ${
              currentPage === "playground" ? "font-semibold" : "font-normal"
            } ${currentPage === "playground" ? "" : "hidden"} sm:inline`}>
              Playground
            </span>
          </motion.a>

          {/* About Me */}
          <motion.a
            href="/about"
            onClick={handleAboutClick}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Navigate to about me page"
            aria-current={currentPage === "about" ? "page" : undefined}
          >
            <StarIcon isActive={currentPage === "about"} />
            <span className={`text-sm text-neutral-900 whitespace-nowrap ${
              currentPage === "about" ? "font-semibold" : "font-normal"
            } ${currentPage === "about" ? "" : "hidden"} sm:inline`}>
              About Me
            </span>
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
