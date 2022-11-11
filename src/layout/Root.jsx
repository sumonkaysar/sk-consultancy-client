import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";

const Root = () => {

  return (
    <div>
      <Header />
      <div className="pt-28 pb-12 bg-slate-200">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
