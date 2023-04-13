"use client";

import { memo } from "react";

import Image from "next/image";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./styles.module.css";
import stylesGlobal from "./stylesGlobal";

interface SliderProps {
  sliderItems: {
    src: string;
    alt: string;
    title: string;
  }[];
}

function Slider({ sliderItems }: SliderProps) {
  return (
    <div className={styles.sliderContainer}>
      <Swiper navigation pagination modules={[Navigation, Pagination]}>
        {sliderItems.map(item => (
          <SwiperSlide
            key={typeof crypto !== `undefined` && crypto.randomUUID()}>
            <Image
              src={item.src}
              alt={item.alt}
              title={item.title}
              priority
              unoptimized
              width={100}
              height={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{stylesGlobal}</style>
    </div>
  );
}

export default memo(Slider);
