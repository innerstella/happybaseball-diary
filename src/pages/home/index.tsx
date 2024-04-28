import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Home.style";

import TopAppBar from "../../components/top-app-bar";
import RecordList from "./components/record-list";
import Button from "./components/CreateButton";
import LoginPage from "../login";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/system";
import Banner from "../../components/Banner";

const HomePage = () => {
  const navigate = useNavigate();

  // 로그인 여부
  const [loginStatus, setLoginStatus] = useRecoilState(loginState);
  const [userData, setUserData] = useState();

  const localUserData = () => {
    for (const key of Object.keys(sessionStorage)) {
      if (key.includes("firebase:authUser:") && typeof key === "string") {
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
      setLoginStatus({ isLogin: true, uid: data.uid });
    }
  }, []);

  return (
    <S.MainContainer>
      <TopAppBar page="home" />
      <S.Banner>
        <Banner />
      </S.Banner>
      {loginStatus.isLogin === true ? (
        <>
          <RecordList />
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
