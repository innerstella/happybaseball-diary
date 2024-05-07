import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { styled } from "styled-components";

const Banner = () => {
  const bannerSettings = {
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
          <BannerImg src="/assets/png/banner-euilee.png" alt="배너" />
        </SwiperSlide>
        <SwiperSlide>
          <BannerImg src="/assets/png/banner-do0.png" alt="배너" />
        </SwiperSlide>
      </Swiper>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  padding-left: 20px;
`;

const BannerImg = styled.img`
  width: 340px;
  height: 85px;
  border-radius: 10px;
`;
