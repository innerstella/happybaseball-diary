import { useRecoilValue } from "recoil";
import { userDataState } from "../../../../recoil/system";
import { useEffect, useState } from "react";
import Record from "../../../home/components/record/Record";
import styled from "styled-components";

const MyTeam = () => {
  const userData = useRecoilValue(userDataState);
  const [myTeamData, setMyTeamData] = useState([]);

  useEffect(() => {
    //TODO: 우리팀 데이터만 가져오기

    setMyTeamData(userData);
  }, []);

  return (
    <Container>
      {userData.map((data: any, idx: number) => {
        return (
          <Record
            key={data.date}
            date={data.date}
            location={data.location}
            vs={data.vs}
            score={[data.myScore, data.vsScore]}
          />
        );
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
