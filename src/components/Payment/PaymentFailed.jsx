import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PaymentFailed.css";

const PaymentFailed = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate("/", { replace: true });
      return;
    }
  }, []);

  if (!state) return null;

  return (
    <div className="payment_failed_card">
      <div className="sign_container">
        <i className="checkmark">&#x2717;</i>
      </div>
      <h1>Failed</h1>
      <p>You'll be redirected to home or click the button below</p>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default PaymentFailed;
