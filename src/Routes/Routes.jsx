import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

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
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'services/:id',
        loader: ({params}) => fetch(`https://sk-consultancy-server.vercel.app/services/${params.id}`),
        element: <ServiceDetails />,
      },
      {
        path: 'my-reviews',
        element: <PrivateRoute><MyReviews /></PrivateRoute>,
      },
      {
        path: 'add-service',
        element: <PrivateRoute><AddService /></PrivateRoute>,
      },
    ]
  }
]);

export default routes;