import * as S from "../info-box/InfoBox.style";

const OddBox = ({ odd, team }: { odd: number; team: string }) => {
  return (
    <S.Container>
      <p>{team} 직관 승률</p>
      <p>
        <span>{isNaN(odd) ? "0.000" : odd}</span>
      </p>
    </S.Container>
  );
};

export default OddBox;
