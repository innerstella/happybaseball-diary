import styled from "styled-components";

export const Container = styled.div<{ isActive: boolean }>`
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#464646" : "#fff")};
  color: ${(props) => (props.isActive ? "#fff" : "#464646")};
  font-weight: 600;
`;
