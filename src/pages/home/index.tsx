import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Home.style";

import TopAppBar from "../../components/top-app-bar";
import RecordList from "./components/record-list";
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
    <S.MainContainer>
      <TopAppBar page="home" />
      {isLoggedIn ? (
        <>
          <div className="padding">
            <RecordList />
          </div>
          <S.FabContainer>
            <Button text="기록하기" onClick={() => navigate("/create")} />
          </S.FabContainer>
        </>
      ) : (
        <>
          <LoginPage />
        </>
      )}
    </S.MainContainer>
  );
};

export default HomePage;
