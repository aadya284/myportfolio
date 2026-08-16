"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "KarigarSetu",
    description: "A full Fledged E-Commerce Platform With AI Integration designed especially for Local Artisans in India to increase there market reach.",
    image: "/projects/karigarsetu.jpg",
    technologies: ["Next.js", "Node.js", "Firebase", "GCP"],
    githubUrl: "https://github.com/aadya284/artisan-marketplace",
    liveUrl: "https://artisan-marketplace-omega.vercel.app/",
  },
  {
    title: "PolicyBrain",
    description: "Developed a LLM Model designed for analyzing and retrieving important information from legal policy documents to aid in compliance and decision-making processes.",
    image: "/projects/policybrain.jpg",
    technologies: ["React", "Gemini", "Node.js", "Docker"],
    githubUrl: "https://github.com/aadya284/Policy-Brain",
    liveUrl:"https://project2.example.com"
  },
  {
    title: "LeetVisual",
    description: "An interactive platform that visualizes leetcode problems and their solutions to enhance understanding and learning for developers.",
    image: "/projects/LeetVisual.jpg",
    technologies: ["React.js","Node.js", "RapidAPI", "TypeScript"],
    githubUrl: "https://github.com/aadya284/leetcode-visualizer",
    liveUrl:"https://leetcode-visualizer-theta.vercel.app/"
  },
  {
    title: "Netflix Content Analytics",
    description: "Data analytics dashboard providing insights into Netflix content performance and viewr engagement trends.",
    image: "/projects/netflix-analytics.jpg",
    technologies: ["Python", "Pandas", "PowerBI", "Matplotlib"],
    githubUrl: "https://github.com/aadya284/Netflix-Content-Analysis",
    liveUrl: "https://project4.example.com",
  },
  {
    title: "Real Estate AI",
    description: "AI-Powered Real Estate Platform for Property Management and Market Analysis with the hlp of charts and graphs.",
    image: "/projects/RealEstateAI.jpg",
    technologies: ["Python", "Django", "Next.js", "Bootstrap","Gemini 2.5 Flash","Vercel"],
    githubUrl: "https://github.com/aadya284/RealEstateAI",
    liveUrl: "https://real-estate-ai-d2rl.vercel.app/",
  },
  {
    title: "My Portfolio",
    description: "A personal portfolio website to showcase my projects, skills, and achievements.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "Node.js", "Tailwind CSS", "VS Code","Vercel"],
    githubUrl: "https://github.com/aadya284/myportfolio",
    liveUrl: "https://aadyaparadkar.vercel.app/",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="container px-4 py-24 md:py-32 bg-muted/30" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black dark:text-[#AE88E8]">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-800 dark:text-slate-300 font-medium">
            Some of the projects I've worked on
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item} whileHover={{ y: -8 }}>
              <Card className="flex flex-col overflow-hidden pt-0 transition-all hover:shadow-lg h-full">
                <div className="relative aspect-video w-full overflow-hidden border-b border-black/10">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="dark:bg-white/10 dark:text-white dark:border dark:border-white/10 font-semibold">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="outline" size="sm" asChild className="flex-1 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/15">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1 bg-[#AE88E8] text-black font-bold hover:bg-[#AE88E8]/80">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}