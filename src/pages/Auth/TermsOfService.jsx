import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TermsOfService = ({ setTermsAgreed }) => {
  const [agreed, setAgreed] = useState(false);

  const handleAgreeChange = () => {
    setAgreed(!agreed);
  };

  const handleProceed = () => {
    if (agreed) {
      setTermsAgreed(true);
      alert(
        "You have agreed to the Terms & Conditions. Proceed back to the signup page."
      );
    } else {
      alert("Please agree to the Terms & Conditions before proceeding.");
    }
  };

  return (
    <div className="container my-4">
      <div className="p-4 bg-[#023047] border rounded-lg">
        <h2 className="text-center text-2xl font-bold mb-4 terms text-[#FB8500]">Terms of Service</h2>
        <p className="mb-4 text">
          Welcome to Ethereal Vows! These terms and conditions outline the rules and regulations for the use of our wedding planning services.
        </p>
        <h3 className="text-xl font-bold mb-2 terms text-[#FB8500]">Agreement to Terms</h3>
        <p className="mb-4 p-4 text">
          By accessing and using ourwebsite and services, you agree to be bound by these terms of service. If you do not agree with any part of these terms, please do not use our services.
        </p>

        

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="agreementCheck"
            checked={agreed}
            onChange={handleAgreeChange}
          />
          <label className="form-check-label text" htmlFor="agreementCheck">
            I agree to the Terms &amp; Conditions
          </label>
        </div>
        <Link to="/signup">
          <button
            className={`btn btn-primary mt-3 ${agreed ? "" : "disabled"}`}
            onClick={handleProceed}
            disabled={!agreed}
          >
            Proceed to Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TermsOfService;
