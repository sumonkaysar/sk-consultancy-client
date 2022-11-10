import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import "./Login.css";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const {providerLogin} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
    .then(result => {
      navigate("/")
    })
    .catch(err => console.log(err))
  };

  const handleGithubLogin = () => {
    providerLogin(githubProvider)
    .then(result => {
      navigate("/")
    })
    .catch(err => console.error(err))
  };

  return (
    <div className="container mx-auto py-8">
      <div className="w-96 mx-auto bg-slate-200 p-5 pb-8 rounded-lg">
        <form>
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
              type="email"
              required={true}
            />
          </div>
          <div className="mt-2 mb-4">
            <div className="mb-2 block">
              <Label
                htmlFor="password1"
                value="Your password"
              />
            </div>
            <TextInput
              id="password1"
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
      </div>
    </div>
  );
}

export default Login;
