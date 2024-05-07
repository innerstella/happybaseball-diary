import { useRecoilValue } from "recoil";
import * as S from "./SeasonChip.style";
import { currSeasonState, teamState } from "../../../recoil/system";
import { TEAM_COLOR } from "../../../constants/team";

interface SeasonChipProps {
  season: number;
  onClick: () => void;
}

const SeasonChip = ({ season, onClick }: SeasonChipProps) => {
  const currSeason = useRecoilValue(currSeasonState);
  const currTeam = useRecoilValue(teamState);

  return (
    <S.Container
      isActive={currSeason === season}
      team={
        currTeam.length > 0 ? TEAM_COLOR[currTeam] : "var(--color-gray-200)"
      }
      onClick={onClick}
    >
      <S.Text>{season}</S.Text>
    </S.Container>
  );
};

export default SeasonChip;
