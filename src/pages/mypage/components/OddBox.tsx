import { styled } from "styled-components";

const OddBox = ({ ratio }: { ratio: string }) => {
  return (
    <Box>
      <p className="text">🏆 {ratio}</p>
    </Box>
  );
};

export default OddBox;

const Box = styled.div`
  border-radius: 0.625rem;
  background: #fff;
  padding: 1rem;
  .text {
    margin: 0;
    color: #000;
    font-family: Inter;
    font-size: 1.6875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
