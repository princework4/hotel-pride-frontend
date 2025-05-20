import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentFailed.css";

const PaymentFailed = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, [5000]);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="payment_failed_card">
      <div className="sign_container">
        <i className="checkmark">&#x2717;</i>
      </div>
      <h1>Failed</h1>
      <p>You'll be redirected to homepage or click the button below</p>
      <button onClick={() => navigate("/")} style={{ marginTop: "10px" }}>
        Home
      </button>
    </div>
  );
};

export default PaymentFailed;
