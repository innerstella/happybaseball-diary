import { styled } from "styled-components";
import TopAppBar from "../../components/TopAppBar";
import OddBox from "./components/OddBox";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner";

const MyPage = () => {
  const [odds, setOdds] = useState("0.000");
  useEffect(() => {
    const sessionOdds = sessionStorage.getItem("23odds");
    sessionOdds !== "NaN" && sessionOdds
      ? setOdds(sessionOdds)
      : setOdds("0.000");
  }, []);
  return (
    <MainContainer>
      <TopAppBar page="mypage" />
      <div className="gap"></div>
      <Banner />
      <Odds>
        <p className="title">23 시즌</p>
        <OddBox ratio={odds} />
      </Odds>
      {/* <Odds>
        <p className="title">팀별</p>
        <OddBox ratio="0.555" />
      </Odds> */}
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
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
