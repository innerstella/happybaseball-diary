import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  .card-box {
    width: 100%;

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

export const Box1 = styled.div`
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
      font-family: "SUIT", sans-serif;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export const Box2 = styled.div`
  color: #4a5568;
  font-family: "SUIT", sans-serif;
  font-size: 2.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const WinBox = styled.div`
  width: 10vw;
  height: auto;
  flex-shrink: 0;
  border-radius: 0rem 0.625rem 0.625rem 0rem;
  background: #ff542f;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-family: "SUIT", sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;

export const LoseBox = styled.div`
  width: 10vw;
  height: auto;
  flex-shrink: 0;
  border-radius: 0rem 0.625rem 0.625rem 0rem;
  background: #a9a9a9;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-family: "SUIT", sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;

export const DrawBox = styled.div`
  width: 10vw;
  height: auto;
  flex-shrink: 0;
  border-radius: 0rem 0.625rem 0.625rem 0rem;
  background: #b18a81;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-family: "SUIT", sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;
