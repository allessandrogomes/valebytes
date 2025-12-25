"use client";

import { HeaderSection } from "../HeaderSection";
import { SectionLayout } from "../SectionLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { IImage } from "./Image";
import { Slide } from "./Slide";

const websites: IImage[] = [
  {
    src: "/portfolio/neto-baterias.png",
    alt: "Neto Baterias Website",
    title: "Neto Baterias Website",
    href: "https://netobaterias.com.br",
  },
  {
    src: "/portfolio/sol-renova.png",
    alt: "Sol Renova Website",
    title: "Sol Renova Website",
    href: "https://solrenova.vercel.app",
  },
  {
    src: "/portfolio/psico.png",
    alt: "Psicóloga Website",
    title: "Psicóloga Website",
    href: "https://psichoana.vercel.app/",
  },
  {
    src: "/portfolio/raylaw.png",
    alt: "Advocacia Website",
    title: "Advocacia Website",
    href: "https://raylaw.vercel.app/",
  },
];

export function Portfolio() {
  return (
    <SectionLayout id="portfolio">
      <HeaderSection
        title="Portfólio"
        subtitle="Uma seleção dos sites que desenvolvemos do zero — cada um com identidade própria, criado para destacar o que torna cada negócio único"
      />

      <div>
        <Swiper
          modules={[Autoplay, EffectFade, Virtual]}
          allowTouchMove={false}
          centeredSlides
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          preventClicks={false}
          preventClicksPropagation={false}
        >
          {websites.map((item, index) => (
            <SwiperSlide key={item.alt} virtualIndex={index}>
              <Slide item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionLayout>
  );
}
