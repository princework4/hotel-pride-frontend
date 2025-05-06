import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PaymentSuccessful.css";

const PaymentSuccessful = () => {
  const navigate = useNavigate();
  // const { state } = useLocation();

  useEffect(() => {
    // if (!state) {
    //   navigate("/", { replace: true });
    //   return;
    // }

    console.log("in useeffect success");
    const timer = setTimeout(() => {
      navigate("/");
    }, [5000]);

    return () => clearTimeout(timer);
  }, []);

  // if (!state) return null;

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
