import * as React from "react";

// MUI imports
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { TextFieldStyle } from "../../MUIStyle/TextField";
import "./Signup.css";
import { ButtonStyle } from "../../MUIStyle/Button";
import * as Validation from "../../validation/Validation";
import { AppContext } from "../../context/AppContext";
import { reducerMethods } from "../../context/reducerMethods";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../Services";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(40, "Too Long!")
    .required("Fullname is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Invalid mobile number"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
    )
    .required("Password is required"),
});

const SignUpForm = () => {
  const { state, dispatch } = React.useContext(AppContext);

  function handleFormSubmit(values, { resetForm }) {
    console.log(values);
    registerUser(values);
    resetForm();
  }

  return (
    <Formik
      initialValues={{ name: "", email: "", mobile: "", password: "" }}
      onSubmit={handleFormSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleSubmit,
        touched,
        errors,
        handleChange,
        handleBlur,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Box className="signup">
            {/* <Typography className="new_account">Create new account</Typography> */}
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
              <TextField
                type="text"
                name="name"
                label="Full Name *"
                variant="outlined"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
                sx={TextFieldStyle}
              />
              {/* {signUpDataErr.nameErr ? (
                <FormHelperText error>{signUpDataErr.nameErr}</FormHelperText>
              ) : null} */}
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
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
              {/* {signUpDataErr.emailErr ? (
                <FormHelperText error>{signUpDataErr.emailErr}</FormHelperText>
              ) : null} */}
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
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
              {/* {signUpDataErr.mobileErr ? (
                <FormHelperText error>{signUpDataErr.mobileErr}</FormHelperText>
              ) : null} */}
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
              <TextField
                type="password"
                name="password"
                label="Password *"
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                sx={TextFieldStyle}
              />
              {/* {signUpDataErr.passwordErr ? (
                <FormHelperText error>
                  {signUpDataErr.passwordErr}
                </FormHelperText>
              ) : null} */}
            </FormControl>
            {/* <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
            <TextField
              type="password"
              name="cpassword"
              label="Confirm Password *"
              variant="outlined"
              value={signUpData.cpassword}
              onChange={handleChange}
              onBlur={handleValidation}
              sx={TextFieldStyle}
            />
            {signUpDataErr.cpasswordErr ? (
              <FormHelperText error>
                {signUpDataErr.cpasswordErr}
              </FormHelperText>
            ) : null}
          </FormControl> */}
            <Button
              type="submit"
              className="signup_btn"
              variant="contained"
              // disabled={!enableSubmitButton}
              fullWidth
              sx={ButtonStyle}
            >
              Sign Up
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
