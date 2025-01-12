'use client'

import { A11y, Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import Image from 'next/image'

export default function ProjectsSection() {
    return (
        <section className="w-full max-w-full overflow-x-hidden mb-[150px] md:mb-[250px]" id="projetos">
            <div className="w-full max-w-full flex flex-col items-center gap-[50px]">
                <h2 className="text-center mb-4 font-medium px-[30px] xl:px-0 text-3xl sm:text-4xl md:text-5xl">Conheça alguns dos <span className="text-color3 font-semibold">Projetos</span> desenvolvidos pela <span className="text-color3 font-semibold">ValeBytes</span></h2>
                <div id="projects-swiper" className="hidden -mx-[50px] sm:block">
                    <Swiper
                        modules={[Autoplay, A11y, EffectCoverflow]}
                        slidesPerView={2}
                        loop
                        spaceBetween={30}
                        centeredSlides
                        effect='coverflow'
                        speed={900}
                        autoplay={{ delay: 2000 }}
                        grabCursor
                    >
                        <SwiperSlide><a href="https://psichoana.vercel.app" target="_blank"><Image width={1599} height={847} src="/images/psicho.png" alt="Banner Psicho" /></a></SwiperSlide>
                        <SwiperSlide><a href="https://solrenova.vercel.app" target="_blank"><Image width={1599} height={850} src="/images/solrenova.png" alt="Banner SolRenova Empresa de Energia Solar" /></a></SwiperSlide>
                        <SwiperSlide><a href="https://raylaw.vercel.app" target="_blank"><Image width={1599} height={850} src="/images/raylaw.png" alt="Banner Raylaw" /></a></SwiperSlide>
                        <SwiperSlide><a href="https://solrenova.vercel.app" target="_blank"><Image width={1599} height={850} src="/images/solrenova-1.png" alt="Banner SolRenova" /></a></SwiperSlide>
                        <SwiperSlide><a href="https://psichoana.vercel.app" target="_blank"><Image width={1599} height={850} src="/images/psicho-1.png" alt="Banner SolRenova" /></a></SwiperSlide>
                        <SwiperSlide><a href="https://raylaw.vercel.app" target="_blank"><Image width={1599} height={850} src="/images/raylaw-1.png" alt="Banner SolRenova" /></a></SwiperSlide>
                    </Swiper>
                </div>
                <div className="w-full sm:hidden">
                    <Swiper
                        modules={[Autoplay, A11y]}
                        slidesPerView={1}
                        loop
                        centeredSlides={true}
                        speed={900}
                        autoplay={{ delay: 2000 }}
                    >
                        <SwiperSlide><Image width={1599} height={847} src="/images/psicho.png" alt="Banner Psicho" /></SwiperSlide>
                        <SwiperSlide><Image width={1599} height={850} src="/images/solrenova.png" alt="Banner SolRenova Empresa de Energia Solar" /></SwiperSlide>
                        <SwiperSlide><Image width={1599} height={850} src="/images/raylaw.png" alt="Banner Raylaw" /></SwiperSlide>
                        <SwiperSlide><Image width={1599} height={850} src="/images/solrenova-1.png" alt="Banner SolRenova" /></SwiperSlide>
                        <SwiperSlide><Image width={1599} height={850} src="/images/psicho-1.png" alt="Banner SolRenova" /></SwiperSlide>
                        <SwiperSlide><Image width={1599} height={850} src="/images/raylaw-1.png" alt="Banner SolRenova" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}