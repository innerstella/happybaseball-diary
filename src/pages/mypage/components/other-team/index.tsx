import { useRecoilValue } from "recoil";
import { userDataState } from "../../../../recoil/system";
import { useEffect, useState } from "react";
import Record from "../../../home/components/record/Record";
import styled from "styled-components";

const OtherTeam = () => {
  const userData = useRecoilValue(userDataState);

  useEffect(() => {
    //TODO: 다른 팀 데이터만 가져오기
  }, []);

  return (
    <Container>
      <img src="assets/svg/ic-rocket.svg" alt="준비 중" />
      <p>준비 중</p>
    </Container>
  );
};

export default OtherTeam;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
