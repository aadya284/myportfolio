"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { useTypingEffect } from "@/hooks/use-typing-effect"

export function HeroSection() {
  const { displayedText: headingText, isComplete: headingComplete } = useTypingEffect(
    "Hi, I'm Aadya Paradkar",
    150,
    true,
    2000
  )
  useEffect(() => {
    // no-op: keep effect to preserve any timing side-effects for heading
  }, [headingComplete])
  // Show static role text (no typing) per request
  const displayedRole = "BTech IT Student at Bharati Vidyapeeth College of Engineering, Pune"
  const roleVisible = Boolean(displayedRole)

  return (
    <section id="home" className="container px-4 pt-24 md:pt-32 pb-16 md:pb-20 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16">
          {/* Photo column with cool overlapping circular glass backdrop and offset borders */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative shrink-0 w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 flex justify-center md:justify-start group my-4 md:my-0"
          >
            {/* Overlapping Glass Circular Backdrop 1 */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/70 dark:border-white/20 shadow-2xl transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
            
            {/* Overlapping Glass Circular Backdrop 2 */}
            <div className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-full bg-[#AE88E8]/25 dark:bg-white/5 backdrop-blur-md border border-white/50 dark:border-white/15 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />

            {/* Main Circular Image Frame */}
            <div className="relative z-10 w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-white/80 shadow-2xl ring-4 ring-white/60 dark:ring-white/20 transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src="/profile.jpg"
                alt="Aadya Paradkar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          {/* Text column */}
          <div className="w-full text-center md:text-left">
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-[#AE88E8]">
              <span className="text-black dark:text-[#AE88E8]">
                {headingText}
                {!headingComplete && <span className="animate-pulse">|</span>}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: headingComplete ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ willChange: 'opacity' }}
              className="mb-4 text-base sm:text-lg font-bold text-black dark:text-white md:text-xl min-h-8"
            >
              {displayedRole}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={
                roleVisible
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.98 }
              }
              transition={{ type: "spring", stiffness: 110, damping: 14, mass: 0.8 }}
              style={{ willChange: 'transform, opacity' }}
              className="mb-6 text-base md:text-lg text-slate-800 dark:text-slate-300 font-medium max-w-2xl"
            >
              Passionate about building innovative solutions and learning new technologies. 
              Specializing in Data Analytics with a focus on creating impactful projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              style={{ willChange: 'transform, opacity' }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
            >
              <Button size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/90 dark:bg-white/10 text-black dark:text-white border border-black/15 dark:border-white/20 hover:bg-[#AE88E8] dark:hover:bg-white/20 dark:hover:text-white font-bold shadow-md" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.1 }}
              style={{ willChange: 'opacity' }}
              className="flex justify-center md:justify-start gap-4"
            >
              <Button variant="ghost" size="icon" className="rounded-full bg-white dark:bg-white/10 text-black dark:text-white border border-black/15 dark:border-white/20 hover:bg-[#AE88E8] dark:hover:bg-white/20 shadow-md transition-all h-10 w-10" asChild>
                <a href="https://github.com/aadya284" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white dark:bg-white/10 text-black dark:text-white border border-black/15 dark:border-white/20 hover:bg-[#AE88E8] dark:hover:bg-white/20 shadow-md transition-all h-10 w-10" asChild>
                <a href="https://www.linkedin.com/in/aadya-paradkar-46526a1b4/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white dark:bg-white/10 text-black dark:text-white border border-black/15 dark:border-white/20 hover:bg-[#AE88E8] dark:hover:bg-white/20 shadow-md transition-all h-10 w-10" asChild>
                <a href="mailto:aadyaparadkar@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}