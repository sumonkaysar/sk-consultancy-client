import { Button, Table } from "flowbite-react";

const MyReviewTr = ({review}) => {
  const {_id, reviewText, serviceName} = review;

  const handleDelete = (_id) => {
    fetch('https://sk-consultancy-server.vercel.app/my-reviews/${_id}', {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
  }

  return (
    <Table.Row className="bg-white">
      <Table.Cell className="font-medium text-gray-900">{serviceName}</Table.Cell>
      <Table.Cell className="w-7/12">{reviewText}</Table.Cell>
      <Table.Cell className="flex gap-4">
        <Button size="sm">Edit</Button>
        <Button size="sm" color="failure" onClick={() => handleDelete(_id)}>Delete</Button>
      </Table.Cell>
    </Table.Row>
  );
}

export default MyReviewTr;
