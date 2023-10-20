import { styled } from "styled-components";

const CreateButton = () => {
  return (
    <Container>
      <p className="text">기록하기</p>
    </Container>
  );
};

export default CreateButton;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  height: 3.75rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #464646;

  .text {
    margin: 0;
    padding: 1rem;
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
