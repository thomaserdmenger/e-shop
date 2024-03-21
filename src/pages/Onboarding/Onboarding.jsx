import "./Onboarding.css";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <section className="onboard">
      <img src="/images/onboarding.png" alt="women" />
      <h2>Biggest Sell at Your Fingerprint</h2>
      <h3>Find your best products from popular shop without any delay</h3>
      <Link className="btn" to="/">
        Get Started
      </Link>
    </section>
  );
};

export default Onboarding;
