import { ReactNode } from "react";
import * as S from "./Layout.style";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <S.Background>
      <S.Container>{children}</S.Container>
    </S.Background>
  );
};

export default Layout;
