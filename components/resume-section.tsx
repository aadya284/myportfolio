"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="resume" className="container px-4 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black dark:text-[#AE88E8]">
            Resume
          </h2>
          <p className="text-lg text-slate-800 dark:text-slate-300 font-medium mb-6">
            Download my resume or view it below
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-2xl p-8 shadow-md"
        >
          <p className="text-slate-700 dark:text-slate-300 font-medium mb-6">
            You can download the PDF or open a preview in a new tab.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-0 bg-white/80 dark:bg-white/10 text-black dark:text-white hover:bg-white dark:hover:bg-white/20 font-bold shadow-md" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Preview
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
