import { styled } from "styled-components";

type Props = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <p className="text">{text}</p>
    </Container>
  );
};

export default Button;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;

  height: 3.75rem;
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
