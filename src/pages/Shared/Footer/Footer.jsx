import { FooterComponent } from "flowbite-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Foote = () => {

  return (
    <FooterComponent container={true}>
      <div className="container mx-auto sm:flex sm:items-center sm:justify-between text-center">
        <Link to="/">
          <FooterComponent.Copyright
            by="SK Consultancy™"
            year={2022}
          />
        </Link>
        <div className="mt-4 flex space-x-6 sm:mt-0 justify-center">
          <FooterComponent.Icon
            href="https://github.com/sumonkaysar"
            icon={FaFacebook}
          />
          <FooterComponent.Icon
            href="https://github.com/sumonkaysar"
            icon={FaTwitter}
          />
          <FooterComponent.Icon
            href="https://github.com/sumonkaysar"
            icon={FaGithub}
          />
          <FooterComponent.Icon
            href="https://github.com/sumonkaysar"
            icon={FaLinkedin}
          />
        </div>
      </div>
    </FooterComponent>
  );
}

export default Foote;
