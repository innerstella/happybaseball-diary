import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { styled } from "styled-components";

import randomMeme from "../../data/random-meme.json";

// 달력
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import TopAppBar from "./components/TopAppBar";
import FirstRecord from "./components/FirstRecord";
import Record from "./components/Record";
import RecordList from "./components/RecordList";
import CreateButton from "./components/CreateButton";

const HomePage = () => {
  const navigate = useNavigate();

  // 현재 기록 개수
  const [recordNum, setRecordNum] = useState(1);

  // // 오늘 날짜
  // const [today, setToday] = useState("");
  // const now = new Date();
  // console.log(now);
  // console.log(now.getDate());
  // useEffect(() => {
  //   setToday(
  //     `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`
  //   );
  // }, []);

  return (
    <MainContainer>
      <div className="margin50"></div>
      <TopAppBar />
      {recordNum === 0 ? <FirstRecord /> : <RecordList />}
      {recordNum > 0 && (
        <FabContainer>
          <CreateButton />
        </FabContainer>
      )}
    </MainContainer>
  );
};

export default HomePage;

const MainContainer = styled.div`
  /* width: 100vw; */
  height: 100vh;
  padding: 0 25px;
  padding-bottom: 10rem;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  .margin50 {
    height: 50px;
  }
`;

const FabContainer = styled.div`
  position: fixed;
  width: 90vw;
  height: 5rem;
  bottom: 0rem;

  display: flex;
  justify-content: center;

  z-index: 5;
`;
