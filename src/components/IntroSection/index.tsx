/* eslint-disable @next/next/no-img-element */
import 'swiper/css'
import 'swiper/css/effect-coverflow'

export default function IntroSection() {
    return (
        <section className="w-full max-w-full h-full pt-[200px] mb-[200px] md:mb-[250px] flex justify-start md:pt-[250px] xl:justify-around" id="inicio">
            <div className="max-w-[792px] text-center md:text-start px-4 sm:px-8 md:px-[50px] lg:px-0 lg:pl-[100px] md:ml-[50px] xl:ml-0">
                <h1 className="leading-[40px] font-semibold text-4xl sm:text-6xl md:text-7xl">
                    Criação de <span className="text-color3">Sites Profissionais</span> em Petrolina e Juazeiro
                </h1>
                <h2 className="mt-6 text-xl sm:text-3xl">Destaque Sua Empresa na Internet com um Site Profissional e Moderno</h2>
            </div>
            <img className="hidden relative bottom-[70px] w-[500px] xl:block" src="/images/intro.webp" alt="Imagem ilustrativa de um notebook" title="Imagem ilustrativa de um notebook"/>
        </section>
    )
} 