import css from "styled-jsx/css";

export default css.global`
  .swiper {
    width: 100%;
    height: 100%;
    border-radius: inherit;
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
`;
