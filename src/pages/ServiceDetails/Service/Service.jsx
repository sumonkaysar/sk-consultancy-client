import { useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Service = () => {
  const service = useLoaderData()
  const { name, img, rating, price, about } = service;

  return (
    <div className="w-10/12 sm:w-4/5 md:w-1/2 mx-auto pb-12">
      <h2 className="text-3xl font-semibold mb-2">{name}</h2>
      <img className="w-full" src={img} alt="" />
      <p className="mt-3">{about}</p>
      <div className="flex justify-between mt-3">
        <p>
          <span className="text-xl">Price: </span>
          <span className="text-2xl font-bold">${price}</span>
        </p>
        <div className="flex items-center">
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
      </div>
    </div>
  );
}

export default Service;
