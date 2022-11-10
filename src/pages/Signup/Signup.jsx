import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Signup = () => {
  const {signup, loading} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signup({email, password})
    .then(result => {
      console.log(result.user);
      navigate("/");
    })
    .catch(err => console.error(err))
  }

  return (
    <div className="container mx-auto py-8">
      <div className="w-96 mx-auto bg-slate-200 p-5 pb-8 rounded-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-center">Signup</h2>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="name"
                value="Your name"
              />
            </div>
            <TextInput
              id="name"
              type="name"
              name="text"
              required={true}
            />
          </div>
          <div className="mt-2">
            <div className="mb-2 block">
              <Label
                htmlFor="email"
                value="Email"
              />
            </div>
            <TextInput
              id="email"
              type="email"
              name="email"
              required={true}
            />
          </div>
          <div className="mt-2">
            <div className="mb-2 block">
              <Label
                htmlFor="mobile"
                value="Mobile Number"
              />
            </div>
            <TextInput
              id="mobile"
              type="text"
              name="mobile"
            />
          </div>
          <div className="mt-2 mb-4">
            <div className="mb-2 block">
              <Label
                htmlFor="password1"
                value="Password"
              />
            </div>
            <TextInput
              id="password1"
              type="password"
              name="password"
              required={true}
            />
          </div>
          <Button className="w-full" type="submit">
            {
              loading ? <>
              <Spinner
                size="sm"
                light={true}
                className="mr-2"
              />
              loading ...</> : "Signup"
            }
          </Button>
        </form>
        <p className="text-center text-sm mt-2">Already have an account? <Link className="text-blue-700 font-semibold hover:underline" to="/login">Login Here</Link></p>
      </div>
    </div>
  );
}

export default Signup;
