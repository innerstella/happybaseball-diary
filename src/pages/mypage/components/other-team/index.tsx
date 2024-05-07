import { useRecoilValue } from "recoil";
import { teamState, userDataState } from "../../../../recoil/system";
import { useEffect, useState } from "react";
import Record from "../../../home/components/record";
import styled from "styled-components";

const OtherTeam = () => {
  const userData = useRecoilValue(userDataState);
  const teamData = useRecoilValue(teamState);
  const [otherTeamData, setOtherTeamData] = useState([]);

  useEffect(() => {
    const data = userData.filter((data: any) => {
      if (data.my !== teamData && data.my !== undefined) {
        return data;
      }
    });

    setOtherTeamData(data);
  }, []);

  return (
    <Container>
      {otherTeamData.map((data: any, idx: number) => {
        return <Record key={data.date} data={data} />;
      })}
    </Container>
  );
};

export default OtherTeam;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 70px;
  }
  p {
    font-size: 1.5rem;
    font-weight: 700;
    color: gray;
  }
`;
