import 'swiper/css'
import 'swiper/css/effect-coverflow'
import Image from 'next/image'

export default function IntroSection() {
    return (
        <section className="w-full max-w-full h-full pt-[200px] mb-[200px] md:mb-[250px] flex justify-start md:pt-[250px] xl:justify-around" id="inicio">
            <div className="max-w-[792px] text-center md:text-start px-4 sm:px-8 md:px-[50px] lg:px-0 lg:pl-[100px] md:ml-[50px] xl:ml-0">
                <h1 className="leading-[40px] capitalize font-semibold xl:leading-[90px] text-4xl sm:text-6xl md:text-7xl"><span className="text-color3">Código Personalizado</span>,<br /> Sem Genéricos</h1>
                <h2 className="mt-6 text-xl sm:text-2xl">Soluções Exclusivas com Código Personalizado:<br />Levantamento Rigoroso, Alta Performance, Tecnologia de Ponta e SEO Otimizado</h2>
            </div>
            <Image className="hidden relative bottom-[70px] xl:block" src="/images/intro.webp" width={500} height={200} alt="Imagem Início" />
        </section>
    )
} 