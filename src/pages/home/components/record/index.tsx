import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { DocumentData } from "firebase/firestore";

import * as S from "./Record.style";
import { CardDataType } from "../../../../types/user";
import { TEAM_DATA } from "../../../../constants/team";
import { teamState } from "../../../../recoil/system";
import getGameResult from "../../../../utils/getGameResult";
import getParsedDate from "../../../../utils/getParsedDate";

const Record = ({ data }: { data: CardDataType | DocumentData }) => {
  const navigate = useNavigate();
  const team = useRecoilValue(teamState);
  const result = getGameResult(data.myScore, data.vsScore);

  const SCORE_FLAGS = {
    win: (
      <S.FlagBox
        team={team ? TEAM_DATA[data.my || team].color : "var(--color-primary)"}
        result="win"
      >
        승
      </S.FlagBox>
    ),
    lose: <S.FlagBox result="lose">패</S.FlagBox>,
    draw: <S.FlagBox result="draw">무</S.FlagBox>,
  };

  return (
    <S.Container onClick={() => navigate(`/detail/${data.date}`)}>
      <S.CardBox>
        <S.IconBox>
          <S.LabelBox>
            <S.Icon src="/assets/svg/ic-solid-calendar.svg" alt="날짜" />
            <S.Text>{getParsedDate(data.date)}</S.Text>
          </S.LabelBox>
          <S.LabelBox>
            <S.Icon src="/assets/svg/ic-solid-pin.svg" alt="장소" />
            <S.Text>{data.location}</S.Text>
          </S.LabelBox>
          {data.my && (
            <S.LabelBox>
              <S.Icon src="/assets/svg/ic-heart.svg" alt="응원팀" />
              <S.Text>{data.my}</S.Text>
            </S.LabelBox>
          )}
          <S.LabelBox>
            <S.Icon src="/assets/svg/ic-solid-fire.svg" alt="상대팀" />
            <S.Text>{data.vs}</S.Text>
          </S.LabelBox>
        </S.IconBox>
        <S.ScoreBox>
          {data.myScore} : {data.vsScore}
        </S.ScoreBox>
      </S.CardBox>
      {SCORE_FLAGS[result]}
    </S.Container>
  );
};

export default Record;
