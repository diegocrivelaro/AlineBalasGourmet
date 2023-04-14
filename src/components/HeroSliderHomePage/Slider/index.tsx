"use client";

import { memo } from "react";

import Image from "next/image";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
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
    <>
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
      </div>
      <style>
        {`
          .swiper {
            width: 100%;
            height: 100%;
            border-radius: inherit;
          }

          .swiper-button-prev,
          .swiper-button-next {
            display: none;
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

          @media (min-width: 768px) {
            .swiper-button-prev,
            .swiper-button-next {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 3.8rem !important;
              height: 3.8rem !important;
              border-radius: 50%;
              background: var(--grey-15);
            }

            .swiper-button-prev:after,
            .swiper-button-next:after {
              font-size: 2.2rem;
              font-weight: 900;
              color: var(--white);
            }

            .swiper-button-prev:after {
              transform: translateX(-0.2rem);
            }

            .swiper-button-next:after {
              transform: translateX(0.2rem);
            }
          }
        `}
      </style>
    </>
  );
}

export default memo(Slider);
