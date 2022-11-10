import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import "./Login.css";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const {login, providerLogin} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login({email, password})
    .then(result => {
      navigate("/");
    })
    .catch(err => console.error(err));
  }

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
    .then(result => {
      navigate("/");
    })
    .catch(err => console.log(err))
  };

  const handleGithubLogin = () => {
    providerLogin(githubProvider)
    .then(result => {
      navigate("/");
    })
    .catch(err => console.error(err))
  };

  return (
    <div className="container mx-auto py-8">
      <div className="w-96 mx-auto bg-slate-200 p-5 pb-8 rounded-lg">
        <form onSubmit={handleLogin}>
          <h2 className="text-2xl font-semibold text-center">Login</h2>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email"
                value="Your email"
              />
            </div>
            <TextInput
              id="email"
              name="email"
              type="email"
              required={true}
            />
          </div>
          <div className="mt-2 mb-4">
            <div className="mb-2 block">
              <Label
                htmlFor="password"
                value="Your password"
              />
            </div>
            <TextInput
              id="password"
              name="password"
              type="password"
              required={true}
            />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
        <p className="text-center font-semibold text-slate-700 my-3">Or</p>
        <div>
          <Button
          onClick={handleGoogleLogin}
            className="providerLoginBtn w-full"
            outline={true}
            gradientDuoTone="purpleToBlue"
          >
            <FcGoogle className="text-lg" />
            Google
          </Button>
        </div>
        <div className="mt-2">
          <Button
            onClick={handleGithubLogin}
            className="providerLoginBtn w-full"
            outline={true}
            gradientDuoTone="purpleToPink"
          >
            <VscGithub className="text-lg" />
            Github
          </Button>
        </div>
        <p className="text-center text-sm mt-2">Don't have an account? <Link className="text-blue-700 font-semibold hover:underline" to="/signup">Signup Here</Link></p>
      </div>
    </div>
  );
}

export default Login;
