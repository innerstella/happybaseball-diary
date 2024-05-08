import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import CreatePage from "./pages/create/Create";
import MyPage from "./pages/mypage";
import DetailPage from "./pages/detail";
import GlobalStyles from "./GlobalStyles";
import WeatherPage from "./pages/weather";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
