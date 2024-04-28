import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  padding: 50px 20px;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
  overflow-x: hidden;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FabContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  height: 5rem;
  bottom: 0rem;

  display: flex;
  justify-content: center;

  z-index: 5;
`;
