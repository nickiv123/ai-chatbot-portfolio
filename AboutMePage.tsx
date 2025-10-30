import { useState } from "react";
import { motion } from "motion/react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import imgImageNickisTravelAdventuresAndExperiences from "figma:asset/725ea1c43b88fac709b59c70216ef01b1f428ce5.png";
import imgImageNickiWithFriendsAndCommunity from "figma:asset/1af226d562cdda9535d3ce773271c15799be57d7.png";
import imgImg6481 from "figma:asset/1aedec79b77c5879d9faca582733bbd81879f242.png";
import imgImg80871 from "figma:asset/b9083f0d903076d96d3aacfbefc2cf1c39b70dbd.png";
import imgImg2157 from "figma:asset/9b5e6ec8b6ea2e3153193a250d8001c8e6b31249.png";
import imgStravaPR from "figma:asset/fee2764ccaf9c0764dc70e416777d5db95c85924.png";
import imgArchesZion from "figma:asset/2b495c33fe02cea97fd69329768d9e4363e3765c.png";

export default function AboutMePage() {
  const [showStravaMobile, setShowStravaMobile] = useState(false);
  const [showArchesZion, setShowArchesZion] = useState(false);
  const [hoverArchesZion, setHoverArchesZion] = useState(false);
  const [hoverStrava, setHoverStrava] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <NavigationBar currentPage="about" />

      <main id="main-content" className="pt-20">
        <div className="bg-neutral-50 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Mobile Layout */}
          <div className="lg:hidden py-12 space-y-16">
            {/* Heading Section */}
            <div>
              <h2 className="text-neutral-900">
                <p className="mb-0">Nicki</p>
                <p>Vuong</p>
              </h2>
            </div>

            {/* Hero Image */}
            <div className="w-full h-[400px] sm:h-[500px]">
              <img 
                alt="Nicki on an outdoor hiking adventure" 
                className="w-full h-full object-cover" 
                src={imgImg80871} 
              />
            </div>

            {/* 2025 So Far Section */}
            <div className="space-y-6">
              <h3 className="text-neutral-900">
                2025 So Far →
              </h3>
              <div className="space-y-2">
                <p 
                  className="text-neutral-600 cursor-pointer hover:text-neutral-900 transition-colors"
                  onClick={() => setShowArchesZion(!showArchesZion)}
                >
                  Explored Arches + Zion 🏜️
                </p>
                <p className="text-neutral-600">
                  Ran 259.7 miles
                </p>
                <p 
                  className="text-neutral-600 cursor-pointer hover:text-neutral-900 transition-colors"
                  onClick={() => setShowStravaMobile(!showStravaMobile)}
                >
                  10K PR (1:05:59)
                </p>

                {/* Arches + Zion image popup */}
                {showArchesZion && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 w-full max-w-[400px]"
                    onClick={() => setShowArchesZion(false)}
                  >
                    <img 
                      src={imgArchesZion} 
                      alt="Arches and Zion National Parks adventure" 
                      className="w-full cursor-pointer"
                    />
                  </motion.div>
                )}
                
                {/* Strava image popup */}
                {showStravaMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 w-full max-w-[400px]"
                    onClick={() => setShowStravaMobile(false)}
                  >
                    <img 
                      src={imgStravaPR} 
                      alt="Strava 10K PR achievement" 
                      className="w-full cursor-pointer"
                    />
                  </motion.div>
                )}
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-6">
              <h3 className="text-neutral-900">
                I love being outdoors and exploring new countries
              </h3>
              <div className="space-y-6">
                <p className="text-neutral-600">
                  Growing up in Portland, OR nurtured my love for nature and creativity. It allowed me to explore art, fashion, and psychology.
                </p>
                <p className="text-neutral-600">
                  Here are some of snippets of my life. Enjoy!
                </p>
              </div>
            </div>

            {/* Bottom Images - Mobile Stack */}
            <div className="space-y-4">
              <div className="w-full h-[400px]">
                <img 
                  alt="Nicki's travel adventures and experiences" 
                  className="w-full h-full object-cover" 
                  src={imgImageNickisTravelAdventuresAndExperiences} 
                />
              </div>
              <div className="w-full h-[400px]">
                <img 
                  alt="Nicki with friends and community" 
                  className="w-full h-full object-cover" 
                  src={imgImageNickiWithFriendsAndCommunity} 
                />
              </div>
              <div className="w-full h-[400px]">
                <img 
                  alt="Nicki enjoying outdoor activities" 
                  className="w-full h-full object-cover" 
                  src={imgImg6481} 
                />
              </div>
              <div className="w-full h-[400px]">
                <img 
                  alt="Nicki's creative and artistic pursuits" 
                  className="w-full h-full object-cover" 
                  src={imgImg2157} 
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block max-w-[1093px] mx-auto py-24">
            <div className="relative min-h-[1945px]">
              {/* Hero Image */}
              <div className="absolute h-[784px] left-[322px] top-[135px] w-[771px]">
                <img 
                  alt="Nicki on an outdoor hiking adventure" 
                  className="w-full h-full object-cover" 
                  src={imgImg80871} 
                />
              </div>
              
              {/* Left Column Text Content */}
              <div className="absolute flex flex-col gap-[323px] items-start left-[40px] top-[135px] w-[282px]">
                {/* Heading Section */}
                <div>
                  <div className="text-neutral-900">
                    <h3 className="mb-0 text-[15px] font-bold">Nicki</h3>
                    <h3 className="text-[15px] font-bold">Vuong</h3>
                  </div>
                </div>

                {/* 2025 So Far Section */}
                <div className="flex flex-col gap-[26px] items-start">
                  <h3 className="text-neutral-900">
                    2025 So Far →
                  </h3>
                  <div className="flex flex-col items-start space-y-1">
                    <p 
                      className="text-neutral-600 cursor-pointer hover:text-neutral-900 transition-colors"
                      onMouseEnter={() => setHoverArchesZion(true)}
                      onMouseLeave={() => setHoverArchesZion(false)}
                      onMouseMove={handleMouseMove}
                    >
                      Explored Arches + Zion 🏜️
                    </p>
                    <p className="text-neutral-600">
                      Ran 259.7 miles
                    </p>
                    <p 
                      className="text-neutral-600 cursor-pointer hover:text-neutral-900 transition-colors"
                      onMouseEnter={() => setHoverStrava(true)}
                      onMouseLeave={() => setHoverStrava(false)}
                      onMouseMove={handleMouseMove}
                    >
                      10K PR (1:05:59)
                    </p>
                  </div>
                </div>

                {/* About Section */}
                <div className="flex flex-col gap-[26px] items-start w-[250px]">
                  <h3 className="text-neutral-900 w-full">
                    I love being outdoors and exploring new countries
                  </h3>
                  <div className="flex flex-col gap-[26px] items-start">
                    <p className="text-neutral-600">
                      Growing up in Portland, OR nurtured my love for nature and creativity. It allowed me to explore art, fashion, and psychology.
                    </p>
                    <p className="text-neutral-600">
                      Here are some of snippets of my life. Enjoy!
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Images Row - Desktop */}
              <div className="absolute h-[508.929px] left-[322px] top-[927px] w-[375px]">
                <img 
                  alt="Nicki's travel adventures and experiences" 
                  className="w-full h-full object-cover" 
                  src={imgImageNickisTravelAdventuresAndExperiences} 
                />
              </div>
              
              <div className="absolute h-[509px] left-[708px] top-[927px] w-[375.053px]">
                <img 
                  alt="Nicki with friends and community" 
                  className="w-full h-full object-cover" 
                  src={imgImageNickiWithFriendsAndCommunity} 
                />
              </div>
              
              <div className="absolute h-[500px] left-[322px] top-[1445px] w-[375px]">
                <img 
                  alt="Nicki enjoying outdoor activities" 
                  className="w-full h-full object-cover" 
                  src={imgImg6481} 
                />
              </div>
              
              <div className="absolute h-[500px] left-[708px] top-[1445px] w-[375px]">
                <img 
                  alt="Nicki's creative and artistic pursuits" 
                  className="w-full h-full object-cover" 
                  src={imgImg2157} 
                />
              </div>
            </div>
          </div>

          {/* Hover Images - Desktop Only */}
          {hoverArchesZion && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block fixed pointer-events-none z-50"
              style={{
                left: mousePosition.x + 20,
                top: mousePosition.y + 20,
                width: '300px'
              }}
            >
              <img 
                src={imgArchesZion} 
                alt="Arches and Zion National Parks adventure" 
                className="w-full shadow-2xl"
              />
            </motion.div>
          )}

          {hoverStrava && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block fixed pointer-events-none z-50"
              style={{
                left: mousePosition.x + 20,
                top: mousePosition.y + 20,
                width: '300px'
              }}
            >
              <img 
                src={imgStravaPR} 
                alt="Strava 10K PR achievement" 
                className="w-full shadow-2xl"
              />
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer currentPage="about" />
    </div>
  );
}
