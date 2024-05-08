import { useState, useEffect } from "react";
import BackBar from "../../components/back-bar";
import * as S from "./Weather.style";
import { useRecoilValue } from "recoil";
import { teamState } from "../../recoil/system";
import { TEAM_DATA } from "../../constants/team";
import getCurrWeather from "../../utils/getWeather";
import { Spinner } from "@chakra-ui/react";

interface WeatherData {
  base_time: string;
  T1H: number;
  RN1: number;
  SKY: string;
}

export default function WeatherPage() {
  const currTeam = useRecoilValue(teamState);
  const [currPlace, setCurrPlace] = useState<string>(
    TEAM_DATA[currTeam].place || "챔필"
  );
  const [currWeather, setCurrWeather] = useState<WeatherData>();

  useEffect(() => {
    getCurrWeather().then((data) => {
      setCurrWeather(data);
    });
  }, []);

  return (
    <S.Container>
      <BackBar />
      <S.PlaceText>{currPlace}</S.PlaceText>
      <p>{currWeather?.base_time}</p>
      <S.WeatherContainer team={TEAM_DATA[currTeam].color}>
        {currWeather ? (
          <>
            <S.WeatherIcon
              src={`/assets/svg/ic-${currWeather.SKY}.svg`}
              alt="날씨"
            />
            <S.TempText>{currWeather.T1H} ℃</S.TempText>
          </>
        ) : (
          <Spinner size="xl" />
        )}
      </S.WeatherContainer>
      <p>{currWeather?.RN1}</p>
    </S.Container>
  );
}
