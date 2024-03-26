import "./Onboarding.css";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <section className="onboard">
      <dotlottie-player
        src="https://lottie.host/79fb9c8f-fc06-4a28-ad05-b1a11571b00a/VRno4mGwsS.json"
        background="transparent"
        speed="1"
        style={{ width: "320px", height: "320px" }}
        loop
        autoplay
      ></dotlottie-player>

      <h2>Shopping can be so easy</h2>
      <h3>Find your favorite products from all around the world</h3>
      <Link className="btn" to="/home">
        Get Started
      </Link>
    </section>
  );
};

export default Onboarding;
