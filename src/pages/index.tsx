import IntroSection from "@/components/IntroSection"
import OurServicesSection from "@/components/OurServicesSection"

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <IntroSection />
            <OurServicesSection />
        </div>
    )
}