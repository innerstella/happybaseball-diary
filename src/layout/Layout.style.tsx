import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 420px;
  @media screen and (max-width: 420px) {
    width: 100vw;
  }
`;
