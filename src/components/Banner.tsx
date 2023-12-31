import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { styled } from "styled-components";

const Banner = () => {
  const bannerSettings = {
    spaceBetween: 30,
    modules: [Autoplay, Pagination, Navigation],
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };
  return (
    <BannerContainer>
      <Swiper {...bannerSettings}>
        <SwiperSlide>
          <img
            className="banner"
            src="/assets/png/banner-euilee.png"
            alt="배너"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner" src="/assets/png/banner-do0.png" alt="배너" />
        </SwiperSlide>
      </Swiper>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  .banner {
    width: 340px;
    height: 85px;
    border-radius: 10px;
  }
`;
