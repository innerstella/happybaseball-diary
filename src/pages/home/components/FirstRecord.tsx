import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const FirstRecord = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/create")}>
      <img src="/assets/svg/ic-outline-plus.svg" alt="plus" className="svg" />
      <p className="title">첫 직관 기록을 남겨볼까요?</p>
    </Container>
  );
};

export default FirstRecord;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  margin-top: 20vh;
  .svg {
    height: 3.6875rem;
  }
  .title {
    color: #4a5568;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
