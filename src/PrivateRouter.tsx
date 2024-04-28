import { Outlet } from "react-router-dom";

import HomePage from "./pages/home";

const PrivateRouter = () => {
  const isLogin = sessionStorage.getItem("firebase:authUser:");

  if (isLogin) {
    return <Outlet />;
  } else {
    return <HomePage />;
  }
};

export default PrivateRouter;
