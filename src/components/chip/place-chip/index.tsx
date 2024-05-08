import styled from "styled-components";
import { PLACE_DATA } from "../../../constants/place";

interface SeasonChipProps {
  children: React.ReactNode;
  currPlace: string;
  onClick?: () => void;
}

const PlaceChip = ({ children, currPlace, onClick }: SeasonChipProps) => {
  return (
    <Container
      onClick={onClick}
      currPlace={currPlace === children}
      place={currPlace}
    >
      <p>{children}</p>
    </Container>
  );
};

export default PlaceChip;

const Container = styled.div<{ currPlace: boolean; place: string }>`
  display: flex;
  background: ${(props) =>
    props.currPlace ? PLACE_DATA[props.place].color : "var(--color-white)"};
  color: ${(props) =>
    props.currPlace ? "var(--color-white)" : "var(--color-gray-200)"};
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid var(--color-gray-100);
  cursor: pointer;
`;
