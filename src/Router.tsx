import { BrowserRouter, Route, Routes } from "react-router-dom";
import LotteryPage from "./pages/lottery";
import HomePage from "./pages/home";
import CreatePage from "./pages/create/Create";
import LoginPage from "./pages/login";
import MyPage from "./pages/mypage";
import DetailPage from "./pages/detail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
