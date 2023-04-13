import css from "styled-jsx/css";

export default css.global`
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
`;
