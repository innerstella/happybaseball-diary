import styled from "styled-components";

const Skeleton = () => {
  return <Container></Container>;
};

export default Skeleton;

export const Container = styled.div`
  background-color: var(--color-gray-100);
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  height: 94px;

  @keyframes blinker {
    50% {
      opacity: 50%;
    }
  }
  animation: blinker 1s linear infinite;
`;
