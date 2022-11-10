import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'services/:id',
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
        element: <ServiceDetails />,
      },
    ]
  }
]);

export default routes;