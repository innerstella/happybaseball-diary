import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@chakra-ui/react";

import * as S from "./Weather.style";
import { teamState } from "../../recoil/system";
import { TEAM_DATA } from "../../constants/team";
import { PLACE_DATA, PLACE_LIST } from "../../constants/place";

import BackBar from "../../components/back-bar";
import { getCurrWeather, getWeatherForecast } from "../../utils/getWeather";
import parseBaseTime from "../../utils/parseBaseTime";
import PlaceChip from "../../components/chip/place-chip";
import Skeleton from "../../components/skeleton";

export default function WeatherPage() {
  const currTeam = useRecoilValue(teamState);
  const [currPlace, setCurrPlace] = useState<string>(
    TEAM_DATA[currTeam].place || "KIA"
  );
  const {
    data: currData,
    isLoading: isCurrDataLoading,
    refetch: refetchCurrData,
    fetchStatus: currDataFetchStatus,
  } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getCurrWeather(currPlace),
    staleTime: 60 * 1000,
    gcTime: 60 * 1000 * 10,
  });

  const {
    data: forecastData,
    isLoading: isForecastDataLoading,
    refetch: refetchForecastData,
    fetchStatus: forecastDataFetchStatus,
  } = useQuery({
    queryKey: ["forecast"],
    queryFn: () => getWeatherForecast(currPlace),
    staleTime: 60 * 1000,
    gcTime: 60 * 1000 * 10,
  });

  useEffect(() => {
    refetchCurrData();
    refetchForecastData();
  }, [currPlace]);

  return (
    <S.Container>
      <BackBar />
      <S.PlaceText>구장별 날씨 예보</S.PlaceText>
      <S.TimeContainer>
        <p>{currData && parseBaseTime(currData?.base_time)} 기준</p>
        <p>{currData?.fsctTime}시 예상</p>
      </S.TimeContainer>
      <S.WeatherContainer team={PLACE_DATA[currPlace].color}>
        {isCurrDataLoading || currDataFetchStatus !== "idle" ? (
          <Spinner size="xl" color="white" />
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
      <S.ChipContainer>
        {PLACE_LIST.map((place) => {
          return (
            <PlaceChip
              currPlace={currPlace}
              onClick={() => setCurrPlace(place)}
            >
              {place}
            </PlaceChip>
          );
        })}
      </S.ChipContainer>
      <S.RainContainer>
        <strong>☔️ 1시간 강수량</strong>
        {currDataFetchStatus !== "idle" ? (
          <Spinner size="xs" />
        ) : (
          <span>{currData?.RN1}</span>
        )}
      </S.RainContainer>
      <S.ForecastContainer>
        {isForecastDataLoading || forecastDataFetchStatus !== "idle"
          ? [1, 2, 3].map((id) => <Skeleton key={id} />)
          : forecastData?.map((data) => {
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
