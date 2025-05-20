import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentSuccessful.css";

const PaymentSuccessful = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, [5000]);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="payment_successful_card">
      <div className="sign_container">
        <i className="checkmark">&#x2713;</i>
      </div>
      <h1>Success</h1>
      <p>
        We received your purchase request
        <br /> we'll be in touch shortly!
      </p>
      <br />
      <p>You'll be redirected shortly to homepage or click the button below</p>
      <button onClick={() => navigate("/")} style={{ marginTop: "10px" }}>
        Home
      </button>
    </div>
  );
};

export default PaymentSuccessful;
