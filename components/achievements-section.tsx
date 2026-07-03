"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, Briefcase, GraduationCap, Trophy } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const education = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Bharati Vidyapeeth College of Engineering, Pune",
    period: "2023 - 2027",
    description: "Currently in 3rd year with CGPA: 9.4/10",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Dr. Kalmadi Shamarao High School, Pune",
    period: "2021 - 2023",
    description: "Percentage: 67%",
  },
]

const achievements = [
  {
    title: "Hackathon Semi Finalist",
    organization: "Google GenAI Exchange Hackathon",
    description: "Got selected as a semi-finalist from over 4000+ teams",
    icon: Trophy,
  },
  {
    title: "RIFT 2.0",
    organization: "PhysicsWallah Institute of Innovation",
    description: "Participated in RIFT 2.0, a 24 hour hackathon where we worked upon Health-Tech",
    icon: Trophy,
  },
  {
    title: "Aperture 3.0",
    organization:"Open Source Contribution Platform",
    description:"Contributed to various projects resolving issues and achieved pull shark badge",
    icon: Award,
  }
]
const experience = [
  {
    title: "Full Stack Developer Intern",
    organization: "Tensorik Technologies Private Limited",
    period: "June 2026-Present",
    description: "worked on developing, maintaining and improving web applications using React, Node.js, and Supabase. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    icon: Briefcase,
  }
]

const certifications = [
  "Introduction to MongoDB(Students) ",
  "NPTEL- Cloud Computing",
  "NPTEL - The Joy of Computing using Python",
]

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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
}

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="container px-4 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Achievements & Education
          </h2>
          <p className="text-lg text-muted-foreground">
            My academic journey and accomplishments
          </p>
        </motion.div>

        {/* Experience */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 flex items-center gap-2"
          >
            <Briefcase className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Experience</h3>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid gap-6 md:grid-cols-2"
          >
            {experience.map((exp, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{exp.organization}</p>
                    <p className="text-sm font-medium text-primary">{exp.period}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 flex items-center gap-2"
          >
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Education</h3>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid gap-6 md:grid-cols-2"
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm font-medium text-primary">{edu.period}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-8 flex items-center gap-2"
          >
            <Trophy className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Achievements</h3>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div key={index} variants={item} whileHover={{ scale: 1.05 }}>
                  <Card className="transition-all hover:shadow-lg h-full">
                    <CardHeader>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="mb-2 inline-flex rounded-lg bg-primary/10 p-2 w-fit"
                      >
                        <Icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <p className="text-sm font-medium text-primary">
                        {achievement.organization}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-8 flex items-center gap-2"
          >
            <Award className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-3 rounded-lg border bg-card p-4 transition-all hover:shadow-md cursor-default"
              >
                <div className="rounded-full bg-primary/10 p-2">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium">{cert}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}