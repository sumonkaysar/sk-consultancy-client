import { Button, Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewTr from "./MyReviewTr/MyReviewTr";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://sk-consultancy-server.vercel.app/my-reviews/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyReviews(data)
        console.log(data);
      })
      .catch(err => console.error(err))
  }, [user?.email]);

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
              />)
            }
          </Table.Body>
        </Table> : 
        <div className="w-full pt-[62px] mt-[-172px] mb-[-62px] h-screen flex items-center justify-center">
          <h1 className="text-center font-semibold text-xl md:text-4xl">No reviews were added</h1>
        </div>
      }
    </div>
  );
}

export default MyReviews;
