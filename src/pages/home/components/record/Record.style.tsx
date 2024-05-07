import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const CardBox = styled.div`
  width: 100%;
  padding: 1.25rem 1.5rem;
  border-radius: 0.625rem;
  background: var(--color-white);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Icon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
`;

export const Text = styled.p`
  margin: 0;
  color: var(--color-gray-200);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ScoreBox = styled.div`
  color: var(--color-gray-200);
  font-size: 2rem;
  font-weight: 700;
`;

export const FlagBox = styled.div<{ team?: string; result: string }>`
  width: 50px;
  height: auto;
  border-radius: 0rem 0.625rem 0.625rem 0rem;
  background: ${(props) => {
    if (props.result === "win") {
      return props.team;
    } else if (props.result === "lose") {
      return "var(--color-gray-100)";
    } else if (props.result === "draw") {
      return "var(--color-brown)";
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
`;
