/* eslint-disable @next/next/no-img-element */
'use client'

import { A11y, Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

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
                        <SwiperSlide><a href="https://netobaterias.com.br" title="Site Neto Bateroias" target="_blank"><img className="w-full h-full" src="/images/netobaterias.webp" alt="Imagem do site Neto Baterias" title="Imagem do site Neto Baterias"/></a></SwiperSlide>
                        <SwiperSlide><a href="https://psichoana.vercel.app" title="Site da Psicóloga Ana Martins" target="_blank"><img className="w-full h-full" src="/images/psicho.webp" alt="Imagem do site Psicóloga Ana Martins" title="Imagem do site Psicóloga Ana Martins"/></a></SwiperSlide>
                        <SwiperSlide><a href="https://solrenova.vercel.app" title="Site da empresa SolRenova" target="_blank"><img className="w-full h-full" src="/images/solrenova.webp" alt="Imagem do site SolRenova" title="Imagem do site SolRenova"/></a></SwiperSlide>
                        <SwiperSlide><a href="https://raylaw.vercel.app" title="Site da empresa de advocacia Raylaw" target="_blank"><img className="w-full h-full" src="/images/raylaw.webp" alt="Imagem do site de advocacia Raylaw" title="Imagem do site de advocacia Raylaw"/></a></SwiperSlide>
                        <SwiperSlide><a href="https://solrenova.vercel.app" title="Site da empresa SolRenova" target="_blank"><img className="w-full h-full" src="/images/solrenova-1.webp" alt="Banner SolRenova" title="Imagem do site SolRenova"/></a></SwiperSlide>
                        <SwiperSlide><a href="https://psichoana.vercel.app" title="Site da Psicóloga Ana Martins" target="_blank"><img className="w-full h-full" src="/images/psicho-1.webp" alt="Imagem do site Psicóloga Ana Martins" title="Imagem do site Psicóloga Ana Martins"/></a></SwiperSlide>
                        <SwiperSlide><a href="https://raylaw.vercel.app" title="Site da empresa de advocacia Raylaw" target="_blank"><img className="w-full h-full" src="/images/raylaw-1.webp" alt="Imagem do site de advocacia Raylaw" title="Imagem do site de advocacia Raylaw"/></a></SwiperSlide>
                    </Swiper>
                </div>
                <div className="w-full sm:hidden">
                    <Swiper
                        modules={[Autoplay, A11y, Pagination]}
                        slidesPerView={1}
                        loop
                        centeredSlides={true}
                        pagination
                        speed={900}
                        autoplay={{ delay: 2000 }}
                    >
                        <SwiperSlide><a href="https://netobaterias.com.br" title="Site Neto Baterias" target="_blank"><img style={{ width: "90%", display: "block", margin: "0 auto" }} className="w-full h-full" src="/images/netobaterias.webp" alt="Imagem do site Neto Baterias" title="Imagem do site Neto Baterias"/></a></SwiperSlide>
                        <SwiperSlide><a href="https://psichoana.vercel.app" title="Site da Psicóloga Ana Martins" target="_blank"><img style={{ width: "90%", display: "block", margin: "0 auto" }} className="w-full h-full" src="/images/psicho.webp" alt="Imagem do site Psicóloga Ana Martins" title="Imagem do site Psicóloga Ana Martins"/></a></SwiperSlide>
                        <SwiperSlide><a href="https://solrenova.vercel.app" title="Site da empresa SolRenova" target="_blank"><img style={{ width: "90%", display: "block", margin: "0 auto" }} className="w-full h-full" src="/images/solrenova.webp" alt="Imagem do site SolRenova" title="Imagem do site SolRenova"/></a></SwiperSlide>
                        <SwiperSlide><a href="https://raylaw.vercel.app" title="Site da empresa de advocacia Raylaw" target="_blank"><img style={{ width: "90%", display: "block", margin: "0 auto" }} className="w-full h-full" src="/images/raylaw.webp" alt="Imagem do site de advocacia Raylaw" title="Imagem do site de advocacia Raylaw"/></a></SwiperSlide>
                        <SwiperSlide><a href="https://solrenova.vercel.app" title="Site da empresa SolRenova" target="_blank"><img style={{ width: "90%", display: "block", margin: "0 auto" }} className="w-full h-full" src="/images/solrenova-1.webp" alt="Imagem do site SolRenova" title="Imagem do site SolRenova"/></a></SwiperSlide>
                        <SwiperSlide><a href="https://psichoana.vercel.app" title="Site da Psicóloga Ana Martins" target="_blank"><img style={{ width: "90%", display: "block", margin: "0 auto" }} className="w-full h-full" src="/images/psicho-1.webp" alt="Imagem do site Psicóloga Ana Martins"  title="Imagem do site Psicóloga Ana Martins"/></a></SwiperSlide>
                        <SwiperSlide><a href="https://raylaw.vercel.app" title="Site da empresa de advocacia Raylaw" target="_blank"><img style={{ width: "90%", display: "block", margin: "0 auto" }} className="w-full h-full" src="/images/raylaw-1.webp" alt="Imagem do site de advocacia Raylaw" title="Imagem do site de advocacia Raylaw"/></a></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}