import { useRecoilState, useRecoilValue } from "recoil";
import { oddState, teamState, userDataState } from "../../../../recoil/system";
import { useEffect, useState } from "react";
import Record from "../../../home/components/record/Record";
import styled from "styled-components";
import getWinningRate from "../../../../utils/getWinningRate";
import { CURR_YEAR } from "../../../../constants/system";

const MyTeam = () => {
  const userData = useRecoilValue(userDataState);
  const teamData = useRecoilValue(teamState);
  const [oddStatus, setOddStatus] = useRecoilState(oddState);
  const [myTeamData, setMyTeamData] = useState([]);

  useEffect(() => {
    const myData = userData.filter((data: any) => {
      if (data.my === teamData || data.my === undefined) {
        return data;
      }
    });

    const otherData = userData.filter((data: any) => {
      if (data.my !== teamData && data.my !== undefined) {
        return data;
      }
    });

    setMyTeamData(myData);
    setOddStatus({
      myTeam: getWinningRate(myData, CURR_YEAR),
      otherTeam: getWinningRate(otherData, CURR_YEAR),
    });
  }, [teamData]);

  return (
    <Container>
      {myTeamData.map((data: any, idx: number) => {
        return <Record key={data.date} data={data} />;
      })}
    </Container>
  );
};

export default MyTeam;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
