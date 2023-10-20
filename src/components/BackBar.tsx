import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const BackBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container onClick={() => navigate("/")}>
        <img src="assets/svg/ic-outline-back.svg" alt="back" className="svg" />
      </Container>
    </>
  );
};

export default BackBar;

const Container = styled.div`
  margin-top: 50px;
  .svg {
    height: 1.875rem;
  }
`;
