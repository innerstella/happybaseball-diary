import { useEffect, useState } from "react";
import * as S from "./RecordList.style";
import Record from "../Record";

// firebase
import { collection, getDocs } from "firebase/firestore";
import { dbService } from "../../../../firebase";

// ui
import { Spinner } from "@chakra-ui/react";
import FirstRecord from "../FirstRecord";
import { useRecoilState } from "recoil";
import { winningRate23State } from "../../../../recoil/winningRate";
import { winningRate24State } from "../../../../recoil/winningRate";
import SeasonChip from "../../../../components/chip/season-chip";
import { currSeasonState } from "../../../../recoil/system";

const RecordList = () => {
  const [currSeason, setCurrSeason] = useRecoilState(currSeasonState);
  // 승률 계산
  const [winningRate23, setWinningRate23] = useRecoilState(winningRate23State);
  const [winningRate24, setWinningRate24] = useRecoilState(winningRate24State);

  const [isLoading, setIsLoading] = useState(true);
  // const [currSeason, setCurrSeason] = useState(2024); // [2024, 2023]
  const [winningRate, setWinningRate] = useState(winningRate24); // [2024, 2023]

  const seasonList = [2024, 2023];
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

  useEffect(() => {
    if (currSeason === 2024) {
      setWinningRate(winningRate24);
    } else if (currSeason === 2023) {
      setWinningRate(winningRate23);
    }
  }, [currSeason]);

  return (
    <S.Container>
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
          <S.SeasonTap>
            {seasonList.map((season) => {
              return (
                <SeasonChip
                  key={season}
                  season={season}
                  onClick={() => setCurrSeason(season)}
                />
              );
            })}
          </S.SeasonTap>
          {userData.length > 0 ? (
            <>
              {winningRate === "NaN" ? (
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
                  <p className="text">🏆 {winningRate}</p>
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
    </S.Container>
  );
};

export default RecordList;
