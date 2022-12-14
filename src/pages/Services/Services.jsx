import { useEffect, useState } from 'react';
import { PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { MoonLoader } from 'react-spinners';
import useTitle from '../../hooks/UseTitle';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
  const [loading, setLoading] = useState(true);
  useTitle("Services");
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://sk-consultancy-server.vercel.app/services')
      .then(res => res.json())
      .then(data => {
        setServices(data)
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto pb-12">
      <h2 className="text-2xl text-gray-800 font-semibold text-center underline mb-10">Services</h2>
      {loading ?
        <MoonLoader color='#00138d' className='mx-auto' />
        :
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
      }
    </div>
  );
}

export default Services;
