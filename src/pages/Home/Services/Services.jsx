import { useEffect, useState } from "react";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";
import { PhotoProvider} from 'react-photo-view';
import { Link } from "react-router-dom";
import 'react-photo-view/dist/react-photo-view.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://sk-consultancy-server.vercel.app/services?limit=3')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="mt-16">
      <PhotoProvider>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-8">
          {
            services.map(service => <ServiceCard
              service={service}
              key={service._id}
            />)
          }
        </div>
      </PhotoProvider>
      <p className="text-center mt-6 pb-10">
        <Link className="underline text-blue-600" to='/services'>See All</Link>
      </p>
    </div>
  );
}

export default Services;
