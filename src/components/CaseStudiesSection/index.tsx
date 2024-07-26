import { FaArrowRight } from "react-icons/fa";
import TitleSubtitle from "../TitleSubtitle";
import CardCaseStudies from "./CardCaseStudies";

export default function CaseStudiesSection() {
    return (
        <section className="flex flex-col items-center gap-[100px] w-full max-580:w-[80%]">
            <TitleSubtitle title="Case Studies" subtitle="Our works describe why we are the best in the business" />
            <div className="flex flex-wrap justify-center gap-[50px] w-[80%]">
                <CardCaseStudies
                    height={500}
                    image="/images/aura-bg.png"
                    title="Graphic Design"
                    subtitle="Aura Branding Design"
                />
                <CardCaseStudies
                    height={300}
                    image="/images/snack.png"
                    title="AB.S Snack Packaging"
                    subtitle="Aura Branding Design"
                />
                <CardCaseStudies
                    height={300}
                    image="/images/gradient-website.png"
                    title="Web Development"
                    subtitle="Gradient Website Development"
                />
                <CardCaseStudies
                    height={500}
                    image="/images/magazine-content.png"
                    title="Content Writing"
                    subtitle="Magazine Content Writing"
                />
            </div>
            <button className="text-xl text-primary flex gap-4 items-center font-bold">See all works <FaArrowRight /></button>
        </section>
    )
}