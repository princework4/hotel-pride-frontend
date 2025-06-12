import React, { useEffect, useRef, useState } from "react";
import { createPayment, verifyPayment } from "../../services/Payment";
import { useNavigate } from "react-router-dom";
import {
  bookingConfirmation,
  guestBookingConfirmation,
} from "../../services/Booking";
import { generateRoomBookingListData } from "../../utils";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { updateGuestDetails } from "../../features/guest/guestSlice";
import { resetGuestOptions } from "../../features/search/searchSlice";
import {
  updateAvailableRoomTypes,
  updateSelectedRooms,
} from "../../features/room/roomSlice";
import { toast } from "react-toastify";
import Logo from "../../assets/Logo-Pride.jpg";
import PaymentSuccessful from "./PaymentSuccessful";
import PaymentFailed from "./PaymentFailed";

const Payment = () => {
  const guestDetailsRedux = useSelector((state) => state.searchReducer);
  const roomRedux = useSelector((state) => state.roomReducer);
  const authRedux = useSelector((state) => state.authReducer);
  const guestRedux = useSelector((state) => state.guestReducer);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [paymentSuccessStatus, setPaymentSuccessStatus] = useState(null);
  const navigate = useNavigate();
  const paymentId = useRef(null);
  const paymentMethod = useRef(null);
  const paymentBaseUrl = import.meta.env.VITE_PAYMENT_KEY;

  function resetAllData() {
    dispatch(resetGuestOptions());
    dispatch(updateSelectedRooms([]));
    dispatch(updateAvailableRoomTypes([]));
  }

  async function proceedWithBookingConfirmation() {
    if (authRedux.isUserLoggedIn) {
      const finalLoggedInBookingDetailsObj = {
        userId: authRedux.loggedInUser.id,
        hotelId: 1,
        couponCode: "",
        noOfAdults: guestDetailsRedux.guestOptions.adults,
        noOfChildrens: guestDetailsRedux.guestOptions.children,
        checkInDate: guestDetailsRedux.checkInDate,
        checkOutDate: guestDetailsRedux.checkOutDate,
        paymentType: "PREPAID",
        totalAmount: Number(roomRedux.totalPriceAfterTax),
        payableAmount: Number(roomRedux.totalPriceAfterTax),
        roomBookingList: generateRoomBookingListData(roomRedux.selectedRooms),
      };

      const response = await bookingConfirmation(
        finalLoggedInBookingDetailsObj
      );
      if (response.status === 201) {
        createPaymentForLoggedInUser(response.data.bookingNumber);
      } else {
        setIsLoading(false);
        toast.error("Something went wrong. Please try again later!");
        console.error(response?.message || response?.error);
        navigate("/");
      }
    } else {
      const finalGuestBookingDetailsObj = {
        email: guestRedux.guestDetails.email,
        phone: `${guestRedux.guestDetails.mobile}`,
        fullName:
          guestRedux.guestDetails.fname + " " + guestRedux.guestDetails.lname,
        hotelId: 1,
        couponCode: "",
        noOfAdults: guestDetailsRedux.guestOptions.adults,
        noOfChildrens: guestDetailsRedux.guestOptions.children,
        checkInDate: guestDetailsRedux.checkInDate,
        checkOutDate: guestDetailsRedux.checkOutDate,
        paymentType: "PREPAID",
        totalAmount: Number(roomRedux.totalAmountAfterTax),
        payableAmount: Number(roomRedux.totalAmountAfterTax),
        roomBookingList: generateRoomBookingListData(roomRedux.selectedRooms),
      };

      const response = await guestBookingConfirmation(
        finalGuestBookingDetailsObj
      );
      if (response.status === 201) {
        createPaymentHandler(response);
      } else {
        setIsLoading(false);
        toast.error("Something went wrong. Please try again later!");
        console.error(response?.message || response?.error);
        navigate("/");
      }
    }
  }

  async function proceedWithPaymentVerification(paymentDetails) {
    const response = await verifyPayment(paymentDetails);
    if (response.status !== 200) {
      setPaymentSuccessStatus(false);
      toast.error("Something went wrong. Please try again later!");
      console.error(response?.message || response?.error);
    } else {
      setPaymentSuccessStatus(true);
      toast.success("Payment Success. Booking Details will be mailed to you.");
      resetAllData();
    }
  }

  async function createPaymentForLoggedInUser(bookingNumber) {
    const response = await createPayment(bookingNumber);
    if (response.status === 200) {
      createPaymentHandler(response);
    } else {
      toast.error("Something went wrong. Please try again later!");
      console.error(response?.message || response?.error);
      resetAllData();
      navigate("/");
    }
  }

  async function createPaymentHandler(response) {
    const options = {
      key: paymentBaseUrl,
      amount: Number(roomRedux.totalPriceAfterTax),
      currency: "INR",
      name: "Hotel Pride",
      description: "Hotel Pride Room Booking Transaction",
      image: Logo,
      order_id: response.data.id,
      handler: function (response) {
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
          dispatch(resetGuestOptions());
          dispatch(updateSelectedRooms([]));

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
        name: authRedux.isUserLoggedIn
          ? authRedux.loggedInUser?.name
          : guestRedux.guestDetails?.fname +
            " " +
            guestRedux.guestDetails?.lname,
        email: authRedux.isUserLoggedIn
          ? authRedux.loggedInUser?.email
          : guestRedux.guestDetails?.email,
        contact: authRedux.isUserLoggedIn
          ? authRedux.loggedInUser?.mobile
          : guestRedux.guestDetails?.mobile,
      },
      theme: {
        color: "#c4b991",
      },
    };

    const razor = new window.Razorpay(options);
    setIsLoading(false);
    razor.on("payment.submit", (response) => {
      paymentMethod.current = response.method;
    });
    razor.on("payment.failed", (response) => {
      setPaymentSuccessStatus(false);
      paymentId.current = response.error.metadata.payment_id;
      console.log("Payment Failure Response :- ", response);
      console.log("Payment Failure ID :- ", paymentId.current);
      toast.error("Something went wrong. Please try again later!");
      console.error(response.error.reason);
      resetAllData();
    });
    razor.open();
  }

  useEffect(() => {
    proceedWithBookingConfirmation();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : paymentSuccessStatus && paymentSuccessStatus === true ? (
        <PaymentSuccessful />
      ) : (
        paymentSuccessStatus &&
        paymentSuccessStatus === false && <PaymentFailed />
      )}
    </>
  );
};

export default Payment;
