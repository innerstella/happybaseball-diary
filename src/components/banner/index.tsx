import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const bannerSettings = {
    modules: [Autoplay, Pagination, Navigation],
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  const BANNER_LIST = [
    {
      id: 1,
      src: "/assets/banner/banner-weather.png",
      alt: "구장별 날씨 정보",
      link: "/weather",
    },
    {
      id: 2,
      src: "/assets/banner/banner-euilee.png",
      alt: "배너",
    },
    {
      id: 3,
      src: "/assets/banner/banner-do0.png",
      alt: "배너",
    },
  ];
  return (
    <BannerContainer>
      <Swiper {...bannerSettings}>
        {BANNER_LIST.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
              <BannerImg
                src={banner.src}
                alt={banner.alt}
                onClick={() => banner.link && navigate(banner.link)}
              />
            </SwiperSlide>
          );
        })}
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
