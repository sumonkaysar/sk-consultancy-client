import { Button, Label, Textarea } from "flowbite-react";
import toast from 'react-hot-toast';

const AddReview = ({user, id, name}) => {

  const handleReviewSubmit = e => {
    e.preventDefault();
    const reviewText = e.target.review.value;
    const reviewerDisplayName = user?.displayName;
    const reviewerEmail = user?.email;
    const reviewerAvatar = user?.photoURL;

    const review = {
      reviewText,
      reviewerDisplayName,
      reviewerEmail,
      reviewerAvatar,
      serviceId: id,
      serviceName: name,
    }
    
    fetch("https://sk-consultancy-server.vercel.app/add-review", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review),
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        e.target.reset();
        toast.success("Review added Successfully");
      }
    })
    .catch(err => console.error(err));
  }

  return (
    <div className="w-96 mx-auto bg-slate-200 p-5 pb-8 rounded-lg drop-shadow-2xl mt-24 mb-12">
      <form onSubmit={handleReviewSubmit}>
        <h2 className="text-2xl font-semibold text-center mb-4">Add a Review</h2>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="review"
              value="Your Review:"
            />
          </div>
          <Textarea
            id="review"
            placeholder="Write here..."
            required={true}
            rows={4}
          />
        </div>
        <Button className="w-full mt-3" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddReview;
