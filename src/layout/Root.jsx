import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";

const Root = () => {

  return (
    <div>
      <Header />
      <div className="mt-28 mb-12">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
