import React, { useContext, useEffect } from "react";
import { createPayment, verifyPayment } from "../../services/Payment";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { bookingConfirmation } from "../../services/Booking";
import { generateRoomBookingListData } from "../../utils";

const Payment = ({ totalPrice }) => {
  const { state, dispatch } = useContext(AppContext);
  const {
    checkInDate,
    checkOutDate,
    isUserLoggedIn,
    loggedInUser,
    selectedRooms,
    tax,
    userDetailsForPayment,
  } = state;
  const navigate = useNavigate();

  async function proceedWithBookingConfirmation() {
    const finalBookingDetailsObj = {
      hotelId: 1,
      couponCode: "",
      checkInDate,
      checkOutDate,
      paymentType: "PREPAID",
      roomBookingList: generateRoomBookingListData(selectedRooms),
    };

    const response = await bookingConfirmation(finalBookingDetailsObj);
    if (response.status === 200) {
      // will check
    }
  }

  async function proceedWithPaymentVerification(paymentDetails) {
    const response = await verifyPayment(paymentDetails);
    if (response.status === 200) {
      navigate("/payment-successful");
      proceedWithBookingConfirmation();
    } else if (/*failure)*/ true) {
      navigate("/payment-failed");
    }
  }

  async function createPaymentHandler() {
    const data = await createPayment(totalPrice + tax);
    console.log("payment data :- ", data);

    const options = {
      key: process.env.PAYMENT_KEY,
      amount: totalPrice + tax,
      currency: "INR",
      name: "Hotel Pride",
      description: "Hotel Pride Room Booking Transaction",
      image: "https://dummyimage.com/100x100/000/fff",
      order_id: data.id,
      //   callback_url: `${process.env.BASE_URL}/${process.env.API_VERSION}/payments/verify`,
      handler: function (response) {
        console.log("payment success response :- ", response);
        const paymentDetails = {
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          signature: response.razorpay_signature,
        };

        proceedWithPaymentVerification(paymentDetails);
      },
      prefill: {
        name: isUserLoggedIn
          ? loggedInUser?.name
          : userDetailsForPayment?.fname + " " + userDetailsForPayment?.lname,
        email: isUserLoggedIn
          ? loggedInUser?.email
          : userDetailsForPayment?.email,
        contact: isUserLoggedIn
          ? loggedInUser?.mobile
          : userDetailsForPayment?.mobile,
      },
      theme: {
        color: "#b85042",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  }

  useEffect(() => {
    createPaymentHandler();
  }, []);

  return <></>;
};

export default Payment;
