import { Avatar } from "flowbite-react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ReviewItem = ({review}) => {
  const {reviewText, reviewerName, reviewerEmail, reviewerAvatar} = review;

  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center w-2/3">
        <h1 className="w-full flex text-xl justify-center">
          <FaQuoteLeft className="w-1/6" />
          <span className="mx-2 mt-1">{reviewText}</span>
          <FaQuoteRight className="w-1/6" />
        </h1>
        <Avatar
          className="my-4"
          img={reviewerAvatar}
          rounded={true}
        />
        <h3 className="text-2xl">{reviewerName}</h3>
      </div>
    </div>
  );
}

export default ReviewItem;
