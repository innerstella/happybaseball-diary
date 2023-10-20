import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import TopAppBar from "../../components/TopAppBar";
import FirstRecord from "./components/FirstRecord";
import RecordList from "./components/RecordList";
import Button from "./components/CreateButton";
import LoginPage from "../login";
import { authService } from "../../firebase";

const HomePage = () => {
  const navigate = useNavigate();

  // 로그인 여부

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const localUserData = () => {
    for (const key of Object.keys(sessionStorage)) {
      if (key.includes("firebase:authUser:") && typeof key === "string") {
        setIsLoggedIn(true);
        return sessionStorage.getItem(key);
      }
    }
  };
  useEffect(() => {
    const value = localUserData();
    if (value && typeof value === "string") {
      setUserData(JSON.parse(value));
    }
  }, []);

  // 현재 기록 개수
  const [recordNum, setRecordNum] = useState(1);

  return (
    <MainContainer>
      <div className="padding">
        <TopAppBar page="home" />
      </div>
      {isLoggedIn ? (
        <>
          <div className="padding">
            {recordNum === 0 ? <FirstRecord /> : <RecordList />}
          </div>
          {recordNum > 0 && (
            <FabContainer>
              <Button text="기록하기" onClick={() => navigate("/create")} />
            </FabContainer>
          )}
        </>
      ) : (
        <>
          <LoginPage />
        </>
      )}
    </MainContainer>
  );
};

export default HomePage;

const MainContainer = styled.div`
  /* width: 100vw; */
  padding-top: 50px;
  height: 100vh;
  padding-bottom: 10rem;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  .padding {
    padding: 0 25px;
  }
`;

export const FabContainer = styled.div`
  position: fixed;
  /* width: 80vw; */

  display: flex;
  width: 100vw;
  justify-content: center;
  height: 5rem;
  bottom: 0rem;

  display: flex;
  justify-content: center;

  z-index: 5;
`;
