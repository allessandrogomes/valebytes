import { A11y, Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import Image from 'next/image'

export default function ProjectsSection() {
    return (
        <section className="w-full max-w-full overflow-x-hidden mb-[200px] pt-[100px] md:pt-[13%]" id="projetos">
            <div className="w-full max-w-full flex flex-col items-center gap-[50px]">
                <h2 className="text-center text-xl mb-4 font-medium px-[30px] xl:px-0 md:text-4xl">Conheça alguns dos <span className="text-tertiary font-semibold">Projetos</span> desenvolvidos pela <span className="text-tertiary font-semibold">ValeBytes</span></h2>
                <div id="projects-swiper" className="hidden -mx-[50px] sm:block">
                    <Swiper
                        modules={[Autoplay, A11y, EffectCoverflow]}
                        slidesPerView={3}
                        loop
                        spaceBetween={30}
                        centeredSlides={true}
                        effect='coverflow'
                        speed={900}
                        autoplay={{ delay: 2000 }}
                    >
                        <SwiperSlide><Image width={600} height={0} src="/images/energia-solar-banner.webp" alt="Banner" /></SwiperSlide>
                        <SwiperSlide><Image width={600} height={0} src="/images/energia-solar-banner.webp" alt="Banner" /></SwiperSlide>
                        <SwiperSlide><Image width={600} height={0} src="/images/energia-solar-banner.webp" alt="Banner" /></SwiperSlide>
                        <SwiperSlide><Image width={600} height={0} src="/images/energia-solar-banner.webp" alt="Banner" /></SwiperSlide>
                        <SwiperSlide><Image width={600} height={0} src="/images/energia-solar-banner.webp" alt="Banner" /></SwiperSlide>
                        <SwiperSlide><Image width={600} height={0} src="/images/energia-solar-banner.webp" alt="Banner" /></SwiperSlide>
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
                        <SwiperSlide><Image width={700} height={0} src="/images/energia-solar-banner.webp" alt="Banner" /></SwiperSlide>
                        <SwiperSlide><Image width={700} height={0} src="/images/energia-solar-banner.webp" alt="Banner" /></SwiperSlide>
                        <SwiperSlide><Image width={700} height={0} src="/images/energia-solar-banner.webp" alt="Banner" /></SwiperSlide>
                        <SwiperSlide><Image width={700} height={0} src="/images/energia-solar-banner.webp" alt="Banner" /></SwiperSlide>
                        <SwiperSlide><Image width={700} height={0} src="/images/energia-solar-banner.webp" alt="Banner" /></SwiperSlide>
                        <SwiperSlide><Image width={700} height={0} src="/images/energia-solar-banner.webp" alt="Banner" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}