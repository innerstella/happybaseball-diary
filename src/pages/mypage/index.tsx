import { styled } from "styled-components";
import TopAppBar from "../../components/TopAppBar";
import OddBox from "./components/OddBox";

const MyPage = () => {
  return (
    <MainContainer>
      <TopAppBar page="mypage" />
      <Odds>
        <p className="title">23시즌</p>
        <OddBox ratio="0.555" />
      </Odds>
      <Odds>
        <p className="title">팀별</p>
        <OddBox ratio="0.555" />
      </Odds>
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
