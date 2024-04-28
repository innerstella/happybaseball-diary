import * as S from "./TeamMenu.style";

interface TeamMenuProps {
  currMenu: number;
  setCurrMenu: (value: number) => void;
}

const TeamMenu = ({ currMenu, setCurrMenu }: TeamMenuProps) => {
  const menuList = ["우리 팀", "다른 팀"];

  return (
    <S.Container>
      {menuList.map((elem, idx) => {
        return (
          <S.Menu
            currMenu={currMenu}
            idx={idx}
            onClick={() => setCurrMenu(idx)}
          >
            <span>{elem}</span>
          </S.Menu>
        );
      })}
    </S.Container>
  );
};

export default TeamMenu;
