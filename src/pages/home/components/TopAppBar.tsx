import { styled } from "styled-components";

const TopAppBar = () => {
  return (
    <Container>
      <img src="assets/svg/ic-solid-user.svg" alt="user" className="svg" />
      <p className="title">직관일기</p>
      <img src="assets/svg/ic-solid-question.svg" alt="user" className="svg" />
    </Container>
  );
};

export default TopAppBar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .svg {
    height: 1.875rem;
  }
  .title {
    color: #000;
    font-family: Inter;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
