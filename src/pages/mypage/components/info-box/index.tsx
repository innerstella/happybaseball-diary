import * as S from "./InfoBox.style";

const InfoBox = ({ count }: { count: number }) => {
  return (
    <S.Container>
      <p>
        ⚾️ 이번 시즌 야구장에 총 <span>{count}</span>번 방문했어요
      </p>
    </S.Container>
  );
};

export default InfoBox;
