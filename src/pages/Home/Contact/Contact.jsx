import { Link } from "react-router-dom";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import logo from "../../../assets/logo/logo.png";
import { Button, Label, Textarea, TextInput } from "flowbite-react";

const Contact = () => {

  return (
    <div className="mx-5 pb-10">
      <h3 className="text-center text-xl md:text-3xl font-semibold underline mt-28 mb-16">Contact</h3>
      <div className="sm:flex w-full">
        <div className="flex-1 mb-12 sm:mb-0">
          <Link className="flex items-center gap-4">
            <img className="w-14" src={logo} alt="" />
            <span className="font-semibold text-3xl">SK Consultancy</span>
          </Link>
          <div className="flex items-center gap-2 mt-5 pl-10 sm:pl-0">
            <MdLocationPin className="text-3xl" />
            <div>
              <p className="">Panchdona, Narsingdi</p>
              <p>Bangladesh</p>
            </div>
          </div>
          <div className="flex gap-2 mt-6 pl-10 sm:pl-0">
            <MdPhone className="text-2xl" />
            <a href="tel:+8801828008748">+8801828008748</a>
          </div>
          <div className="flex gap-2 mt-1 pl-10 sm:pl-0">
            <MdEmail className="text-2xl" />
            <a href="mail:hemon.hasan123@gmail.com">hemon.hasan123@gmail.com</a>
          </div>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="flex w-full gap-4">
              <TextInput
                className="flex-1"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Your First Name"
                required={true}
              />
              <TextInput
                className="flex-1"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Your Last Name"
                required={true}
              />
            </div>
            <div>
              <TextInput
                id="email"
                type="email"
                placeholder="Your Email"
                required={true}
              />
            </div>
            <div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required={true}
                rows={4}
              />
            </div>
            <Button type="submit">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
