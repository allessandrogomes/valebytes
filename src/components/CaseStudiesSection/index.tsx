import { FaArrowRight } from "react-icons/fa";
import TitleSubtitle from "../TitleSubtitle";
import CardCaseStudies from "./CardCaseStudies";

export default function CaseStudiesSection() {
    return (
        <section className="flex flex-col items-center gap-[100px] w-full max-580:w-[80%] mb-[100px]">
            <TitleSubtitle title="Principais projetos" subtitle="Nossos trabalhos descrevem porque somos os melhores no ramo" />
            <div className="flex flex-wrap justify-center gap-[50px] w-[80%]">
                <CardCaseStudies
                    height={500}
                    image="/images/psicologia.png"
                    title="Desenvolvimento Web"
                    subtitle="Página Institucional"
                />
                <CardCaseStudies
                    height={300}
                    image="/images/erp.png"
                    title="Desenvolvimento de Software"
                    subtitle="Sistema de Gestão Empresarial"
                />
                <CardCaseStudies
                    height={300}
                    image="/images/landing-page.png"
                    title="Desenvolvimento Web"
                    subtitle="Landing Page"
                />
                <CardCaseStudies
                    height={500}
                    image="/images/mobile-web.jpg"
                    title="Desenvolvimento Web"
                    subtitle="Cardápio Mobile Online"
                    bgPositionX={-60}
                />
            </div>
            {/* <button className="text-xl text-primary flex gap-4 items-center font-bold">See all works <FaArrowRight /></button> */}
        </section>
    )
}