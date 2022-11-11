import { Carousel } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import AddReview from "../AddReview/AddReview";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const service = useLoaderData();
  const { _id, name } = service;
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://sk-consultancy-server.vercel.app/reviews/${_id}`)
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      })
      .catch(err => console.error(err))
  }, [_id]);

  return (
    <div>
      <h2 className="text-3xl text-center font-semibold underline mt-16 mb-10">Reviews</h2>
      {
        reviews.length > 0 ?
          <div className="container mx-auto h-[600px] xl:h-[450px] md:h-[450px] py-3">
            <Carousel className="reviews-carousel" slideInterval={5000}>
              {
                reviews.map(review => <ReviewItem
                  key={review._id}
                  review={review}
                />)
              }
            </Carousel>
          </div> :
          <h1 className="text-2xl font-bold text-center mb-26">No Reviews Available</h1>
      }
      <div>
        {
          user ? <AddReview
            user={user}
            id={_id}
            name={name}
          /> :
            <p className="text-center mt-8"><Link className="font-semibold text-blue-700 hover:underline" to="/login">Please login to add a review</Link></p>
        }
      </div>
    </div>
  );
}

export default Reviews;
