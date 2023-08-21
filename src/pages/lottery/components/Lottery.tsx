import { styled } from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import lotteryList from "../../../data/lottery.json";
import { useEffect, useState } from "react";

type LotteryProps = {
  id: number;
  title: string;
  desc: string;
};

const Lottery = () => {
  // swiper setting
  const settings = {
    effect: "flip",
    grabCursor: true,
    pagination: false,
    navigation: false,
    modules: [EffectFlip, Pagination, Navigation],
  };

  // 복권 데이터
  const [lotteryData, setLotteryData] = useState<LotteryProps>();
  useEffect(() => {
    const lottery = makeLottery();
    setLotteryData(lottery);
  }, []);

  const makeLottery = () => {
    const lotteryListLength = lotteryList.length;
    const randomNum = Math.floor(Math.random() * lotteryListLength + 1);
    const lottery = lotteryList[randomNum - 1];
    return lottery;
  };

  // 다시 뽑기
  const onClickRetry = () => {
    window.location.reload();
  };

  // 공유하기
  const onClickShare = () => {
    const header = "[야구 행운 복권 🍀]";
    const text = lotteryData?.title;
    const url = "https://twitter-michelin.web.app/";
    window.open(
      `https://twitter.com/intent/tweet?text=${header} 오늘은 "${text}"&url=${url}`
    );
  };

  return (
    <LotteryContainer>
      <motion.div
        initial={{ y: "0px" }}
        animate={{
          y: "10px",
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Swiper {...settings} className="swiper">
          <SwiperSlide className="box-1">
            <img
              className="lottery-img"
              src="/assets/lottery.png"
              alt="행운복권"
            />
          </SwiperSlide>
          <SwiperSlide className="box-2">
            <p className="title">{lotteryData?.title}</p>
            <p className="desc">{lotteryData?.desc}</p>
          </SwiperSlide>
        </Swiper>
      </motion.div>
      <div className="margin100"></div>
      <ButtonContainer>
        <div className="btn" onClick={onClickRetry}>
          다시 뽑기
        </div>
        <div className="btn" onClick={onClickShare}>
          트위터로 공유하기
        </div>
      </ButtonContainer>
      <div className="margin120"></div>
    </LotteryContainer>
  );
};

export default Lottery;

const LotteryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .margin100 {
    height: 100px;
  }
  .margin120 {
    height: 120px;
  }
  .swiper {
    width: 340px;
    height: 173px;
  }
  .box-1 {
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #000;
    background: #e9e9e9;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 8px 4px 0px rgba(0, 0, 0, 0.25);

    .lottery-img {
      width: 187px;
      height: 187px;
    }
  }
  .box-2 {
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #000;
    background: #ffffff;
    box-shadow: 5px 8px 4px 0px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    .title {
      font-size: 30px;
      font-weight: 700;
      margin: 0;
      margin-bottom: 13px;
    }
    .desc {
      font-size: 17px;
      font-weight: 600;
      margin: 0;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;

  width: 340px;
  .btn {
    border: 1px solid black;
    padding: 14px 34px;
    border-radius: 10px;
  }
`;
