import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

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

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

export const SeasonTap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const RecordBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 60vh;
  width: auto;
  padding-bottom: 20vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
