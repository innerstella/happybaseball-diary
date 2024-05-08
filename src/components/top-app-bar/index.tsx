import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { dbService } from "../../firebase";
import { getAuth, signOut } from "firebase/auth";
import * as S from "./TopAppBar.style";
import { useRecoilValue } from "recoil";
import { loginState } from "../../recoil/system";

interface TopAppBarProps {
  page: "home" | "mypage" | "detail";
  docID?: string;
  uid?: string;
}

const TopAppBar = ({ page, docID, uid }: TopAppBarProps) => {
  const navigate = useNavigate();
  const loginStatus = useRecoilValue(loginState);

  // 문서 삭제
  const delRec = () => {
    uid && docID && deleteDoc(doc(dbService, uid, docID));
    navigate("/");
  };

  // 로그아웃
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem("recoil-persist");
        sessionStorage.clear();
        navigate("/", { state: { reload: true } });
      })
      .catch((err) => console.error(err));
  };

  // 페이지별 상단바
  const BAR_LIST: { [key: string]: JSX.Element } = {
    home: (
      <>
        <h1 className="title">⚾️ 직관일기</h1>
        {loginStatus.isLogin === true && (
          <img
            onClick={() => navigate("/mypage")}
            src="assets/svg/ic-solid-user.svg"
            alt="마이페이지"
            className="svg"
          />
        )}
      </>
    ),
    mypage: (
      <>
        <img
          onClick={() => navigate(-1)}
          src="assets/svg/ic-outline-back.svg"
          alt="뒤로가기"
          className="svg"
        />
        <img
          src="assets/svg/ic-outline-logout.svg"
          alt="로그아웃"
          className="svg"
          onClick={() => logout()}
        />
      </>
    ),
    detail: (
      <>
        <img
          onClick={() => navigate(-1)}
          src="/assets/svg/ic-outline-back.svg"
          alt="뒤로가기"
          className="svg"
        />
        <div className="row">
          <img
            src="/assets/svg/ic-outline-delete.svg"
            alt="삭제하기"
            className="svg"
            onClick={() => delRec()}
          />
        </div>
      </>
    ),
  };

  return <S.Container>{BAR_LIST[page]}</S.Container>;
};

export default TopAppBar;
