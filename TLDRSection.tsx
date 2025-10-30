import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import CaseStudyChatbot from "./CaseStudyChatbot";

interface TLDRContent {
  "Hiring Manager": string;
  "Designer": string;
  "Product Manager": string;
  "Founder": string;
  "Recruiter": string;
}

interface TLDRSectionProps {
  content: TLDRContent;
  projectName: string;
}

export default function TLDRSection({ content, projectName }: TLDRSectionProps) {
  const roles = ["Hiring Manager", "Designer", "Product Manager", "Founder", "Recruiter"] as const;
  const [selectedRole, setSelectedRole] = useState<keyof TLDRContent>("Hiring Manager");

  return (
    <section className="pb-24 md:pb-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
            {/* Left: Header */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 lg:mb-0">TL;DR</h2>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-8">
              {/* Role Selector */}
              <div className="mb-8 md:mb-10">
                <p className="text-sm text-black/40 mb-4">Reading as:</p>
                <div className="flex flex-wrap gap-2">
                  {roles.map((role) => (
                    <button
                      key={role}
                      onClick={() => setSelectedRole(role)}
                      className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 border ${
                        selectedRole === role
                          ? "bg-[#2A2A2A] text-white border-[#2A2A2A] shadow-sm"
                          : "bg-transparent text-black/60 border-black/10 hover:border-black/30 hover:text-black"
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedRole}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-black/5"
                >
                  <p className="text-base md:text-lg leading-relaxed text-black/70">
                    {content[selectedRole]}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Chatbot */}
              <CaseStudyChatbot context={{ projectName, tldr: content }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
