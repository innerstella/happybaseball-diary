import { styled } from "styled-components";
import TopAppBar from "../../components/TopAppBar";
import Button from "../home/components/CreateButton";
import { signInGoogle } from "../../firebase";

const LoginPage = () => {
  const login = () => {
    signInGoogle();
  };
  return (
    <MainContainer>
      <Info>
        <img src="/assets/svg/ic-outline-plus.svg" alt="plus" className="svg" />
        <p className="title">첫 직관 기록을 남겨볼까요?</p>
      </Info>
      <div className="margin"></div>
      <Button text="이메일로 시작하기" onClick={() => login()} />
    </MainContainer>
  );
};

export default LoginPage;

const MainContainer = styled.div`
  height: 100vh;
  padding-bottom: 10rem;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  .margin {
    height: 2rem;
  }
`;

const Info = styled.div`
  margin-top: 20vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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
