import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface FooterProps {
  currentPage?: "home" | "about" | "playground" | "case-study";
}

export default function Footer({ currentPage = "home" }: FooterProps) {
  const email = "itsncki@gmail.com";

  const copyEmail = () => {
    // Try modern clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => {
          toast.success("Email copied to clipboard!");
        })
        .catch(() => {
          // Fallback: create temporary input element
          fallbackCopyEmail();
        });
    } else {
      // Fallback for browsers without clipboard API
      fallbackCopyEmail();
    }
  };

  const fallbackCopyEmail = () => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        toast.success("Email copied to clipboard!");
      } else {
        toast.error("Failed to copy email. Please copy manually: " + email);
      }
    } catch (err) {
      toast.error("Failed to copy email. Please copy manually: " + email);
    }
  };

  const projects = [
    { name: "Nike Booking Tool", link: "/nike-case-study", available: true, id: "nike" },
    { name: "Personal Travel Guide", link: "/oh-wow-case-study", available: true, id: "oh-wow" },
    { name: "Google Ads", link: null, available: false, id: "google-ads" },
    { name: "Mastery", link: "/mastery-case-study", available: true, id: "mastery" },
  ];

  // Determine which project is currently active
  const getCurrentProject = () => {
    if (currentPage !== "case-study") return null;
    
    const path = window.location.pathname;
    if (path.includes("nike-case-study")) return "nike";
    if (path.includes("oh-wow-case-study")) return "oh-wow";
    if (path.includes("mastery-case-study")) return "mastery";
    return null;
  };

  const activeProject = getCurrentProject();

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <footer className="border-t border-neutral-200 mt-24 md:mt-32 lg:mt-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-20">
          {/* Contact Section */}
          <div className="lg:col-span-5">
            <h3 className="mb-6 font-bold">Let's Connect</h3>
            <p className="text-neutral-600 mb-6 max-w-md">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>
            
            {/* Email Button */}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-900 text-neutral-50 rounded-lg hover:bg-neutral-800 transition-colors group"
              title="Send me an email"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
            </a>
            

          </div>

          {/* Projects Section */}
          <div className="lg:col-span-4">
            <h4 className="mb-6 font-bold">Projects</h4>
            <nav className="space-y-3">
              {projects.map((project) => (
                <div key={project.name}>
                  {project.available ? (
                    <a
                      href={project.link || "#"}
                      className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                      onClick={(e) => {
                        if (project.link) {
                          e.preventDefault();
                          window.scrollTo(0, 0);
                          window.history.pushState({}, "", project.link);
                          window.dispatchEvent(new PopStateEvent("popstate"));
                        }
                      }}
                    >
                      <span>{project.name}</span>
                      {activeProject === project.id ? (
                        <span className="text-xs px-2 py-0.5 text-neutral-900 rounded-full" style={{ backgroundColor: '#BBFF85' }}>
                          current
                        </span>
                      ) : (
                        <span>→</span>
                      )}
                    </a>
                  ) : (
                    <span className="block text-neutral-400">
                      {project.name} <span className="text-xs">(Coming Soon)</span>
                    </span>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 font-bold">Explore</h4>
            <nav className="space-y-3">
              <a
                href="/"
                className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo(0, 0);
                  window.history.pushState({}, "", "/");
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }}
              >
                <span>Home</span>
                {currentPage === "home" && (
                  <span className="text-xs px-2 py-0.5 text-black rounded-full" style={{ backgroundColor: '#BBFF85' }}>
                    current
                  </span>
                )}
              </a>
              <a
                href="/about"
                className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo(0, 0);
                  window.history.pushState({}, "", "/about");
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }}
              >
                <span>About Me</span>
                {currentPage === "about" && (
                  <span className="text-xs px-2 py-0.5 text-black rounded-full" style={{ backgroundColor: '#BBFF85' }}>
                    current
                  </span>
                )}
              </a>
              <a
                href="/playground"
                className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo(0, 0);
                  window.history.pushState({}, "", "/playground");
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }}
              >
                <span>Playground</span>
                {currentPage === "playground" && (
                  <span className="text-xs px-2 py-0.5 text-black rounded-full" style={{ backgroundColor: '#BBFF85' }}>
                    current
                  </span>
                )}
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© 2025 Nicki. All rights reserved.</p>
          <p>Designed & Built with care</p>
        </div>
      </div>
    </footer>
  );
}
