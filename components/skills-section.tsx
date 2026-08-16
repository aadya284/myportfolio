"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Layout, Server, Wrench } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const baseCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "Google Cloud Platform"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "Data Structures in C++", "Python", "SQL"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Git/Github", "VS Code", "PowerBI", "Cursor", "Agile/Scrum", "Tableau"],
  },
  {
    title: "Data Analytics",
    icon: Database,
    skills: ["Data Visualization Tools", "Numpy", "Pandas", "Excel", "Basic Statistics"],
  },
]

// Tripled array for seamless infinite circular loop scrolling
const infiniteCategories = [
  ...baseCategories,
  ...baseCategories,
  ...baseCategories,
]

export function SkillsSection() {
  const ref = useRef(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeRealIndex, setActiveRealIndex] = useState(0)
  const [focusedGlobalIndex, setFocusedGlobalIndex] = useState(baseCategories.length)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Mouse drag support for desktop swiping
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsMouseDown(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsMouseDown(false)
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const scrollToGlobalIndex = (globalIdx: number, behavior: ScrollBehavior = "smooth") => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const card = container.children[globalIdx] as HTMLElement
    if (card) {
      const containerCenter = container.offsetWidth / 2
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const scrollTarget = cardCenter - containerCenter
      container.scrollTo({ left: scrollTarget, behavior })
    }
  }

  const handleScroll = () => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const containerCenter = container.scrollLeft + container.offsetWidth / 2

    let closestIndex = 0
    let minDistance = Infinity

    Array.from(container.children).forEach((child, index) => {
      const card = child as HTMLElement
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(containerCenter - cardCenter)
      if (distance < minDistance) {
        minDistance = distance
        closestIndex = index
      }
    })

    setFocusedGlobalIndex(closestIndex)
    setActiveRealIndex(closestIndex % baseCategories.length)

    // Infinite loop boundary reset
    const total = infiniteCategories.length
    const count = baseCategories.length

    if (closestIndex < 2) {
      scrollToGlobalIndex(closestIndex + count, "instant" as ScrollBehavior)
    } else if (closestIndex >= total - 2) {
      scrollToGlobalIndex(closestIndex - count, "instant" as ScrollBehavior)
    }
  }

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollToGlobalIndex(baseCategories.length, "instant" as ScrollBehavior)
    }
  }, [])

  return (
    <section id="skills" className="container px-4 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black dark:text-[#AE88E8]">
              Skills & Technologies
            </h2>
            <p className="text-lg text-slate-800 dark:text-slate-300 font-medium">
              Technologies and tools I work with
            </p>
          </motion.div>
        </div>

        {/* Infinite Circular Swipeable & Mouse Draggable Horizontal Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-center scroll-smooth py-8 px-[15vw] sm:px-[25vw] md:px-[30vw] items-center cursor-grab active:cursor-grabbing select-none"
        >
          {infiniteCategories.map((category, globalIndex) => {
            const Icon = category.icon
            const isFocused = globalIndex === focusedGlobalIndex

            return (
              <motion.div
                key={globalIndex}
                onClick={() => scrollToGlobalIndex(globalIndex)}
                className={cn(
                  "w-[300px] sm:w-[360px] h-[250px] shrink-0 snap-center transition-all duration-300 transform",
                  isFocused
                    ? "scale-105 opacity-100 z-10"
                    : "scale-90 opacity-60 hover:opacity-85"
                )}
              >
                <Card
                  className={cn(
                    "h-full rounded-2xl border border-black/10 dark:border-white/20 flex flex-col justify-between transition-all duration-300",
                    isFocused
                      ? "shadow-[0_14px_40px_rgba(174,136,232,0.45)] ring-4 ring-[#AE88E8] border-[#AE88E8] bg-white dark:bg-white/20 backdrop-blur-2xl"
                      : "shadow-md bg-white dark:bg-white/5 backdrop-blur-2xl"
                  )}
                >
                  <CardContent className="p-6 flex flex-col h-full justify-between">
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-xl p-2.5 bg-[#AE88E8] text-black shadow-md shrink-0">
                          <Icon className="h-6 w-6 text-black" />
                        </div>
                        <h3 className="font-extrabold text-lg sm:text-xl text-black dark:text-[#AE88E8] truncate">
                          {category.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1 max-h-[140px] overflow-y-auto no-scrollbar">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={cn(
                              "rounded-full px-3 py-1 text-xs sm:text-sm font-semibold transition-colors duration-300",
                              isFocused
                                ? "bg-[#AE88E8]/30 text-black dark:text-white border border-[#AE88E8]/60 shadow-xs"
                                : "bg-black/5 dark:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/20"
                            )}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Pagination Pill Dots */}
        <div className="mt-4 flex justify-center items-center gap-2">
          {baseCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToGlobalIndex(baseCategories.length + index)}
              aria-label={`Go to skill slide ${index + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                index === activeRealIndex
                  ? "w-8 bg-black dark:bg-[#AE88E8] shadow-md"
                  : "w-2.5 bg-black/20 dark:bg-white/30 hover:bg-black/40 dark:hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}