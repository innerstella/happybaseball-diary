import { ReactNode } from "react";
import * as S from "./Modal.style";

interface ModalProps {
  children: ReactNode;
  setIsModalOpen: (value: boolean) => void;
}

const Modal = ({ children, setIsModalOpen }: ModalProps) => {
  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <S.Background onClick={(e) => closeModal(e)}>
      <S.Modal>{children}</S.Modal>
    </S.Background>
  );
};

export default Modal;
