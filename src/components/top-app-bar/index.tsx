import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { dbService } from "../../firebase";
import { getAuth, signOut } from "firebase/auth";
import * as S from "./TopAppBar.style";

const TopAppBar = ({
  page,
  docID,
  uid,
}: {
  page: string;
  docID?: string;
  uid?: string;
}) => {
  const navigate = useNavigate();

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
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <S.Container>
      {page === "home" && (
        <>
          <img
            onClick={() => navigate("/mypage")}
            src="assets/svg/ic-solid-user.svg"
            alt="user"
            className="svg"
          />
          <p className="title">직관일기</p>
          <img
            src="assets/svg/ic-solid-question.svg"
            alt="user"
            className="svg"
            onClick={() =>
              window.open(
                "https://innerstella.notion.site/dda1def259cd4f5cbcd1ca6b229e7f5a?pvs=4"
              )
            }
          />
        </>
      )}
      {page === "mypage" && (
        <>
          <img
            onClick={() => navigate("/")}
            src="assets/svg/ic-outline-back.svg"
            alt="back"
            className="svg"
          />
          <img
            src="assets/svg/ic-outline-logout.svg"
            alt="logout"
            className="svg"
            onClick={() => logout()}
          />
        </>
      )}
      {page === "detail" && (
        <>
          <img
            onClick={() => navigate("/")}
            src="/assets/svg/ic-outline-back.svg"
            alt="back"
            className="svg"
          />
          <div className="row">
            <img
              src="/assets/svg/ic-outline-delete.svg"
              alt="delete"
              className="svg"
              onClick={() => delRec()}
            />
          </div>
        </>
      )}
    </S.Container>
  );
};

export default TopAppBar;
