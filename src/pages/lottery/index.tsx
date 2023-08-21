import { styled } from "styled-components";
import Bar from "../../components/Bar";
import Lottery from "./components/Lottery";

const LotteryPage = () => {
  return (
    <MainContainer>
      <div className="margin60"></div>
      {/* <Bar /> */}
      <div className="dynamic"></div>
      <TextContainer>
        <p className="small">오늘 경기를 생각하며</p>
        <div className="margin10"></div>
        <p className="big">야구 복권을 뒤집어보세요</p>
      </TextContainer>
      <div className="margin50"></div>
      <Lottery />

      <div className="margin120"></div>
    </MainContainer>
  );
};
export default LotteryPage;

const MainContainer = styled.div`
  width: 100vw;
  height: 100lvh;
  padding: 0 25px;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
  .dynamic {
    height: 20dvh;
  }
  .margin10 {
    height: 10px;
  }
  .margin50 {
    height: 50px;
  }
  .margin60 {
    height: 60px;
  }
  .margin100 {
    height: 100px;
  }
  .margin120 {
    height: 120px;
  }
`;

const TextContainer = styled.div`
  color: #000;
  text-align: center;
  font-family: "SUIT", sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  .small {
    font-size: 20px;
    margin: 0;
  }
  .big {
    font-size: 30px;
    margin: 0;
  }
`;
