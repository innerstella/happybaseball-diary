import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Record from "./Record";

import dummyData from "../../../data/dummy.json";

const RecordList = () => {
  // 승률 계산
  const [odds, setOdds] = useState("");

  useEffect(() => {
    let sum = 0;
    let num = 0;
    dummyData.forEach((data) => {
      sum += data.result;
      num++;
    });
    let div = (sum / num).toFixed(3);
    setOdds(div);
  }, []);

  return (
    <Container>
      <p className="text">🏆 {odds}</p>
      {dummyData.map((data, id) => {
        return (
          <Record
            key={id}
            date={data.date}
            location={data.location}
            vs={data.vs}
            score={data.score}
          />
        );
      })}
    </Container>
  );
};

export default RecordList;

const Container = styled.div`
  margin-top: 3rem;

  .text {
    color: #000;
    font-family: Inter;
    font-size: 1.6875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
  }
`;
