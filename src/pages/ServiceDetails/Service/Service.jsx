import { useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Service = () => {
  const service = useLoaderData();
  const { name, img, rating, price, about } = service;

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mb-16 underline">Details about {name}</h1>
      <div className="lg:flex gap-8 mx-5 pb-12">
      <h2 className="lg:hidden text-3xl font-semibold mb-2">{name}</h2>
      <img className="w-full lg:w-1/2 xl:w-1/3" src={img} alt="" />
      <div>
        <h2 className="hidden lg:block text-3xl font-semibold mb-2">{name}</h2>
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
    </div>
    </div>
  );
}

export default Service;
