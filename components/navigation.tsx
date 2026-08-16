"use client"

import * as React from "react"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("home")

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Achievements", href: "#achievements", id: "achievements" },
    { label: "Resume", href: "#resume", id: "resume" },
    { label: "Contact", href: "#contact", id: "contact" },
  ]

  React.useEffect(() => {
    // Handle initial hash scroll if present
    if (window.location.hash) {
      const targetId = window.location.hash.replace("#", "")
      const element = document.getElementById(targetId)
      if (element) {
        setTimeout(() => {
          const yOffset = -90
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: "smooth" })
          setActiveSection(targetId)
        }, 100)
      }
    }

    const handleScroll = () => {
      const sectionIds = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 180

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const yOffset = -90
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
      setActiveSection(targetId)
      window.history.pushState(null, "", href)
    }
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-4 px-4 py-2 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-2xl border border-white/90 dark:border-white/15 shadow-lg shadow-black/5 transition-all duration-300 max-w-4xl w-full text-black dark:text-white">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center space-x-2 px-3 py-1 rounded-full hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
        >
          <span className="text-base font-extrabold tracking-tight text-black dark:text-white">
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation Pills */}
        <div className="hidden md:flex md:items-center md:gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200",
                  isActive
                    ? "bg-[#AE88E8] text-black shadow-sm font-extrabold"
                    : "text-black/90 dark:text-white/90 hover:text-black dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10"
                )}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        {/* Theme Toggle & Mobile Menu Trigger */}
        <div className="flex items-center gap-1.5 text-black dark:text-white">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full h-8 w-8 text-black dark:text-white hover:bg-white/50 dark:hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown Pill */}
      {isOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 max-w-sm mx-auto rounded-3xl bg-white/90 dark:bg-black/80 backdrop-blur-2xl border border-white/90 dark:border-white/15 p-3 shadow-xl md:hidden flex flex-col gap-1 z-50 text-black dark:text-white">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-colors text-left",
                  isActive
                    ? "bg-[#AE88E8] text-black font-extrabold shadow-sm"
                    : "text-black dark:text-white hover:bg-white/60 dark:hover:bg-white/10"
                )}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      )}
    </header>
  )
}