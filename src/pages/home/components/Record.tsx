import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

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
    <Container onClick={() => navigate(`/detail/${date}`)}>
      <div className="card-box">
        <Box1>
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
            <p className="text">Vs</p>
            <p className="text">{vs}</p>
          </div>
        </Box1>
        <Box2>
          {score[0]} : {score[1]}
        </Box2>
      </div>
      {result === 1 && <WinBox>승</WinBox>}
      {result === 2 && <LoseBox>패</LoseBox>}
      {result === 3 && <DrawBox>무</DrawBox>}
    </Container>
  );
};

export default Record;

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  /* width: 100vw; */
  .card-box {
    width: 80vw;

    padding: 1.25rem 1.5rem;
    border-radius: 0.625rem;
    background: #fff;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
`;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .svg {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
  }

  .label-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    .text {
      margin: 0;
      color: #4a5568;
      font-family: Inter;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

const Box2 = styled.div`
  color: #4a5568;
  font-family: Inter;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const WinBox = styled.div`
  width: 10vw;
  height: auto;
  flex-shrink: 0;
  border-radius: 0rem 0.625rem 0.625rem 0rem;
  background: #ff542f;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;

const LoseBox = styled.div`
  width: 10vw;
  height: auto;
  flex-shrink: 0;
  border-radius: 0rem 0.625rem 0.625rem 0rem;
  background: #a9a9a9;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;

const DrawBox = styled.div`
  width: 10vw;
  height: auto;
  flex-shrink: 0;
  border-radius: 0rem 0.625rem 0.625rem 0rem;
  background: #b18a81;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;
