import { styled } from "styled-components";
import TopAppBar from "../../components/top-app-bar";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbService } from "../../firebase";
import { useParams } from "react-router-dom";
import Record from "../home/components/record/Record";

// ui
import { Spinner } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { loginState } from "../../recoil/system";

type Props = {
  date: string;
  location: string;
  my?: string;
  vs: string;
  myScore: number;
  vsScore: number;
  memo: string;
};

const DetailPage = () => {
  const { id } = useParams();
  const loginStatus = useRecoilValue(loginState);

  // 유저 정보
  const uid = loginStatus.uid;
  const [userData, setUserData] = useState<any[]>([]);
  let newUserData: any[] = [];
  const [docID, setDocID] = useState("");

  useEffect(() => {
    if (uid) {
      const docRef = collection(dbService, uid);
      getDocs(docRef)
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            newUserData.push(doc.data());
            if (doc.data().date === id) {
              setDocID(doc.id);
            }
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

  // detail data
  const [detailData, setDetailData] = useState<Props>();
  useEffect(() => {
    userData.forEach((data) => {
      if (data.date === id) {
        setDetailData(data);
      }
    });
  }, [userData, id]);

  return (
    <MainContainer>
      {detailData && uid ? (
        <>
          <TopAppBar page="detail" docID={docID} uid={uid} />
          <div className="detail-box">
            <Record
              date={detailData.date}
              location={detailData.location}
              my={detailData.my}
              vs={detailData.vs}
              score={[detailData.myScore, detailData.vsScore]}
            />
            {detailData.memo && (
              <div className="memo-box">
                <p className="memo-text">{detailData.memo}</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="margin">
          <Spinner
            thickness="4px"
            speed="1s"
            emptyColor="gray.200"
            color="#464646"
            size="xl"
          />
        </div>
      )}
    </MainContainer>
  );
};

export default DetailPage;

const MainContainer = styled.div`
  padding: 50px 25px 10rem 25px;
  height: 100vh;
  padding-bottom: 10rem;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;

  .margin {
    margin-top: 30vh;
    display: flex;
    justify-content: center;
  }
  .detail-box {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .memo-box {
    border-radius: 0.625rem;
    background: #fff;
    padding: 1rem;
    .memo-text {
      color: #4a5568;
      font-family: "SUIT", sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
