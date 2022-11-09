import { Card } from "flowbite-react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const { name, img, rating, price, about } = service;

  return (
      <Card
      className="serviceCard relative"
      imgAlt={name}
      imgSrc={img}
    >
      <PhotoView className="w-1/2" src={img}>
        <div className="viewFullImage w-full absolute top-0 left-0"></div>
      </PhotoView>
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-0">
        {name}
      </h5>
      <div className="text-gray-900 dark:text-white">
        <span className="text-2xl">Price: </span>
        <span className="text-3xl font-bold">
          ${price}
        </span>
      </div>
      <div>
        {about.length > 100 ? about.slice(0, 99) + "..." : about}
      </div>
      <div className="mt-2.5 mb-5 flex items-center">
        {
          [...Array(Math.floor(rating)).keys()].map((i) =>
            <FaStar className="text-yellow-300" key={i} />
          )
        }
        {
          (rating - Math.floor(rating)).toFixed(1) > 0 && <FaStarHalfAlt className="text-yellow-300" />
        }
        <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
          {rating}
        </span>
      </div>
      <div >
        <a
          to="#"
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View Details
        </a>
      </div>
    </Card>
  );
}

export default ServiceCard;
