import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  .padding {
    margin-top: 30vh;
    display: flex;
    justify-content: center;
  }

  .text {
    color: #000;
    font-family: "SUIT", sans-serif;
    font-size: 1.6875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
  }
`;

export const SeasonTap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
