import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import * as S from "./RecordList.style";
import Record from "../record/Record";

// firebase
import { collection, getDocs } from "firebase/firestore";
import { dbService } from "../../../../firebase";

// ui
import { Spinner } from "@chakra-ui/react";
import FirstRecord from "../FirstRecord";
import SeasonChip from "../../../../components/chip/season-chip";
import {
  currSeasonState,
  loginState,
  userDataState,
} from "../../../../recoil/system";
import getWinningRate from "../../../../utils/getWinningRate";

const RecordList = () => {
  const seasonList = [2024, 2023];
  const [currSeason, setCurrSeason] = useRecoilState(currSeasonState);
  const [userStatus, setUserStatus] = useRecoilState(userDataState);
  const loginStatus = useRecoilValue(loginState);
  const [isLoading, setIsLoading] = useState(true);
  const [winningRate, setWinningRate] = useState("0.000");

  // 유저 정보

  const uid = loginStatus.uid;
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
    console.log(winningRate);
    if (userData.length > 0) {
      setUserStatus(userData as never[]);
      setWinningRate(getWinningRate(userData, currSeason));
    }
  }, [userData, currSeason]);

  return (
    <S.Container>
      {isLoading ? (
        <div className="spinner">
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
          <p className="text">
            🏆 {winningRate === "NaN" ? "0.000" : winningRate}
          </p>
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
            <S.RecordBox>
              {winningRate === "NaN" ? (
                // <div>
                //   <Spinner
                //     thickness="4px"
                //     speed="1s"
                //     emptyColor="gray.200"
                //     color="#464646"
                //     size="xl"
                //   />
                // </div>
                <FirstRecord />
              ) : (
                <>
                  {userData
                    .filter(
                      (elem) =>
                        elem.date.slice(0, 2) === String(currSeason).slice(2, 4)
                    )
                    .map((data, id) => {
                      return (
                        <Record
                          key={data.date}
                          date={data.date}
                          location={data.location}
                          my={data.my}
                          vs={data.vs}
                          score={[data.myScore, data.vsScore]}
                        />
                      );
                    })}
                </>
              )}
            </S.RecordBox>
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
