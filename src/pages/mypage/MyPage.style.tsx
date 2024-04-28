import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 20px;
  height: 100vh;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const User = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 1.4rem;
    font-weight: 600;
  }
  img {
    width: 20px;
  }
  .box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;
    border: 1px solid gray;
    border-radius: 10px;
    width: 100%;
    padding: 10px 0;
    cursor: pointer;
  }
`;

export const TeamIcon = styled.div<{ team: string }>`
  background-color: ${(props) => props.team};
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const OddBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;
