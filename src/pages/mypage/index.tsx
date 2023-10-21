import { styled } from "styled-components";
import TopAppBar from "../../components/TopAppBar";
import OddBox from "./components/OddBox";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import { collection, getDocs } from "firebase/firestore";
import { dbService } from "../../firebase";
import Lottery from "../lottery/components/Lottery";

const MyPage = () => {
  // 유저 정보
  const uid = sessionStorage.getItem("uid");
  const [userData, setUserData] = useState<any[]>([]);
  let newUserData: any[] = [];

  useEffect(() => {
    if (uid) {
      const docRef = collection(dbService, uid);
      getDocs(docRef)
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            newUserData.push(doc.data());
          });

          newUserData.sort((a, b) => {
            return b.realDate - a.realDate;
          });

          // 이전 userData 배열과 새로운 데이터를 병합
          setUserData((prev) => [...prev, ...newUserData]);
        })
        .catch((error) => {
          console.error("Error getting documents: ", error);
        });
    }
  }, []);

  // 승률 계산
  const [odds23, setOdds23] = useState("");
  const [odds22, setOdds22] = useState("");

  useEffect(() => {
    let sum = 0,
      num = 0;
    userData.forEach((data) => {
      let yr = +data.date.slice(0, 2);
      if (yr === 23) {
        sum += data.count;
        num++;
      }
    });
    let div = (sum / num).toFixed(3);
    setOdds23(div);
  }, [userData]);

  useEffect(() => {
    let sum = 0;
    let num = 0;
    userData.forEach((data) => {
      let yr = +data.date.slice(0, 2);
      if (yr === 22) {
        sum += data.count;
        num++;
      }
    });
    let div = (sum / num).toFixed(3);
    setOdds22(div);
  }, [userData]);

  return (
    <MainContainer>
      <TopAppBar page="mypage" />
      <div className="gap">
        <Banner />
      </div>
      <Odds>
        <p className="title">23 시즌</p>
        {odds23 === "NaN" ? (
          <OddBox ratio="0.000" />
        ) : (
          <OddBox ratio={odds23} />
        )}
      </Odds>
      <Odds>
        <p className="title">22 시즌</p>
        {odds22 === "NaN" ? (
          <OddBox ratio="0.000" />
        ) : (
          <OddBox ratio={odds22} />
        )}
      </Odds>
      <div className="gap"></div>
      <Lottery />
      {/* <Odds>
        <p className="title">팀별</p>
        <OddBox ratio="0.555" />
      </Odds> */}
    </MainContainer>
  );
};

export default MyPage;

const MainContainer = styled.div`
  padding: 50px 25px 10rem 25px;
  height: 100vh;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
  overflow-x: hidden;
  .gap {
    margin-top: 3rem;
  }
`;

const Odds = styled.div`
  padding-top: 3rem;
  .title {
    padding-bottom: 1rem;
    color: #000;
    font-family: "SUIT", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
