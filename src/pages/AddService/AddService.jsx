import { Button, Label, TextInput } from "flowbite-react";
import toast, { Toaster } from 'react-hot-toast';
import useTitle from "../../hooks/UseTitle";

const AddService = () => {
  useTitle("Add Service");

  const handleAddService = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.serviceName.value;
    const img = form.img.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const about = form.about.value;

    const service = {
      name,
      img,
      rating,
      price,
      about,
    }

    fetch("https://sk-consultancy-server.vercel.app/services", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(service),
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          form.reset();
          toast.success("Service added Successfully");
        }
      })
      .catch(err => console.error(err))
  }

  return (
    <div className="container mx-auto py-8">
      <form onSubmit={handleAddService} className="w-96 mx-auto bg-slate-200 p-5 pb-8 rounded-lg drop-shadow-2xl">
        <h2 className="text-2xl font-semibold text-center">Add Service</h2>
        <div className="mb-3">
          <div className="mb-2">
            <Label
              htmlFor="serviceName"
              value="Service Name"
            />
          </div>
          <TextInput
            id="serviceName"
            name="serviceName"
            type="text"
            required={true}
          />
        </div>
        <div className="mb-3">
          <div className="mb-2">
            <Label
              htmlFor="img"
              value="Service Image Link"
            />
          </div>
          <TextInput
            id="img"
            name="img"
            type="text"
            required={true}
          />
        </div>
        <div className="mb-3">
          <div className="mb-2">
            <Label
              htmlFor="rating"
              value="Rating out of 5"
            />
          </div>
          <TextInput
            id="rating"
            name="rating"
            type="text"
            required={true}
          />
        </div>
        <div className="mb-3">
          <div className="mb-2">
            <Label
              htmlFor="price"
              value="Price (USD)"
            />
          </div>
          <TextInput
            id="price"
            name="price"
            type="text"
            required={true}
          />
        </div>
        <div className="mb-3">
          <div className="mb-2">
            <Label
              htmlFor="about"
              value="Details"
            />
          </div>
          <TextInput
            id="about"
            name="about"
            type="text"
            required={true}
          />
        </div>
        <Button className="w-full" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddService;
