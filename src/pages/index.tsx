import CaseStudiesSection from "@/components/CaseStudiesSection"
import Footer from "@/components/Footer"
import IntroSection from "@/components/IntroSection"
import OurServicesSection from "@/components/OurServicesSection"
import WhyChooseUsSection from "@/components/WhyChooseUsSection"

export default function Home() {
    return (
        <div className="flex flex-col items-center gap-[100px]">
            <IntroSection />
            <OurServicesSection />
            <WhyChooseUsSection />
            <CaseStudiesSection />
        </div>
    )
}