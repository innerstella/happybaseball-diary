import { useState } from "react";
import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@chakra-ui/react";

import * as S from "./Weather.style";
import { teamState } from "../../recoil/system";
import { TEAM_DATA } from "../../constants/team";
import BackBar from "../../components/back-bar";
import { getCurrWeather, getWeatherForecast } from "../../utils/getWeather";
import parseBaseTime from "../../utils/parseBaseTime";

export default function WeatherPage() {
  const currTeam = useRecoilValue(teamState);
  const [currPlace, setCurrPlace] = useState<string>(
    TEAM_DATA[currTeam].place || "챔필"
  );
  const { data: currData, isLoading: isCurrDataLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: getCurrWeather,
    staleTime: 60 * 1000,
    gcTime: 60 * 1000 * 10,
  });

  const { data: forecastData, isLoading: isForecastDataLoading } = useQuery({
    queryKey: ["forecast"],
    queryFn: getWeatherForecast,
    staleTime: 60 * 1000,
    gcTime: 60 * 1000 * 10,
  });

  return (
    <S.Container>
      <BackBar />
      <S.PlaceText>{currPlace}</S.PlaceText>
      <S.TimeContainer>
        <p>{currData && parseBaseTime(currData?.base_time)} 기준</p>
        <p>{currData?.fsctTime}시 예상</p>
      </S.TimeContainer>
      <S.WeatherContainer team={TEAM_DATA[currTeam].color}>
        {isCurrDataLoading ? (
          <Spinner size="xl" />
        ) : (
          <>
            <S.WeatherIcon
              src={`/assets/svg/ic-${currData?.SKY}.svg`}
              alt="날씨"
            />
            <S.TempText>{currData?.T1H} ℃</S.TempText>
          </>
        )}
      </S.WeatherContainer>
      <S.RainContainer>
        <span>☔️ 1시간 강수량</span>
        <span>{currData?.RN1}</span>
      </S.RainContainer>
      <S.ForecastContainer>
        {forecastData?.map((data) => {
          return (
            <S.Forecast key={data.id}>
              <strong>{data.fcstTime} 시</strong>
              <p>{data.T1H} ℃</p>
              <p>{data.RN1}</p>
            </S.Forecast>
          );
        })}
      </S.ForecastContainer>
      <p>© 기상청 단기예보 조회서비스(2.0)</p>
    </S.Container>
  );
}