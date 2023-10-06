import PropTypes from "prop-types";
import clsx from "clsx";
import { EffectFade } from 'swiper';
import Swiper, { SwiperSlide } from "../../components/swiper";
// import sliderData from "../../data/hero-sliders/hero-slider-physical.json";
import sliderData from "../../data/hero-sliders/hero-slider-social-new.json";
import HeroSliderPhysicalSingle from "../../components/hero-slider/HeroSliderPhysicalSingle";
import HeroSliderSocialNewSingle from "../../components/hero-slider/HeroSliderSocialNewSingle";

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  navigation: true,
  autoHeight: false
};

const HeroSliderSocialwellness = ({ spaceLeftClass, spaceRightClass }) => {
  return (
    <div className={clsx("slider-area", spaceLeftClass, spaceRightClass)}>
      <div className="slider-active nav-style-1">
        {sliderData && (
          <Swiper options={params}>
            {sliderData.map((single, key) => (
              <SwiperSlide key={key}>
                <HeroSliderSocialNewSingle
                  data={single}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

HeroSliderSocialwellness.propTypes = {
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default HeroSliderSocialwellness;