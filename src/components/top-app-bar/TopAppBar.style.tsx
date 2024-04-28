import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .svg {
    height: 1.875rem;
    cursor: pointer;
  }
  .title {
    color: #000;
    font-family: Inter;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`;
