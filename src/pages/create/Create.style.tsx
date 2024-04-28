import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 0 25px;
  padding-bottom: 10rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  .gap {
    height: 3rem;
  }
  .padding {
    padding: 0 15px;
  }
  .label {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    .svg {
      height: 1.25rem;
    }
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

export const FabContainer = styled.div`
  position: fixed;

  width: 390px;
  height: 5rem;
  bottom: 0rem;
  z-index: 5;
`;
