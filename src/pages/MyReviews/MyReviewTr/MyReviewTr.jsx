import { Button, Table } from "flowbite-react";

const MyReviewTr = ({review, handleDelete}) => {
  const {_id, reviewText, serviceName} = review;

  return (
    <Table.Row className="bg-white">
      <Table.Cell className="font-medium text-gray-900">{serviceName}</Table.Cell>
      <Table.Cell className="w-7/12">{reviewText}</Table.Cell>
      <Table.Cell className="flex gap-4">
        <Button size="sm">Edit</Button>
        <Button size="sm" color="failure" onClick={() => handleDelete(_id, serviceName)}>Delete</Button>
      </Table.Cell>
    </Table.Row>
  );
}

export default MyReviewTr;
