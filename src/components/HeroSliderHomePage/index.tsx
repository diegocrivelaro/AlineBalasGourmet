import { memo } from "react";

import Slider from "@/components/HeroSliderHomePage/Slider";

import { sliderItems } from "@/static/constants";

import styles from "./styles.module.css";

function HeroSliderHomePage() {
  return (
    <div className={styles.heroSliderHomePageContainer}>
      <Slider sliderItems={sliderItems} />
    </div>
  );
}

export default memo(HeroSliderHomePage);
