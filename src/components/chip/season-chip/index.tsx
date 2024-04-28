import { useRecoilValue } from "recoil";
import * as S from "./SeasonChip.style";
import { currSeasonState } from "../../../recoil/system";

interface SeasonChipProps {
  season: number;
  onClick: () => void;
}

const SeasonChip = ({ season, onClick }: SeasonChipProps) => {
  const currSeason = useRecoilValue(currSeasonState);

  return (
    <S.Container isActive={currSeason === season} onClick={onClick}>
      {season}
    </S.Container>
  );
};

export default SeasonChip;
