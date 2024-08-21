import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import DifferencesSection from "@/components/DifferencesSection"
import IntroSection from "@/components/IntroSection"
import ProjectsSection from "@/components/ProjectsSection"

export default function Home() {
    return (
        <div className="flex max-w-full flex-col items-center">
            <IntroSection />
            <ProjectsSection />
            <DifferencesSection />
            <AboutSection />
            <ContactSection />
        </div>
    )
}