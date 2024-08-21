import { A11y, Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import Image from 'next/image'

export default function IntroSection() {
    return (
        <section className="flex justify-start w-full max-w-full h-full mb-[50px] pt-[120px] px-[50px] lg:pt-[16%] xl:justify-around" id="inicio">
            <div className="max-w-[792px] text-center md:text-start md:ml-[50px] xl:ml-0">
                <h1 className="leading-[40px] text-[2rem] capitalize font-semibold md:leading-[90px] md:text-[4.5rem]"><span className="text-tertiary">Código Personalizado</span>,<br/> Sem Genéricos</h1>
                <h2 className="mt-6 text-[1.25rem] md:text-[1.5rem]">Soluções Exclusivas com Código Personalizado:<br/>Levantamento Rigoroso, Alta Performance, Tecnologia de Ponta e SEO Otimizado</h2>
            </div>
            <Image className="hidden relative bottom-[70px] xl:block" src="/images/intro.webp" width={500} height={200} alt="Imagem Início"/>
        </section>
    )
} 