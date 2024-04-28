import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Record.style";

type Props = {
  date: string;
  location: string;
  vs: string;
  score: number[];
};

const Record = ({ date, location, vs, score }: Props) => {
  const navigate = useNavigate();
  // 경기 결과 계산 (1:win, 2: lose, 3:draw)
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (score[0] > score[1]) {
      setResult(1);
    } else if (score[0] < score[1]) {
      setResult(2);
    } else {
      setResult(3);
    }
  }, [score]);

  return (
    <S.Container onClick={() => navigate(`/detail/${date}`)}>
      <div className="card-box">
        <S.Box1>
          <div className="label-box">
            <img
              src="/assets/svg/ic-solid-calendar.svg"
              alt="calendar"
              className="svg"
            />
            <p className="text">
              {date.slice(0, 2)}.{date.slice(2, 4)}.{date.slice(4, 6)}
            </p>
          </div>
          <div className="label-box">
            <img
              src="/assets/svg/ic-solid-pin.svg"
              alt="location"
              className="svg"
            />
            <p className="text">{location}</p>
          </div>
          <div className="label-box">
            <img
              src="/assets/svg/ic-solid-game.svg"
              alt="location"
              className="svg"
            />
            <p className="text">{vs}</p>
          </div>
        </S.Box1>
        <S.Box2>
          {score[0]} : {score[1]}
        </S.Box2>
      </div>
      {result === 1 && <S.WinBox>승</S.WinBox>}
      {result === 2 && <S.LoseBox>패</S.LoseBox>}
      {result === 3 && <S.DrawBox>무</S.DrawBox>}
    </S.Container>
  );
};

export default Record;
