import * as S from "./MyPage.style";
import { useRecoilValue } from "recoil";

import TopAppBar from "../../components/top-app-bar";
import OddBox from "./components/OddBox";
import Banner from "../../components/Banner";
import Lottery from "../lottery/components/Lottery";

const MyPage = () => {
  // const userData = useRecoilValue(userdata)

  return (
    <S.MainContainer>
      <TopAppBar page="mypage" />
      <div className="gap">
        <div className="banner">
          <Banner />
        </div>
      </div>
      {/* <S.Odds>
        <p className="title">24 시즌</p>
     
          <OddBox ratio={winningRate24} />
      </S.Odds>
      <S.Odds>
        <p className="title">23 시즌</p>
       
          <OddBox ratio={winningRate23} />
      </S.Odds> */}
      <div className="gap"></div>
      <Lottery />
    </S.MainContainer>
  );
};

export default MyPage;
