import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 50px 25px 10rem 25px;
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .gap {
    margin-top: 3rem;
  }

  .banner {
    width: 100%;
  }
`;

export const Odds = styled.div`
  padding-top: 3rem;
  .title {
    padding-bottom: 1rem;
    color: #000;
    font-family: "SUIT", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
