import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HotelIcon from "@mui/icons-material/Hotel";
import { TextFieldStyle } from "../../MUIStyle/TextField";
import { AppContext } from "../../context/AppContext";
import dayjs from "dayjs";
import "./GuestDetails.css";
import { reducerMethods } from "../../context/reducerMethods";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { ButtonStyle } from "../../MUIStyle/Button";
import Payment from "../Payment/Payment";
import { generateRoomBookingListData } from "../../utils";
import { bookingConfirmation } from "../../services/Booking";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  fname: Yup.string()
    .min(3, "Too Short!")
    .max(40, "Too Long!")
    .required("First Name is required"),
  lname: Yup.string()
    .min(3, "Too Short!")
    .max(40, "Too Long!")
    .required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Invalid mobile number"),
  termsAndConditions: Yup.boolean()
    .required("You must accept the Terms and Conditions to proceed.")
    .oneOf([true], "You must accept the Terms and Conditions to proceed."),
});

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  mobile: "",
  termsAndConditions: false,
};

const GuestDetails = ({ totalPrice, activeStep, setActiveStep }) => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  // const { ,  } = state;
  const [isDisabled, setIsDisabled] = useState(true);
  // const [initialValues, setInitialValues] = useState({
  //   fname: "",
  //   lname: "",
  //   email: "",
  //   mobile: "",
  //   termsAndConditions: false,
  // });
  const {
    checkInDate,
    checkOutDate,
    guestOptions,
    isUserLoggedIn,
    loggedInUser,
    selectedRooms,
    tax,
  } = state;

  // useEffect(() => {
  //   if (isUserLoggedIn) {
  //     // const val = {
  //     // fname: loggedInUser?.name?.split(" ")[0],
  //     // lname: loggedInUser?.name?.split(" ")[1],
  //     // email: loggedInUser?.email,
  //     // mobile: loggedInUser?.mobile,
  //     // };
  //     // setInitialValues(val);
  //     console.log("here");
  //     console.log("isUserLoggedIn");
  //     initialValues.fname = loggedInUser?.name?.split(" ")[0];
  //     initialValues.lname = loggedInUser?.name?.split(" ")[1];
  //     initialValues.email = loggedInUser?.email;
  //     initialValues.mobile = loggedInUser?.contactNumber;
  //     console.log("initialValues", initialValues);
  //   }
  // }, []);

  // only for testing
  async function proceedWithBookingConfirmation(values) {
    const finalBookingDetailsObj = {
      // userId: isUserLoggedIn ? loggedInUser.email : values.email,
      userId: 1,
      hotelId: 1,
      couponCode: "",
      checkInDate,
      checkOutDate,
      paymentType: "PREPAID",
      roomBookingList: generateRoomBookingListData(selectedRooms),
    };
    console.log("finalBookingDetailsObj :- ", finalBookingDetailsObj);
    const response = await bookingConfirmation(finalBookingDetailsObj);
    if (response.status === 200) {
      // will check
      toast.success("Booking successful. You'll get confirmation on email.");
      navigate("/");
    }
  }

  function handleFormSubmit(values, { resetForm }) {
    // setIsDisabled(false);
    dispatch({
      type: reducerMethods.setUserDetailsForPayment,
      payload: values,
    });
    resetForm();
    setActiveStep(activeStep + 1);
    dispatch({
      type: reducerMethods.setSteppersActiveStep,
      payload: 3,
    });
    // <Payment totalPrice={totalPrice} tax={tax} values={values} />;

    // only for testing
    proceedWithBookingConfirmation(values);
  }

  const handleClick = () => {
    setActiveStep(activeStep + 1);
    dispatch({
      type: reducerMethods.setSteppersActiveStep,
      payload: 3,
    });
  };

  const boxContainerStyle = {
    marginTop: "40px",
    display: "grid",
    gridTemplateColumns: "60% 30%",
    // gap: "40px",
    alignItems: "start",
    justifyContent: "space-between",
  };

  const guestDetailsStyle = {
    // width: "55%",
    // height: "auto",
    padding: "25px 25px 15px 25px",
    // border: "none",
    borderRadius: "20px",
    // marginTop: "40px",
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    bgcolor: "background.paper",
    // boxShadow: 24,
    overflow: "auto",
    // transform: "translate(-50%, -50%)",
    // maxWidth: 400,
    // minWidth: 300,
    // p: 4,
  };

  const paymentSummaryStyle = {
    // width: "30%",
    // height: "auto",
    padding: "25px",
    // border: "none",
    borderRadius: "20px",
    // margin: "40px 0 0 30px",
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    bgcolor: "background.paper",
    // boxShadow: 24,
    overflow: "auto",
    // transform: "translate(-50%, -50%)",
    // maxWidth: 400,
    // minWidth: 300,
    // p: 4,
  };

  return (
    <Formik
      initialValues={{
        fname: isUserLoggedIn ? loggedInUser?.name?.split(" ")[0] : "",
        lname: isUserLoggedIn ? loggedInUser?.name?.split(" ")[1] : "",
        email: isUserLoggedIn ? loggedInUser?.email : "",
        mobile: isUserLoggedIn ? loggedInUser?.contactNumber : "",
      }}
      onSubmit={handleFormSubmit}
      validationSchema={validationSchema}
      enableReinitialize={true}
    >
      {({
        values,
        handleSubmit,
        touched,
        errors,
        handleChange,
        handleBlur,
        setFieldValue,
        isSubmitting,
        isValid,
        dirty,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Box sx={boxContainerStyle} className="guest_details_container">
            <Box className="guest_details" sx={guestDetailsStyle}>
              <h3>guest details</h3>
              <FormControl
                className="form_field"
                sx={{ m: 1, minWidth: 120, width: "47%" }}
              >
                <TextField
                  type="text"
                  name="fname"
                  label="First Name *"
                  variant="outlined"
                  value={values.fname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.fname && errors.fname)}
                  helperText={touched.fname && errors.fname}
                  sx={TextFieldStyle}
                />
              </FormControl>
              <FormControl
                className="form_field"
                sx={{ m: 1, minWidth: 120, width: "47%" }}
              >
                <TextField
                  type="text"
                  name="lname"
                  label="Last Name *"
                  variant="outlined"
                  value={values.lname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.lname && errors.lname)}
                  helperText={touched.lname && errors.lname}
                  sx={TextFieldStyle}
                />
              </FormControl>
              <FormControl
                className="form_field"
                sx={{ m: 1, minWidth: 120, width: "47%" }}
              >
                <TextField
                  type="email"
                  name="email"
                  label="Email *"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  sx={TextFieldStyle}
                />
              </FormControl>
              <FormControl
                className="form_field"
                sx={{ m: 1, minWidth: 120, width: "47%" }}
              >
                <TextField
                  type="number"
                  name="mobile"
                  label="Mobile Number *"
                  variant="outlined"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.mobile && errors.mobile)}
                  helperText={touched.mobile && errors.mobile}
                  sx={TextFieldStyle}
                />
              </FormControl>
              <FormControl
                className="special_form_field"
                sx={{ m: 1, minWidth: 120, width: "97%" }}
              >
                <TextField
                  type="text"
                  name="specialRequest"
                  label="Special Request"
                  variant="outlined"
                  sx={TextFieldStyle}
                />
              </FormControl>
              <FormControl className="terms_and_conditions">
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        setFieldValue("termsAndConditions", e.target.checked);
                      }}
                      name="termsAndConditions"
                      checked={values.termsAndConditions}
                      style={{
                        color: "#b85042",
                      }}
                    />
                  }
                  label={
                    <span>
                      I have read the{" "}
                      <span className="terms">terms & conditions</span>
                    </span>
                  }
                />
                <FormHelperText style={{ color: "red" }}>
                  {touched.termsAndConditions && errors.termsAndConditions
                    ? touched.termsAndConditions && errors.termsAndConditions
                    : " "}
                </FormHelperText>
              </FormControl>
              {/* <div className="terms_and_conditions">
                <input type="checkbox" name="terms_and_conditions" id="" />
                <span>
                  I have read the{" "}
                  <span className="terms">terms & conditions</span>
                </span>
              </div> */}
            </Box>
            <Box className="payment_summary" sx={paymentSummaryStyle}>
              <h3>stay information</h3>
              <div className="payment_summary__container">
                <h4>
                  <CalendarMonthIcon />
                  {/* <span>{new Date(checkInDate?.$d)}</span>
              <span>{new Date(checkOutDate?.$d)}</span> */}
                  <span>
                    {dayjs(checkInDate).format("DD")}{" "}
                    {dayjs(checkInDate).format("MMMM")}{" "}
                    {/* {dayjs(checkInDate).format("YY")} */}
                  </span>
                  <span>to</span>
                  <span>
                    {dayjs(checkOutDate).format("DD")}{" "}
                    {dayjs(checkOutDate).format("MMMM")}{" "}
                    {/* {dayjs(checkOutDate).format("YY")} */}
                  </span>
                </h4>
                <h4 className="payment_summary__room_details">
                  <HotelIcon />
                  <span>
                    {selectedRooms?.length}{" "}
                    {selectedRooms?.length > 1 ? "rooms" : "room"},{" "}
                    {guestOptions.adults}{" "}
                    {guestOptions.adults == 1 ? "adult" : "adults"}
                    {guestOptions.children > 0 && guestOptions.children}
                    {guestOptions.children > 0 &&
                      (guestOptions.children == 1 ? "child" : "children")}
                  </span>
                </h4>
                <ul className="payment_summary__selected_rooms_details">
                  {selectedRooms?.map((room, index) => (
                    <li key={index}>
                      <h4>{`Room ${index + 1}`}</h4>
                      <span>{room?.roomType}</span>
                      <span>
                        {room.isBreakfastIncluded
                          ? "Breakfast Included"
                          : "Breakfast Excluded"}
                      </span>
                      <div className="payment_summary__price">
                        <span>Price</span>
                        <span>&#8377; {room?.price}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <ul className="payment_summary__total_price">
                  <li>
                    <span>Sub Total</span>
                    <span>&#8377; {totalPrice}</span>
                  </li>
                  <li>
                    <span>Taxes</span>
                    <span>&#8377; {tax}</span>
                  </li>
                </ul>
                <div className="payment_summary__summed_total_price">
                  <span>Total Price</span>
                  <span>&#8377; {totalPrice + tax}</span>
                </div>
              </div>
            </Box>
            <div
              className="payment_button"
              style={{
                marginTop: "-20px",
                gridRowStart: 2,
                textAlign: "center",
              }}
            >
              <Button
                // className={isDisabled ? "disabled-payment-btn" : ""}
                type="submit"
                // disabled={isDisabled}
                // disabled={isSubmitting}
                sx={ButtonStyle}
              >
                Proceed For Payment
              </Button>
              {/* <button type="submit" >Proceed For Payment</button> */}
            </div>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default GuestDetails;
