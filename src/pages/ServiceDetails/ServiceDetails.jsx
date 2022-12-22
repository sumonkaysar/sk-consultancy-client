import useTitle from "../../hooks/UseTitle";
import Reviews from "./Reviews/Reviews";
import Service from "./Service/Service";
import { Toaster } from 'react-hot-toast';

const ServiceDetails = () => {
  useTitle("Details");

  return (
    <div className="container mx-auto lg:pt-5">
      <Service />
      <Reviews />
    </div>
  );
}

export default ServiceDetails;
