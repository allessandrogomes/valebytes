import TitleSubtitle from "../TitleSubtitle"
import CardOurServices from "./CardOurServices"

export default function OurServicesSection() {
    return (
        <section className="flex flex-col gap-[100px] items-center relative w-full max-580:px-[40px]">
            <TitleSubtitle title="Nossos serviços" subtitle="Oferecemos ótimos serviços para nossos clientes com base nas necessidades" />
            <div className="flex gap-8 flex-wrap justify-center w-[90%]">
                <CardOurServices
                    image="/images/designer-rafiki.png"
                    title="Desenvolvimento de Software"
                    subtitle="Soluções sob medida para automatizar e otimizar seus processos empresariais."
                    color="bg-green-400"
                    alt="Imagem ilustrativa Designer"
                />
                <CardOurServices
                    image="/images/programming-rafiki.png"
                    title="Desenvolvimento Web"
                    subtitle="Sites modernos e responsivos que destacam sua marca e atraem clientes."
                    color="bg-indigo-700"
                    alt="Imagem ilustrativa Designer"
                />
                <CardOurServices
                    image="/images/notes-rafiki.png"
                    title="Levantamento de Requisitos"
                    subtitle="Entendemos suas necessidades para garantir um desenvolvimento preciso e eficaz."
                    color="bg-red-500"
                    alt="Imagem ilustrativa Designer"
                    draw
                />
            </div>
        </section>
    )
}