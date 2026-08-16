"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="container px-4 py-24 md:py-32 bg-muted/30" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black dark:text-[#AE88E8]">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="pt-6">
                <motion.div variants={container} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-4">
                  <motion.div variants={item} className="flex items-center gap-3">
                    <motion.div whileHover={{ scale: 1.1 }} className="rounded-lg bg-primary/10 p-2">
                      <Mail className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:aadyaparadkar@gmail.com"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        aadyaparadkar@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div variants={item} className="flex items-center gap-3">
                    <motion.div whileHover={{ scale: 1.1 }} className="rounded-lg bg-primary/10 p-2">
                      <Phone className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a
                        href="tel:+919325486728"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        +91 93254 86728
                      </a>
                    </div>
                  </motion.div>

                  <motion.div variants={item} className="flex items-center gap-3">
                    <motion.div whileHover={{ scale: 1.1 }} className="rounded-lg bg-primary/10 p-2">
                      <MapPin className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Pune, Maharashtra, India</p>
                    </div>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-6 text-lg font-semibold text-foreground dark:text-white">Connect With Me</h3>
                <motion.div variants={container} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-3">
                  <motion.a
                    variants={item}
                    whileHover={{ scale: 1.03, x: 5 }}
                    href="https://github.com/aadya284"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border bg-background/80 dark:bg-white/5 backdrop-blur-xs p-4 transition-all hover:shadow-md hover:border-primary dark:hover:border-white/20"
                  >
                    <Github className="h-5 w-5" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">@aadya284</p>
                    </div>
                  </motion.a>

                  <motion.a
                    variants={item}
                    whileHover={{ scale: 1.03, x: 5 }}
                    href="https://www.linkedin.com/in/aadya-paradkar-46526a1b4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border bg-background/80 dark:bg-white/5 backdrop-blur-xs p-4 transition-all hover:shadow-md hover:border-primary dark:hover:border-white/20"
                  >
                    <Linkedin className="h-5 w-5" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">@aadya-paradkar-46526a1b4</p>
                    </div>
                  </motion.a>

                  <motion.a
                    variants={item}
                    whileHover={{ scale: 1.03, x: 5 }}
                    href="https://instagram.com/aadya_284"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border bg-background/80 dark:bg-white/5 backdrop-blur-xs p-4 transition-all hover:shadow-md hover:border-primary dark:hover:border-white/20"
                  >
                    <Instagram className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-sm text-muted-foreground">@aadya_284</p>
                    </div>
                  </motion.a>

                  <motion.a
                    variants={item}
                    whileHover={{ scale: 1.03, x: 5 }}
                    href="mailto:aadyaparadkar@gmail.com"
                    className="flex items-center gap-3 rounded-lg border bg-background/80 dark:bg-white/5 backdrop-blur-xs p-4 transition-all hover:shadow-md hover:border-primary dark:hover:border-white/20"
                  >
                    <Mail className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">Send me a message</p>
                    </div>
                  </motion.a>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}