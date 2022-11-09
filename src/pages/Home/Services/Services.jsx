import { useEffect, useState } from "react";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <PhotoProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-5 gap-8">
        {
          services.map(service => <ServiceCard
            service={service}
            key={Math.random()}
          />)
        }
      </div>
      </PhotoProvider>
    </div>
  );
}

export default Services;
