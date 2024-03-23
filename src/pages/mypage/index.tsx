import { styled } from "styled-components";
import { useRecoilValue } from "recoil";

import { winningRate23State, winningRate24State } from "../../atom";

import TopAppBar from "../../components/TopAppBar";
import OddBox from "./components/OddBox";
import Banner from "../../components/Banner";
import Lottery from "../lottery/components/Lottery";

const MyPage = () => {
  const winningRate23 = useRecoilValue(winningRate23State);
  const winningRate24 = useRecoilValue(winningRate24State);

  return (
    <MainContainer>
      <TopAppBar page="mypage" />
      <div className="gap">
        <Banner />
      </div>
      <Odds>
        <p className="title">24 시즌</p>
        {winningRate24 === "NaN" ? (
          <OddBox ratio="0.000" />
        ) : (
          <OddBox ratio={winningRate24} />
        )}
      </Odds>
      <Odds>
        <p className="title">23 시즌</p>
        {winningRate23 === "NaN" ? (
          <OddBox ratio="0.000" />
        ) : (
          <OddBox ratio={winningRate23} />
        )}
      </Odds>
      <div className="gap"></div>
      <Lottery />
    </MainContainer>
  );
};

export default MyPage;

const MainContainer = styled.div`
  padding: 50px 25px 10rem 25px;
  height: 100vh;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
  overflow-x: hidden;
  .gap {
    margin-top: 3rem;
  }
`;

const Odds = styled.div`
  padding-top: 3rem;
  .title {
    padding-bottom: 1rem;
    color: #000;
    font-family: "SUIT", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
