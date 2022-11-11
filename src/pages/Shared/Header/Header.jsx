import { Button, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo/logo.png';
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(result => {
        console.log("Logged Out");
      })
      .catch(err => console.error(err))
  };

  // const style = {
  //   color: '#1a56db'
  // }

  return (
    <div className="bg-white fixed top-0 w-full z-20">
      <div className="container mx-auto">
        <Navbar
          fluid={true}
          rounded={true}
        >
          <Link className="flex items-center" to="/">
            <img
              src={logo}
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              SK Consultancy
            </span>
          </Link>
          <div className="flex md:order-2">
            {
              user?.uid &&
              <Button className="hidden md:block" onClick={handleLogout}>
                Logout
              </Button>
            }
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <NavLink
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              to="/blog"
            >
              Blog
            </NavLink>
            {
              user?.uid ? <>
                <NavLink to="/my-reviews">
                  My Reviews
                </NavLink>
                <NavLink to="/add-service">
                  Add Service
                </NavLink>
                <div className="mt-1 md:hidden">
                  <Button size="xs" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              </> :
                <NavLink to="/login">
                  Login
                </NavLink>
            }
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
