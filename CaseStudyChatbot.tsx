import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { MessageCircle, Send, Sparkles, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { OPENAI_API_KEY, OPENAI_MODEL, MAX_TOKENS, TEMPERATURE } from "../config/openai";

// Configuration: Set to true to use the secure API endpoint instead of direct OpenAI calls
const USE_API_ENDPOINT = true;
const API_ENDPOINT = "/api/chat"; // Your serverless function endpoint

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface CaseStudyContext {
  projectName: string;
  tldr: {
    "Hiring Manager": string;
    "Designer": string;
    "Product Manager": string;
    "Founder": string;
    "Recruiter": string;
  };
}

interface CaseStudyChatbotProps {
  context: CaseStudyContext;
}

export default function CaseStudyChatbot({ context }: CaseStudyChatbotProps) {
  const [open, setOpen] = useState(false);
  const isApiConfigured = OPENAI_API_KEY && OPENAI_API_KEY !== "YOUR_OPENAI_API_KEY_HERE";
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: isApiConfigured 
        ? `Hi! I'm here to answer questions about the ${context.projectName} case study. Ask me about design decisions, challenges, outcomes, or Nicki's role in the project. What would you like to know?`
        : `Hi! I'm a demo chatbot for the ${context.projectName} case study. To enable AI-powered responses, add your OpenAI API key in \`/config/openai.ts\`. See CHATBOT_SETUP.md for instructions. You can still ask questions to see the interface!`
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lastRequestTime, setLastRequestTime] = useState(0);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // Rate limiting: Prevent requests within 2 seconds of each other
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime;
    const MIN_REQUEST_INTERVAL = 2000; // 2 seconds

    if (timeSinceLastRequest < MIN_REQUEST_INTERVAL && lastRequestTime > 0) {
      const waitTime = Math.ceil((MIN_REQUEST_INTERVAL - timeSinceLastRequest) / 1000);
      const cooldownMessage: Message = {
        role: "assistant",
        content: `⏸️ Please wait ${waitTime} second${waitTime > 1 ? 's' : ''} before sending another message to avoid rate limits.`
      };
      setMessages((prev) => [...prev, cooldownMessage]);
      return;
    }

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setLastRequestTime(now);

    // Check if API key is configured
    if (!OPENAI_API_KEY || OPENAI_API_KEY === "YOUR_OPENAI_API_KEY_HERE") {
      setTimeout(() => {
        const configMessage: Message = {
          role: "assistant",
          content: `🔑 **API Key Required**\n\nTo enable AI-powered responses, please add your OpenAI API key:\n\n1. Get a key from: https://platform.openai.com/api-keys\n2. Open \`/config/openai.ts\`\n3. Replace the placeholder with your key\n\n**Demo Response:**\nGreat question! The ${context.projectName} project demonstrates ${context.projectName === "Mastery" ? "strong mobile-first design thinking and the ability to ship AI features under tight timelines" : context.projectName === "Nike Digital Booking Tool" ? "service design excellence and cross-functional collaboration at scale" : "consumer product expertise with a focus on retention and engagement"}. ${context.tldr["Designer"].substring(0, 120)}...`
        };
        setMessages((prev) => [...prev, configMessage]);
        setIsLoading(false);
      }, 500);
      return;
    }

    try {
      let assistantMessage: Message;

      if (USE_API_ENDPOINT) {
        // Use secure API endpoint (recommended for production)
        const response = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [
              {
                role: "system",
                content: `You are a helpful assistant answering questions about Nicki's ${context.projectName} case study. Here's what you know:

Project: ${context.projectName}

Context from different perspectives:
- Hiring Manager: ${context.tldr["Hiring Manager"]}
- Designer: ${context.tldr["Designer"]}
- Product Manager: ${context.tldr["Product Manager"]}
- Founder: ${context.tldr["Founder"]}
- Recruiter: ${context.tldr["Recruiter"]}

Answer questions in a friendly, professional tone. Focus on Nicki's design work, process, impact, and outcomes. If you don't know something specific, acknowledge it honestly while providing relevant information from what you do know. Keep responses concise (2-3 paragraphs max).`
              },
              ...messages.map(msg => ({
                role: msg.role,
                content: msg.content
              })),
              {
                role: "user",
                content: input
              }
            ],
            projectName: context.projectName
          })
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(`API error: ${response.status}`, { cause: errorData });
        }

        const data = await response.json();
        assistantMessage = {
          role: "assistant",
          content: data.message
        };
      } else {
        // Direct OpenAI API call (only for development/testing)
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: OPENAI_MODEL,
            messages: [
              {
                role: "system",
                content: `You are a helpful assistant answering questions about Nicki's ${context.projectName} case study. Here's what you know:

Project: ${context.projectName}

Context from different perspectives:
- Hiring Manager: ${context.tldr["Hiring Manager"]}
- Designer: ${context.tldr["Designer"]}
- Product Manager: ${context.tldr["Product Manager"]}
- Founder: ${context.tldr["Founder"]}
- Recruiter: ${context.tldr["Recruiter"]}

Answer questions in a friendly, professional tone. Focus on Nicki's design work, process, impact, and outcomes. If you don't know something specific, acknowledge it honestly while providing relevant information from what you do know. Keep responses concise (2-3 paragraphs max).`
              },
              ...messages.map(msg => ({
                role: msg.role,
                content: msg.content
              })),
              {
                role: "user",
                content: input
              }
            ],
            temperature: TEMPERATURE,
            max_tokens: MAX_TOKENS
          })
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(`API error: ${response.status}`, { cause: errorData });
        }

        const data = await response.json();
        assistantMessage = {
          role: "assistant",
          content: data.choices[0].message.content
        };
      }

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      
      // Provide helpful error messages based on the error type
      let errorMessage = "";
      
      if (error instanceof Error) {
        if (error.message.includes("401")) {
          errorMessage = "🔑 **Invalid API Key**\n\nYour OpenAI API key appears to be invalid. Please check:\n- The key is correct in `/config/openai.ts`\n- It starts with `sk-`\n- There are no extra spaces\n\nGet a new key at: https://platform.openai.com/api-keys";
        } else if (error.message.includes("429")) {
          errorMessage = "⏱️ **Rate Limit Exceeded**\n\nYour OpenAI API has hit its rate limit. This usually means:\n\n**Free Tier Limits:**\n- 3 requests per minute\n- 200 requests per day\n\n**Solutions:**\n✅ Wait 60 seconds and try again\n✅ Add credits to your OpenAI account\n✅ Upgrade to a paid tier\n\n**For now, here's a contextual answer:**\n" + context.tldr["Designer"].substring(0, 200) + "...";
        } else if (error.message.includes("500") || error.message.includes("503")) {
          errorMessage = "🔧 **OpenAI Service Issue**\n\nOpenAI's servers are currently experiencing issues. Please try again in a moment.\n\nCheck status: https://status.openai.com";
        } else {
          errorMessage = `❌ **Connection Error**\n\n${error.message}\n\n**Demo Response:** The ${context.projectName} project showcases excellent design execution and measurable impact. ${context.tldr["Designer"].substring(0, 120)}...`;
        }
      } else {
        errorMessage = `I'd be happy to discuss that! The ${context.projectName} project demonstrates strong product thinking and design execution. ${context.tldr["Designer"].substring(0, 150)}... Would you like to know more about a specific aspect?`;
      }
      
      const demoResponse: Message = {
        role: "assistant",
        content: errorMessage
      };
      setMessages((prev) => [...prev, demoResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="group inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-200 mt-6 border border-black/10 hover:border-black/30 rounded-full px-5 py-2.5">
          <MessageCircle className="w-4 h-4" />
          <span>Ask a question about this project</span>
          <Sparkles className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-black/5">
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Ask about this case study
            {!isApiConfigured && (
              <span className="ml-auto text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
                Demo Mode
              </span>
            )}
          </DialogTitle>
          <DialogDescription className="text-sm text-black/50 mt-2">
            {isApiConfigured 
              ? "AI-powered responses using OpenAI GPT" 
              : "Add API key in /config/openai.ts for AI responses"}
          </DialogDescription>
        </DialogHeader>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 min-h-[300px] max-h-[400px]">
          <AnimatePresence initial={false}>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-[#2A2A2A] text-white"
                      : "bg-neutral-100 text-black/80"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-neutral-100 text-black/80 rounded-2xl px-4 py-3">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        <div className="px-6 pb-6 pt-4 border-t border-black/5">
          <div className="flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question... (Press Enter to send)"
              className="resize-none min-h-[44px] max-h-[120px]"
              rows={1}
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-[#2A2A2A] hover:bg-[#2A2A2A]/90 text-white px-4 shrink-0 disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </Button>
          </div>
          <div className="text-xs text-black/40 mt-2 space-y-1">
            <p>
              {isApiConfigured 
                ? 'Suggested: "What was the biggest challenge?" or "How did you measure success?"'
                : '💡 To enable AI: Add your OpenAI key to /config/openai.ts (see CHATBOT_SETUP.md)'}
            </p>
            {isApiConfigured && (
              <p className="text-amber-600">
                ⚠️ Free tier: 3 requests/min. If you hit limits, add credits at platform.openai.com
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
