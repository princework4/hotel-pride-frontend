import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  TextField,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HotelIcon from "@mui/icons-material/Hotel";
import { TextFieldStyle } from "../../MUIStyle/TextField";
import dayjs from "dayjs";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { ButtonStyle } from "../../MUIStyle/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateGuestDetails } from "../../features/guest/guestSlice";
import { updateSteppersActiveStep } from "../../features/nonFunctional/nonFunctionalSlice";
import "./GuestDetails.css";

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

const GuestDetails = ({ totalPrice, activeStep, setActiveStep }) => {
  const guestDetailsRedux = useSelector((state) => state.searchReducer);
  const roomRedux = useSelector((state) => state.roomReducer);
  const authRedux = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  function handleFormSubmit(values, { resetForm }) {
    dispatch(updateGuestDetails(values));
    dispatch(updateSteppersActiveStep(3));
    resetForm();
    setActiveStep(activeStep + 1);
  }

  const boxContainerStyle = {
    marginTop: "40px",
    display: "grid",
    gridTemplateColumns: "60% 30%",
    alignItems: "start",
    justifyContent: "space-between",
  };

  const guestDetailsStyle = {
    padding: "25px 25px 15px 25px",
    borderRadius: "20px",
    bgcolor: "background.paper",
    overflow: "auto",
  };

  const paymentSummaryStyle = {
    padding: "25px",
    borderRadius: "20px",
    bgcolor: "background.paper",
    overflow: "auto",
  };

  return (
    <Formik
      initialValues={{
        fname: authRedux.isUserLoggedIn
          ? authRedux.loggedInUser?.name?.split(" ")[0]
          : "",
        lname: authRedux.isUserLoggedIn
          ? authRedux.loggedInUser?.name?.split(" ")[1]
          : "",
        email: authRedux.isUserLoggedIn ? authRedux.loggedInUser?.email : "",
        mobile: authRedux.isUserLoggedIn
          ? authRedux.loggedInUser?.contactNumber
          : "",
        termsAndConditions: false,
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
            </Box>
            <Box className="payment_summary" sx={paymentSummaryStyle}>
              <h3>stay information</h3>
              <div className="payment_summary__container">
                <h4>
                  <CalendarMonthIcon />
                  <span>
                    {dayjs(guestDetailsRedux.checkInDate).format("DD")}{" "}
                    {dayjs(guestDetailsRedux.checkInDate).format("MMMM")}{" "}
                  </span>
                  <span>to</span>
                  <span>
                    {dayjs(guestDetailsRedux.checkOutDate).format("DD")}{" "}
                    {dayjs(guestDetailsRedux.checkOutDate).format("MMMM")}{" "}
                  </span>
                </h4>
                <h4 className="payment_summary__room_details">
                  <HotelIcon />
                  <span>
                    {roomRedux.selectedRooms?.length}{" "}
                    {roomRedux.selectedRooms?.length > 1 ? "rooms" : "room"},{" "}
                    {guestDetailsRedux.guestOptions.adults}{" "}
                    {guestDetailsRedux.guestOptions.adults == 1
                      ? "adult"
                      : "adults"}
                    {guestDetailsRedux.guestOptions.children > 0 &&
                      guestDetailsRedux.guestOptions.children}
                    {guestDetailsRedux.guestOptions.children > 0 &&
                      (guestDetailsRedux.guestOptions.children == 1
                        ? "child"
                        : "children")}
                  </span>
                </h4>
                <ul className="payment_summary__selected_rooms_details">
                  {roomRedux.selectedRooms?.map((room, index) => (
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
                    <span>&#8377; {roomRedux.tax}</span>
                  </li>
                </ul>
                <div className="payment_summary__summed_total_price">
                  <span>Total Price</span>
                  <span>&#8377; {totalPrice + roomRedux.tax}</span>
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
              <Button type="submit" sx={ButtonStyle}>
                Proceed For Payment
              </Button>
            </div>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default GuestDetails;
