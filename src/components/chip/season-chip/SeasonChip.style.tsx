import styled from "styled-components";

export const Container = styled.div<{ isActive: boolean; team: string }>`
  border: 1px solid ${(props) => props.team || "var(--color-gray-100"};
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? props.team : "#fff")};
  color: ${(props) => (props.isActive ? "#fff" : props.team)};
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 600;
`;
