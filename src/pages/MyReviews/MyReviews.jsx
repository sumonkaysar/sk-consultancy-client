import { Button, Modal, Table, Textarea } from "flowbite-react";
import { ModalHeader } from "flowbite-react/lib/esm/components/Modal/ModalHeader";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/UseTitle";
import MyReviewTr from "./MyReviewTr/MyReviewTr";

const MyReviews = () => {
  useTitle("My Reviews");
  const [reviewedId, setReviewedId] = useState(null);
  const [reviewedService, setReviewedService] = useState(null);
  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [reviewedText, setReviewedText] = useState(null);
  const [myReviews, setMyReviews] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://sk-consultancy-server.vercel.app/my-reviews/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyReviews(data);
      })
      .catch(err => console.error(err))
  }, [user?.email]);

  const handleDelete = (id, serviceName) => {
    setReviewedService(serviceName);
    setShow(true);
    setReviewedId(id);
  }

  const confirmDelete = (proceed) => {
    if (proceed) {
      setShow(false);

      fetch(`http://localhost:5000/my-reviews/${reviewedId}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            const remaining = myReviews.filter(review => review._id !== reviewedId);
            setMyReviews(remaining);
            setShowSuccess(true);
          }
        })
        .catch(err => console.error(err));
    } else {
      setShow(false);
    }
  }

  const handleUpdate = (id, reviewText) => {
    setReviewedText(reviewText);
    setShowUpdate(true);
    setReviewedId(id);
  }

  const updateReview = e => {
    e.preventDefault();

    const reviewText = e.target.reviewText.value;
    if (reviewText === reviewedText) {
      toast.error("Please Change the text to Update");
      return;
    }
    setShowUpdate(false);

    fetch(`http://localhost:5000/my-reviews/${reviewedId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({reviewText})
    })
    .then(res => res.json())
    .then(data => {
      if (data.modifiedCount > 0) {
        toast.success("Updated Successfully");
      }
    })
    .catch(err => console.error(err));
  }

  return (
    <div className="container mx-auto">
      {myReviews.length > 0 ?
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell>
              Service
            </Table.HeadCell>
            <Table.HeadCell>
              Review
            </Table.HeadCell>
            <Table.HeadCell>
              Action
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {
              myReviews.map(review => <MyReviewTr
                key={review._id}
                review={review}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />)
            }
          </Table.Body>
        </Table> :
        <div className="w-full pt-[62px] mt-[-172px] mb-[-62px] h-screen flex items-center justify-center">
          <h1 className="text-center font-semibold text-xl md:text-4xl">No reviews were added</h1>
        </div>
      }
      <div>
        <Modal
          show={show}
          size="md"
          popup={true}
          onClose={() => setShow(false)}
          className="h-[100vh]"
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <FaInfoCircle className="text-red-700 mx-auto text-5xl mb-4" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this service: {reviewedService}?
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="failure"
                  onClick={() => confirmDelete(true)}
                >
                  Yes, I'm sure
                </Button>
                <Button
                  color="gray"
                  onClick={() => confirmDelete(false)}
                >
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <div>
        <Modal
          show={showSuccess}
          size="md"
          popup={true}
          onClose={() => setShowSuccess(false)}
          className="h-[100vh]"
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <FaCheckCircle className="text-green-700 mx-auto text-5xl mb-4" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Deleted Successfully!
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => setShowSuccess(false)}
                >
                  Done
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <div>
        <Modal
          show={showUpdate}
          size="md"
          popup={true}
          onClose={() => setShowUpdate(false)}
          className="h-[100vh]"
        >
          <ModalHeader />
          <Modal.Body>
            <h1 className="text-center text-xl mb-4 font-semibold">Update Review</h1>
              <form onSubmit={updateReview}>
                <div>
                  <Textarea
                    id="reviewText"
                    name="reviewText"
                    placeholder="Write here"
                    required={true}
                    rows={4}
                    defaultValue={reviewedText}
                  />
                </div>
                <div className="flex gap-3 mt-3">
                <Button type="submit">
                  Update
                </Button>
                <Button onClick={() => setShowUpdate(false)} color="light" type="button">
                  cancel
                </Button>
                </div>
              </form>
          </Modal.Body>
        </Modal>
      </div>
      <Toaster />
    </div>
  );
}

export default MyReviews;
