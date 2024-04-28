import { styled } from "styled-components";
import BackBar from "../../components/BackBar";
import Button from "../home/components/CreateButton";
import * as S from "./Create.style";

// db
import { dbService } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

// 달력
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

// ui
import { Select } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "../../recoil/system";

const CreatePage = () => {
  const navigate = useNavigate();
  const loginStatus = useRecoilValue(loginState);

  const [selected, setSelected] = useState<Date>();
  const [location, setLocation] = useState("");
  const [vs, setVs] = useState("");
  const [myScore, setMyScore] = useState(0);
  const [vsScore, setVsScore] = useState(0);
  const [memo, setMemo] = useState("");

  // 유저 정보
  const uid = loginStatus.uid;

  //등록하기
  const create = () => {
    // 날짜 변환  (date => 23.10.21.)
    let date;
    if (selected) {
      const year = selected?.getFullYear().toString().slice(-2); // 끝 두 자리만 사용
      const month = (selected?.getMonth() + 1).toString().padStart(2, "0"); // 1을 더하고 2자리로 포맷팅
      const day = selected?.getDate().toString().padStart(2, "0"); // 2자리로 포맷팅
      date = `${year}${month}${day}`;
    }

    // 승률계산용 숫자 (0, 1)
    let count;
    if (myScore > vsScore) {
      count = 1;
    } else {
      count = 0;
    }

    if (date && location && vs) {
      const data = {
        realDate: selected,
        date: date,
        location: location,
        vs: vs,
        myScore: myScore,
        vsScore: vsScore,
        count: count,
        memo: memo,
      };
      // 등록
      uid && addDoc(collection(dbService, uid), data);
      navigate("/");
    } else {
      alert("빈 항목이 있어요");
    }
  };

  return (
    <>
      <S.MainContainer>
        <BackBar />
        <div className="padding">
          <div className="gap"></div>
          {/* 날짜를 선택해주세요 */}
          <div className="label">
            <img
              src="assets/svg/ic-solid-calendar.svg"
              alt="date"
              className="svg"
            />
            <p className="text">날짜를 선택해주세요</p>
          </div>
          <DayPicker selected={selected} onSelect={setSelected} mode="single" />
          {/* 구장을 선택해주세요 */}
          <div className="gap"></div>
          <div className="label">
            <img src="assets/svg/ic-solid-pin.svg" alt="pin" className="svg" />
            <p className="text">구장을 선택해주세요</p>
          </div>
          <Select
            placeholder="구장"
            isRequired
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="고척">고척</option>
            <option value="라팍">라팍</option>
            <option value="랜필">랜필</option>
            <option value="사직">사직</option>
            <option value="이팍">이팍</option>
            <option value="엔팍">엔팍</option>
            <option value="위팍">위팍</option>
            <option value="잠실">잠실</option>
            <option value="챔필">챔필</option>
          </Select>
          {/* 상대팀을 선택해주세요 */}
          <div className="gap"></div>
          <div className="label">
            <img src="assets/svg/ic-solid-fire.svg" alt="vs" className="svg" />
            <p className="text">상대 팀을 선택해주세요</p>
          </div>
          <Select
            placeholder="상대 팀"
            isRequired
            onChange={(e) => setVs(e.target.value)}
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
          {/* 경기 결과를 입력해주세요*/}
          <div className="gap"></div>
          <div className="label">
            <img
              src="assets/svg/ic-solid-game.svg"
              alt="game"
              className="svg"
            />
            <p className="text">경기 결과를 입력해주세요</p>
          </div>
          <div className="label">
            <p className="text">우리 팀</p>
            <NumberInput
              size="sm"
              maxW={20}
              defaultValue={0}
              min={0}
              onChange={(e) => setMyScore(+e)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
          <div className="label">
            <p className="text">상대 팀</p>
            <NumberInput
              size="sm"
              maxW={20}
              defaultValue={0}
              min={0}
              onChange={(e) => setVsScore(+e)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
          {/* 남겨두고 싶은 기록이 있나요? */}
          <div className="gap"></div>
          <div className="label">
            <img
              src="assets/svg/ic-solid-pencil.svg"
              alt="pencil"
              className="svg"
            />
            <p className="text">남겨두고 싶은 기록이 있나요?</p>
          </div>
          <Textarea
            placeholder="ex) 승리, 홀드, 세이브, 결승타"
            onChange={(e) => setMemo(e.target.value)}
          />
          {/* 기록하기 버튼*/}
        </div>
      </S.MainContainer>
      <S.FabContainer>
        <Button text="기록하기" onClick={() => create()} />
      </S.FabContainer>
    </>
  );
};

export default CreatePage;
