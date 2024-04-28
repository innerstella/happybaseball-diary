import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import TopAppBar from "../../components/top-app-bar";
import FirstRecord from "./components/FirstRecord";
import RecordList from "./components/RecordList";
import Button from "./components/CreateButton";
import LoginPage from "../login";

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
    let data;
    if (value && typeof value === "string") {
      data = JSON.parse(value);
      setUserData(data);
      sessionStorage.setItem("uid", data.uid);
    }
  }, []);

  return (
    <MainContainer>
      <div className="padding">
        <TopAppBar page="home" />
      </div>
      {isLoggedIn ? (
        <>
          <div className="padding">
            <RecordList />
          </div>
          <FabContainer>
            <Button text="기록하기" onClick={() => navigate("/create")} />
          </FabContainer>
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
  padding-top: 50px;
  height: 100vh;
  padding-bottom: 10rem;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
  overflow-x: hidden;

  display: flex;
  align-items: center;
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
