import * as S from "./MyPage.style";
import { useRecoilState, useRecoilValue } from "recoil";

import TopAppBar from "../../components/top-app-bar";
import { loginState, teamState, userDataState } from "../../recoil/system";
import InfoBox from "./components/info-box";
import { FormEvent, useEffect, useState } from "react";
import TeamMenu from "./components/team-menu";
import MyTeam from "./components/my-team";
import OtherTeam from "./components/other-team";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { dbService } from "../../firebase";
import Modal from "../../components/modal";
import { Select } from "@chakra-ui/react";
import { NewUserType } from "../../types/user";
import { TEAM_COLOR, TEAM_LIST } from "../../constants/team";

const MyPage = () => {
  const userData = useRecoilValue(userDataState);
  const loginStatus = useRecoilValue(loginState);
  const [currSeasonData, setCurrentSeasonData] = useState([]);
  const [currMenu, setCurrMenu] = useState(0);
  const [nickname, setNickname] = useState("");
  const [team, setTeam] = useRecoilState(teamState);
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

  const getUserData = async () => {
    const docRef = doc(dbService, "userData", loginStatus.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      setNickname(data.nickname);
      setTeam(data.team);
    }
  };

  useEffect(() => {
    getUserData();
  }, [isModalOpen]);

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
              {TEAM_LIST.map((team, idx) => {
                return (
                  <option key={idx} value={team}>
                    {team}
                  </option>
                );
              })}
            </Select>
            <button>등록</button>
          </form>
        </Modal>
      )}
      {nickname === "" && team === "" ? (
        <S.User>
          <div className="box" onClick={() => setIsModalOpen(true)}>
            <img src="assets/svg/ic-outline-pencil.svg" alt="등록" />
            <p>닉네임 & 응원하는 팀 등록하기</p>
          </div>
        </S.User>
      ) : (
        <S.User>
          <S.TeamIcon team={TEAM_COLOR[team]}></S.TeamIcon>
          <span>{nickname}</span>
          <img
            src="assets/svg/ic-outline-pencil.svg"
            alt="수정"
            onClick={() => setIsModalOpen(true)}
          />
        </S.User>
      )}

      <InfoBox count={currSeasonData.length} />
      <TeamMenu currMenu={currMenu} setCurrMenu={setCurrMenu} />
      {currMenu === 0 ? <MyTeam /> : <OtherTeam />}
    </S.Container>
  );
};

export default MyPage;
