import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Record from "./Record";

// firebase
import { collection, getDocs } from "firebase/firestore";
import { dbService } from "../../../firebase";

// ui
import { Spinner } from "@chakra-ui/react";
import FirstRecord from "./FirstRecord";

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
  const [odds, setOdds] = useState("");

  useEffect(() => {
    let sum = 0;
    let num = 0;
    userData.forEach((data) => {
      sum += data.count;
      num++;
    });
    let div = (sum / num).toFixed(3);
    setOdds(div);
    sessionStorage.setItem("23odds", div);
  }, [userData]);

  return (
    <Container>
      {userData.length > 0 ? (
        <>
          {odds === "NaN" ? (
            <div className="padding">
              <Spinner
                thickness="4px"
                speed="1s"
                emptyColor="gray.200"
                color="#464646"
                size="xl"
              />
            </div>
          ) : (
            <>
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
            </>
          )}
        </>
      ) : (
        <>
          <FirstRecord />
        </>
      )}
    </Container>
  );
};

export default RecordList;

const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .padding {
    margin-top: 30vh;
    display: flex;
    justify-content: center;
  }

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
