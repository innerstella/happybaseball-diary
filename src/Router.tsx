import { BrowserRouter, Route, Routes } from "react-router-dom";
import LotteryPage from "./pages/lottery";
import HomePage from "./pages/home";
import CreatePage from "./pages/create/Create";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />

        <Route path="/lottery" element={<LotteryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
