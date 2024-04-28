import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import CreatePage from "./pages/create/Create";
import MyPage from "./pages/mypage";
import DetailPage from "./pages/detail";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route element={<PrivateRouter />}> */}
        <Route path="/create" element={<CreatePage />} />
        {/* </Route> */}
        {/* <Route element={<PrivateRouter />}> */}
        {/* <Route path="/mypage" element={<MyPage />} /> */}
        {/* </Route> */}
        {/* <Route element={<PrivateRouter />}> */}
        <Route path="/detail/:id" element={<DetailPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
