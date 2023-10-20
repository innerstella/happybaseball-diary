import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Record from "./Record";

import dummyData from "../../../data/dummy.json";
import { doc, collection, getDocs } from "firebase/firestore";
import { dbService } from "../../../firebase";

const RecordList = () => {
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
            console.log(doc.data());
          });

          newUserData.sort((a, b) => {
            return b.realDate - a.realDate;
          });

          // 이전 userData 배열과 새로운 데이터를 병합
          setUserData((prev) => [...prev, ...newUserData]);
          console.log(newUserData);
        })
        .catch((error) => {
          console.error("Error getting documents: ", error);
        });
    }
  }, []);

  // 승률 계산
  const [odds, setOdds] = useState("");

  useEffect(() => {
    let sum = 0;
    let num = 0;
    userData.forEach((data) => {
      sum += data.count;
      num++;
      console.log(data.date.split(".").join(""));
    });
    let div = (sum / num).toFixed(3);
    setOdds(div);
  }, [userData]);

  return (
    <Container>
      <p className="text">🏆 {odds}</p>
      {userData.map((data, id) => {
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

export default RecordList;

const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .text {
    color: #000;
    font-family: Inter;
    font-size: 1.6875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
  }
`;
