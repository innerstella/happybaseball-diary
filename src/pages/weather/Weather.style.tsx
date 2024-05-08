import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 20px;
  height: 100vh;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ChipContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const PlaceText = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-gray-300);
`;

export const WeatherContainer = styled.div<{ team: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  background: ${(props) => props.team};
  border-radius: 25px;
  width: 250px;
  height: 250px;
`;

export const WeatherIcon = styled.img`
  width: 100px;
`;

export const TempText = styled.p`
  color: var(--color-white);
  font-size: 40px;
  font-weight: 700;
`;

export const RainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  padding: 10px;
  border-radius: 10px;

  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
`;

export const ForecastContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  gap: 10px;
`;

export const Forecast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;
  border-radius: 10px;
  width: 100%;

  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
