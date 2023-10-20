import { styled } from "styled-components";
import BackBar from "../../components/BackBar";
import Button from "../home/components/CreateButton";
import { FabContainer } from "../home";

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

const CreatePage = () => {
  const [selected, setSelected] = useState<Date>();
  return (
    <>
      <MainContainer>
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
          <Select placeholder="구장" isRequired>
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
          <Select placeholder="상대 팀" isRequired>
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
            <NumberInput size="sm" maxW={20} defaultValue={0} min={0}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
          <div className="label">
            <p className="text">상대 팀</p>
            <NumberInput size="sm" maxW={20} defaultValue={0} min={0}>
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
          <Textarea placeholder="ex) 승리, 홀드, 세이브, 결승타" />
          {/* 기록하기 버튼*/}
        </div>
      </MainContainer>
      <FabContainer>
        <Button text="기록하기" />
      </FabContainer>
    </>
  );
};

export default CreatePage;

const MainContainer = styled.div`
  padding: 0 25px;
  padding-bottom: 10rem;
  height: 100vh;
  padding-bottom: 10rem;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
  overflow-x: hidden;
  .gap {
    height: 3rem;
  }
  .padding {
    padding: 0 15px;
  }
  .label {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    .svg {
      height: 1.25rem;
    }
    .text {
      margin: 0;
      color: #4a5568;
      font-family: "SUIT", sans-serif;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
