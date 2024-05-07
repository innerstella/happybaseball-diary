import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Record.style";
import { CardDataType } from "../../../../types/user";
import { DocumentData } from "firebase/firestore";
import { TEAM_COLOR } from "../../../../constants/team";
import { useRecoilValue } from "recoil";
import { teamState } from "../../../../recoil/system";

const Record = ({ data }: { data: CardDataType | DocumentData }) => {
  const navigate = useNavigate();
  const team = useRecoilValue(teamState);
  // 경기 결과 계산 (1:win, 2: lose, 3:draw)
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (data.myScore > data.vsScore) {
      setResult(1);
    } else if (data.myScore < data.vsScore) {
      setResult(2);
    } else {
      setResult(3);
    }
  }, [data.myScore, data.vsScore]);

  return (
    <S.Container onClick={() => navigate(`/detail/${data.date}`)}>
      <div className="card-box">
        <S.Box1>
          <div className="label-box">
            <img
              src="/assets/svg/ic-solid-calendar.svg"
              alt="calendar"
              className="svg"
            />
            <p className="text">
              {data.date.slice(0, 2)}.{data.date.slice(2, 4)}.
              {data.date.slice(4, 6)}
            </p>
          </div>
          <div className="label-box">
            <img
              src="/assets/svg/ic-solid-pin.svg"
              alt="location"
              className="svg"
            />
            <p className="text">{data.location}</p>
          </div>
          {data.my && (
            <div className="label-box">
              <img
                src="/assets/svg/ic-heart.svg"
                alt="응원팀"
                className="svg"
              />
              <p className="text">{data.my}</p>
            </div>
          )}
          <div className="label-box">
            <img
              src="/assets/svg/ic-solid-fire.svg"
              alt="상대팀"
              className="svg"
            />
            <p className="text">{data.vs}</p>
          </div>
        </S.Box1>
        <S.Box2>
          {data.myScore} : {data.vsScore}
        </S.Box2>
      </div>
      {result === 1 && (
        <S.WinBox
          team={team ? TEAM_COLOR[data.my || team] : "var(--color-primary)"}
        >
          승
        </S.WinBox>
      )}
      {result === 2 && <S.LoseBox>패</S.LoseBox>}
      {result === 3 && <S.DrawBox>무</S.DrawBox>}
    </S.Container>
  );
};

export default Record;
