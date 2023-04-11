"use client";

import { memo } from "react";

import Image from "next/image";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./styles.module.css";

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
      <Swiper pagination modules={[Pagination]}>
        {sliderItems.map(item => (
          <SwiperSlide
            key={typeof crypto !== `undefined` && crypto.randomUUID()}>
            <Image
              src={item.src}
              alt={item.alt}
              title={item.title}
              width={100}
              height={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          .swiper {
            width: 100%;
            height: 100%;
          }

          .swiper-pagination-bullet {
            padding: 0.6rem;
            background-color: transparent;
            border: 0.3rem solid var(--brow-25);
            opacity: 1;
          }

          .swiper-pagination-bullet-active {
            background-color: var(--brow-25);
          }
        `}
      </style>
    </div>
  );
}

export default memo(Slider);
