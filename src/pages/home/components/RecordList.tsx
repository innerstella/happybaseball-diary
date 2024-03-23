import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Record from "./Record";

// firebase
import { collection, getDocs } from "firebase/firestore";
import { dbService } from "../../../firebase";

// ui
import { Spinner } from "@chakra-ui/react";
import FirstRecord from "./FirstRecord";
import { useRecoilState } from "recoil";
import { winningRate23State } from "../../../atom";
import { winningRate24State } from "../../../atom";

const RecordList = () => {
  const [isLoading, setIsLoading] = useState(true);
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
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error getting documents: ", error);
        });
    }
  }, []);

  // 승률 계산
  const [winningRate23, setWinningRate23] = useRecoilState(winningRate23State);
  const [winningRate24, setWinningRate24] = useRecoilState(winningRate24State);

  useEffect(() => {
    let season24 = [0, 0]; // sum, cnt
    let season23 = [0, 0];

    userData.forEach((data) => {
      if (data.date.slice(0, 2) === "24") {
        season24[0] += data.count;
        season24[1]++;
      } else if (data.date.slice(0, 2) === "23") {
        season23[0] += data.count;
        season23[1]++;
      }
    });

    let div24 = (season24[0] / season24[1]).toFixed(3);
    let div23 = (season23[0] / season23[1]).toFixed(3);

    if (div24 !== "NaN") {
      setWinningRate24(div24);
    }
    if (div23 !== "NaN") {
      setWinningRate23(div23);
    }
  }, [userData]);

  return (
    <Container>
      {isLoading ? (
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
          {userData.length > 0 ? (
            <>
              {winningRate23 === "NaN" ? (
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
                  <p className="text">🏆 {winningRate24}</p>
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
    font-family: "SUIT", sans-serif;
    font-size: 1.6875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
  }
`;
