import * as S from "./MyPage.style";
import { useRecoilValue } from "recoil";

import TopAppBar from "../../components/top-app-bar";
import OddBox from "./components/OddBox";
import Banner from "../../components/Banner";
import Lottery from "../lottery/components/Lottery";
import { userDataState } from "../../recoil/system";
import InfoBox from "./components/info-box";
import { useEffect, useState } from "react";

const MyPage = () => {
  const userData = useRecoilValue(userDataState);
  const [currSeasonData, setCurrentSeasonData] = useState([]);

  useEffect(() => {
    const currSeason = userData.filter((data: any) => {
      if (data.date.slice(0, 2) === "24") return data;
    });

    setCurrentSeasonData(currSeason);
  }, []);

  return (
    <S.MainContainer>
      <TopAppBar page="mypage" />
      <div className="banner">
        <Banner />
      </div>
      <InfoBox count={currSeasonData.length} />
      {/* <S.Odds>
        <p className="title">24 시즌</p>
     
          <OddBox ratio={winningRate24} />
      </S.Odds>
      <S.Odds>
        <p className="title">23 시즌</p>
       
          <OddBox ratio={winningRate23} />
      </S.Odds> */}
      {/* <Lottery /> */}
    </S.MainContainer>
  );
};

export default MyPage;
