import { BrowserRouter, Route, Routes } from "react-router-dom";
import LotteryPage from "./pages/lottery";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LotteryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
