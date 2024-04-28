import * as S from "./MyPage.style";
import { useRecoilValue } from "recoil";

import TopAppBar from "../../components/top-app-bar";
import { loginState, userDataState } from "../../recoil/system";
import InfoBox from "./components/info-box";
import { FormEvent, useEffect, useState } from "react";
import TeamMenu from "./components/team-menu";
import MyTeam from "./components/my-team";
import OtherTeam from "./components/other-team";
import { doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { dbService } from "../../firebase";
import Modal from "../../components/modal";
import { Select } from "@chakra-ui/react";
import { NewUserType } from "../../types/user";

const MyPage = () => {
  const userData = useRecoilValue(userDataState);
  const loginStatus = useRecoilValue(loginState);
  const [currSeasonData, setCurrentSeasonData] = useState([]);
  const [currMenu, setCurrMenu] = useState(0);
  const [nickname, setNickname] = useState("");
  const [team, setTeam] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUSer] = useState({
    nickname: "",
    team: "",
  });

  useEffect(() => {
    const currSeason = userData.filter((data: any) => {
      if (data.date.slice(0, 2) === "24") return data;
    });

    setCurrentSeasonData(currSeason);
  }, []);

  useEffect(() => {
    getUserData();
  }, [isModalOpen]);

  const getUserData = async () => {
    const docRef = doc(dbService, "userData", loginStatus.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      setNickname(data.nickname);
      setTeam(data.team);
    }
  };

  const postUserData = async (data: NewUserType) => {
    await setDoc(doc(dbService, "userData", loginStatus.uid), data);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    postUserData(newUser);
    setIsModalOpen(false);
  };
  return (
    <S.Container>
      <TopAppBar page="mypage" />
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>닉네임</label>
            <input
              type="text"
              required
              placeholder="닉네임을 입력해주세요"
              onChange={(e) =>
                setNewUSer({
                  ...newUser,
                  nickname: e.target.value,
                })
              }
            />
            <label>팀</label>
            <Select
              placeholder="응원 팀"
              isRequired
              onChange={(e) => setNewUSer({ ...newUser, team: e.target.value })}
            >
              <option value="LG">LG</option>
              <option value="KT">KT</option>
              <option value="SSG">SSG</option>
              <option value="NC">NC</option>
              <option value="두산">두산</option>
              <option value="KIA">KIA</option>
              <option value="롯데">롯데</option>
              <option value="삼성">삼성</option>
              <option value="한화">한화</option>
              <option value="키움">키움</option>
            </Select>
            <button>등록</button>
          </form>
        </Modal>
      )}
      <S.User>
        {nickname === "" ? (
          <div onClick={() => setIsModalOpen(true)}>
            <img src="assets/svg/ic-outline-pencil.svg" alt="등록" />
            <p>닉네임 & 응원하는 팀 등록하기</p>
          </div>
        ) : (
          <>
            <span>🐯</span>
            <span>{nickname}</span>
            <img
              src="assets/svg/ic-outline-pencil.svg"
              alt="수정"
              onClick={() => setIsModalOpen(true)}
            />
          </>
        )}
      </S.User>
      <InfoBox count={currSeasonData.length} />
      <TeamMenu currMenu={currMenu} setCurrMenu={setCurrMenu} />
      {currMenu === 0 ? <MyTeam /> : <OtherTeam />}
    </S.Container>
  );
};

export default MyPage;
