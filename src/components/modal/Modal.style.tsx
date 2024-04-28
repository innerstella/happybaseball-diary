import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const Modal = styled.div`
  border-radius: 0.8rem;
  background: white;
  padding: 2.8rem;
  overflow-x: hidden;
  overflow-y: scroll;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    font-size: 1rem;
    font-weight: 600;
  }

  input {
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 0.5rem;
  }

  button {
    background-color: #464646;
    color: white;
    border-radius: 0.5rem;
    padding: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }
`;
