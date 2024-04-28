import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Menu = styled.div<{ currMenu: number; idx: number }>`
  width: 100%;
  padding: 5px 0;
  cursor: pointer;

  display: flex;
  justify-content: center;
  border-bottom: 1.5px solid black;
  border-color: ${(props) =>
    props.currMenu === props.idx ? "#000" : "lightgray"};

  span {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${(props) => (props.currMenu === props.idx ? "#000" : "gray")};
    cursor: pointer;
  }
`;
