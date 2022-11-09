import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo/logo.png';

const Header = () => {
  const style = {
    color: '#1a56db'
  }

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
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              SK Consultancy
            </span>
          </Link>
          <div className="flex md:order-2">
            <Button>
              Logout
            </Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <NavLink
              to="/"
              style={(isActive) => isActive ? style : ''}
            >
              Home
            </NavLink>
            <NavLink to="services">
              Services
            </NavLink>
            <NavLink to="login">
              Login
            </NavLink>
            <NavLink to="profile">
              Profile
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
