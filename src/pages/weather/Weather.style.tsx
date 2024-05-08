import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 20px;
  height: 100vh;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
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

  background-color: ${(props) => props.team};
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
