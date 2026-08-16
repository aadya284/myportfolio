import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ResumeSection } from "@/components/resume-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground bg-dot-pattern">
      <Navigation />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ResumeSection />
        <ContactSection />
      </main>
    </div>
  )
}