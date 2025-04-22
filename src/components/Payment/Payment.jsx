import React, { useContext, useEffect, useState } from "react";
import { createPayment, verifyPayment } from "../../services/Payment";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import {
  bookingConfirmation,
  guestBookingConfirmation,
} from "../../services/Booking";
import { generateRoomBookingListData } from "../../utils";
import { reducerMethods } from "../../context/reducerMethods";
import Loader from "../Loader";

const Payment = ({ totalPrice }) => {
  const { state, dispatch } = useContext(AppContext);
  const {
    checkInDate,
    checkOutDate,
    guestDetails,
    guestOptions,
    isUserLoggedIn,
    loggedInUser,
    selectedRooms,
    tax,
    userDetailsForPayment,
  } = state;
  const [paymentKey, setPaymentKey] = useState(process.env.PAYMENT_KEY);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function proceedWithBookingConfirmation() {
    setIsLoading(true);
    if (isUserLoggedIn) {
      const finalLoggedInBookingDetailsObj = {
        userId: loggedInUser.id,
        hotelId: 1,
        couponCode: "",
        noOfAdults: guestOptions.adults,
        noOfChildrens: guestOptions.children,
        checkInDate,
        checkOutDate,
        paymentType: "PREPAID",
        totalAmount: totalPrice + tax,
        payableAmount: totalPrice + tax,
        roomBookingList: generateRoomBookingListData(selectedRooms),
      };

      const response = await bookingConfirmation(
        finalLoggedInBookingDetailsObj
      );
      if (response.status === 201) {
        // will check
        createPaymentHandler(response);
      }
    } else {
      const finalLoggedInBookingDetailsObj = {
        email: guestDetails.email,
        phone: `${guestDetails.mobile}`,
        fullName: guestDetails.fname + " " + guestDetails.lname,
        hotelId: 1,
        couponCode: "",
        noOfAdults: guestOptions.adults,
        noOfChildrens: guestOptions.children,
        checkInDate,
        checkOutDate,
        paymentType: "PREPAID",
        totalAmount: totalPrice + tax,
        payableAmount: totalPrice + tax,
        roomBookingList: generateRoomBookingListData(selectedRooms),
      };

      const response = await guestBookingConfirmation(
        finalLoggedInBookingDetailsObj
      );
      if (response.status === 201) {
        // will check
        createPaymentHandler(response);
        setIsLoading(false);
      }
    }
  }

  async function proceedWithPaymentVerification(paymentDetails) {
    const response = await verifyPayment(paymentDetails);
    console.log("verified payment :- ", response);

    dispatch({
      type: reducerMethods.setGuestOptions,
      payload: {
        adults: 1,
        children: 0,
        rooms: 1,
      },
    });
    dispatch({ type: reducerMethods.setCheckInDate, payload: null });
    dispatch({ type: reducerMethods.setCheckOutDate, payload: null });
    dispatch({ type: reducerMethods.setSelectedRooms, payload: [] });
    navigate("/");
    // if (response.status === 200) {
    //   navigate("/payment-successful");
    //   // proceedWithBookingConfirmation();
    // } else {
    //   navigate("/payment-failed");
    // }
  }

  async function createPaymentHandler(response) {
    // const data = await createPayment(response.data.bookingNumber);
    // console.log("state from payment :- ", state);
    // // const data = await createPayment(totalPrice + tax);
    // console.log("payment data :- ", data);

    console.log(
      "payment key :- ",
      paymentKey,
      process.env.PAYMENT_KEY,
      `${process.env.PAYMENT_KEY}`
    );
    const options = {
      // key: process.env.PAYMENT_KEY,
      key: "rzp_test_B9mzPUuuN7s5Ng",
      amount: totalPrice + tax,
      currency: "INR",
      name: "Hotel Pride",
      description: "Hotel Pride Room Booking Transaction",
      image: "https://dummyimage.com/100x100/000/fff",
      order_id: response.data.id,
      // redirect: true,
      // callback_url: `http://localhost:5173/payment-successful`,
      handler: function (response) {
        console.log("payment success response :- ", response);
        const paymentDetails = {
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          signature: response.razorpay_signature,
        };

        proceedWithPaymentVerification(paymentDetails);
      },
      modal: {
        confirm_close: true,
        ondismiss: (reasons) => {
          const { reason } = reasons && reasons.error ? reasons.error : {};

          dispatch({
            type: reducerMethods.setGuestOptions,
            payload: {
              adults: 1,
              children: 0,
              rooms: 1,
            },
          });
          dispatch({ type: reducerMethods.setCheckInDate, payload: null });
          dispatch({ type: reducerMethods.setCheckOutDate, payload: null });
          dispatch({ type: reducerMethods.setSelectedRooms, payload: [] });

          if (reason === undefined) {
            console.log("payment cancelled");
            navigate("/");
          } else if (reason === "timeout") {
            console.log("payment timedout");
            navigate("/");
          } else {
            console.log("payment failed");
            navigate("/");
          }
        },
      },
      prefill: {
        name: isUserLoggedIn
          ? loggedInUser?.name
          : guestDetails?.fname + " " + guestDetails?.lname,
        email: isUserLoggedIn ? loggedInUser?.email : guestDetails?.email,
        contact: isUserLoggedIn ? loggedInUser?.mobile : guestDetails?.mobile,
      },
      theme: {
        color: "#b85042",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  }

  useEffect(() => {
    // createPaymentHandler();
    proceedWithBookingConfirmation();
  }, []);

  return <>{isLoading && <Loader />}</>;
};

export default Payment;
