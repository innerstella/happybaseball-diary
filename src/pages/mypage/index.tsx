import * as S from "./MyPage.style";
import { useRecoilValue } from "recoil";

import TopAppBar from "../../components/top-app-bar";
import Banner from "../../components/Banner";
import { userDataState } from "../../recoil/system";
import InfoBox from "./components/info-box";
import { useEffect, useState } from "react";
import TeamMenu from "./components/team-menu";
import RecordList from "../home/components/record-list";
import MyTeam from "./components/my-team";
import OtherTeam from "./components/other-team";

const MyPage = () => {
  const userData = useRecoilValue(userDataState);
  const [currSeasonData, setCurrentSeasonData] = useState([]);
  const [currMenu, setCurrMenu] = useState(0);

  useEffect(() => {
    const currSeason = userData.filter((data: any) => {
      if (data.date.slice(0, 2) === "24") return data;
    });

    setCurrentSeasonData(currSeason);
  }, []);

  return (
    <S.MainContainer>
      <TopAppBar page="mypage" />
      <S.Banner>
        <Banner />
      </S.Banner>
      <InfoBox count={currSeasonData.length} />
      <TeamMenu currMenu={currMenu} setCurrMenu={setCurrMenu} />
      {currMenu === 0 ? <MyTeam /> : <OtherTeam />}
    </S.MainContainer>
  );
};

export default MyPage;
