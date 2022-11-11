import useTitle from "../../hooks/UseTitle";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";

const Home = () => {
  useTitle("Home");

  return (
    <div className="container mx-auto">
      <Banner />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
