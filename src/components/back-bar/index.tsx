import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const BackBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container onClick={() => navigate(-1)}>
        <img
          src="assets/svg/ic-outline-back.svg"
          alt="뒤로 가기"
          className="svg"
        />
      </Container>
    </>
  );
};

export default BackBar;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  .svg {
    height: 1.875rem;
    cursor: pointer;
  }
`;
