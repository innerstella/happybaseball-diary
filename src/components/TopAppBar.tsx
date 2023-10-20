import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const TopAppBar = ({ page }: { page: string }) => {
  const navigate = useNavigate();

  return (
    <Container>
      {page === "home" && (
        <>
          <img
            onClick={() => navigate("/mypage")}
            src="assets/svg/ic-solid-user.svg"
            alt="user"
            className="svg"
          />
          <p className="title">직관일기</p>
          <img
            src="assets/svg/ic-solid-question.svg"
            alt="user"
            className="svg"
          />
        </>
      )}
      {page === "mypage" && (
        <>
          <img
            onClick={() => navigate("/")}
            src="assets/svg/ic-outline-back.svg"
            alt="back"
            className="svg"
          />
          <p className="title">직관일기</p>
          <img
            src="assets/svg/ic-outline-logout.svg"
            alt="logout"
            className="svg"
          />
        </>
      )}
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
