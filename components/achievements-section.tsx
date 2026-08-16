"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Briefcase, GraduationCap, Trophy } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

const timelineItems = [
  {
    id: 1,
    type: "EXPERIENCE",
    categoryLabel: "Work Experience",
    badgeClass: "bg-[#AE88E8]/25 border border-[#AE88E8]/50 text-black dark:text-[#AE88E8] font-extrabold shadow-xs",
    nodeBg: "bg-[#AE88E8] text-black ring-4 ring-[#AE88E8]/40 border-2 border-white shadow-xl",
    icon: Briefcase,
    title: "Full Stack Developer Intern",
    subtitle: "Tensorik Technologies Private Limited",
    period: "June 2026 - Present",
    description:
      "Worked on developing, maintaining, and improving web applications using React, Node.js, and Supabase. Collaborated with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    id: 2,
    type: "EDUCATION",
    categoryLabel: "Education",
    badgeClass: "bg-white dark:bg-black/80 text-black dark:text-white border border-black/15 dark:border-[#AE88E8]/40 font-extrabold shadow-xs",
    nodeBg: "bg-black text-white dark:bg-[#AE88E8] dark:text-black ring-4 ring-black/20 dark:ring-[#AE88E8]/30 border-2 border-white shadow-xl",
    icon: GraduationCap,
    title: "B.Tech in Information Technology",
    subtitle: "Bharati Vidyapeeth College of Engineering, Pune",
    period: "2023 - 2027",
    description: "Currently in 3rd year with CGPA: 9.4/10",
  },
  {
    id: 3,
    type: "EDUCATION",
    categoryLabel: "Education",
    badgeClass: "bg-white dark:bg-black/80 text-black dark:text-white border border-black/15 dark:border-[#AE88E8]/40 font-extrabold shadow-xs",
    nodeBg: "bg-black text-white dark:bg-[#AE88E8] dark:text-black ring-4 ring-black/20 dark:ring-[#AE88E8]/30 border-2 border-white shadow-xl",
    icon: GraduationCap,
    title: "Higher Secondary Education",
    subtitle: "Dr. Kalmadi Shamarao High School, Pune",
    period: "2021 - 2023",
    description: "Percentage: 67%",
  },
]

const achievements = [
  {
    title: "Hackathon Semi Finalist",
    organization: "Google GenAI Exchange Hackathon",
    description: "Selected as a semi-finalist from over 4,000+ competing teams worldwide.",
    icon: Trophy,
  },
  {
    title: "RIFT 2.0 Hackathon",
    organization: "PhysicsWallah Institute of Innovation",
    description: "Participated in RIFT 2.0, a 24-hour hackathon focused on developing Health-Tech solutions.",
    icon: Trophy,
  },
  {
    title: "Aperture 3.0 Open Source",
    organization: "Open Source Contribution Platform",
    description: "Contributed to various open-source projects, resolving issues and earning the Pull Shark Badge.",
    icon: Award,
  },
]

const certifications = [
  "Introduction to MongoDB (Students)",
  "NPTEL - Cloud Computing",
  "NPTEL - The Joy of Computing using Python",
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="container px-4 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black dark:text-[#AE88E8]">
            Experience & Education
          </h2>
          <p className="text-lg text-slate-800 dark:text-slate-300 font-medium max-w-2xl mx-auto">
            My career timeline, academic background, accomplishments, and certifications
          </p>
        </motion.div>

        {/* COMBINED VERTICAL TIMELINE */}
        <div className="mb-24">
          <div className="relative pt-4 pb-8 max-w-5xl mx-auto">
            {/* Cool Glowing Vertical Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1.5 -translate-x-1/2 bg-gradient-to-b from-[#AE88E8] via-black dark:via-[#AE88E8] to-[#AE88E8] rounded-full shadow-[0_0_15px_rgba(174,136,232,0.6)] opacity-90" />

            <div className="space-y-12 md:space-y-16">
              {timelineItems.map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative flex flex-col md:flex-row items-center group"
                  >
                    {/* Glowing Timeline Node */}
                    <div
                      className={cn(
                        "absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-125 group-hover:rotate-6",
                        item.nodeBg
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Premium Glass Card Wrapper */}
                    <div
                      className={cn(
                        "w-full pl-16 md:pl-0 md:w-1/2 transition-all duration-300",
                        isEven
                          ? "md:pr-14 md:text-right"
                          : "md:pl-14 md:ml-auto md:text-left"
                      )}
                    >
                      <Card className="hover:shadow-2xl transition-all duration-300 rounded-2xl group-hover:border-[#AE88E8] group-hover:-translate-y-1.5">
                        <CardHeader className="pb-3">
                          <div
                            className={cn(
                              "flex flex-wrap items-center gap-2 mb-2",
                              isEven ? "md:justify-end" : "md:justify-start"
                            )}
                          >
                            <span
                              className={cn(
                                "rounded-full px-3.5 py-1 text-xs uppercase tracking-wider",
                                item.badgeClass
                              )}
                            >
                              {item.categoryLabel}
                            </span>
                            <span className="text-xs font-bold text-slate-700 dark:text-[#AE88E8] bg-slate-100 dark:bg-black/80 px-3 py-1 rounded-full border border-slate-200 dark:border-[#AE88E8]/30">
                              {item.period}
                            </span>
                          </div>

                          <CardTitle className="text-xl sm:text-2xl font-black text-black dark:text-[#AE88E8]">
                            {item.title}
                          </CardTitle>
                          <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mt-1">
                            {item.subtitle}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 flex items-center justify-center gap-3"
          >
            <div className="p-2.5 rounded-xl bg-[#AE88E8] text-black">
              <Trophy className="h-6 w-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-[#AE88E8]">Achievements</h3>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="transition-all hover:shadow-2xl h-full rounded-2xl">
                    <CardHeader>
                      <div className="mb-3 inline-flex rounded-xl bg-[#AE88E8] shadow-md p-3 w-fit text-black">
                        <Icon className="h-6 w-6 text-black" />
                      </div>
                      <CardTitle className="text-xl font-bold text-black dark:text-[#AE88E8]">{achievement.title}</CardTitle>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                        {achievement.organization}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-8 flex items-center justify-center gap-3"
          >
            <div className="p-2.5 rounded-xl bg-[#AE88E8] text-black shadow-md">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-[#AE88E8]">Certifications</h3>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, x: 4 }}
                className="flex items-center gap-3.5 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-2xl p-4 transition-all hover:shadow-xl hover:border-black/30 dark:hover:border-white/20 cursor-default"
              >
                <div className="rounded-xl bg-[#AE88E8] shadow-md p-2.5 text-black shrink-0">
                  <Award className="h-5 w-5 text-black" />
                </div>
                <p className="text-sm font-bold text-black dark:text-white">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}