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


const SignUpForm = (props) => {
  const { state, dispatch } = React.useContext(AppContext);
  const { signUpData, signUpDataErr } = state;
  const [enableSubmitButton, setEnableSubmitButton] = React.useState(false);

  // const [registerNewUser] = useRegisterMutation();
  // const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: reducerMethods.setSignUpData, payload: { [name]: value } })
  };

  const handleFormFieldsErr = (errField, message) => {
    dispatch({ type: reducerMethods.setSignUpdataErr, payload: { [errField]: message } })
  };


  // const submitForm = () => {

  //   const data = await registerNewUser(signUpData);

  //   if (data?.data?.success) {
  //     dispatch(setCredentials({ token: data?.data?.success }));
  //     localStorage.setItem("token", data?.data?.success);
  //     setSignUpData({
  //       username: "",
  //       name: "",
  //       email: "",
  //       mobile: "",
  //       password: "",
  //       cpassword: "",
  //     });
  //     props.handleClose();
  //     toast.success(`New user registered successfully.`, {
  //       position: "top-center",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   } else {
  //     toast.error(`Failed to register new user. Please try again later.`, {
  //       position: "top-center",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  // };

  function allValidationSuccessful() {
    if (
      signUpData.name !== "" &&
      signUpData.email !== "" &&
      signUpData.mobile !== "" &&
      signUpData.password !== "" &&
      signUpData.cpassword !== "" &&
      // check functionality after making an error
      signUpDataErr.nameErr === "" &&
      signUpDataErr.emailErr === "" &&
      signUpDataErr.mobileErr === "" &&
      signUpDataErr.passwordErr === "" &&
      signUpDataErr.cpasswordErr === ""
    ) {
      return true;
    }
    else {
      handleValidation();
    }
  }

  function handleValidation(event) {
    if (!event) {
      handleFormFieldsErr(
        "nameErr",
        Validation.validateFullName(signUpData.name)
      );
      handleFormFieldsErr(
        "emailErr",
        Validation.validateEmail(signUpData.email)
      );
      handleFormFieldsErr(
        "mobileErr",
        Validation.validateMobileNumber(signUpData.mobile)
      );
      handleFormFieldsErr(
        "passwordErr",
        Validation.validatePassword(signUpData.password)
      );
      handleFormFieldsErr(
        "cpasswordErr",
        Validation.validateConfirmPassword(
          signUpData.password,
          signUpData.cpassword
        )
      );
    } else {
      const { name } = event.target;
      if (name == "name") {
        handleFormFieldsErr(
          "nameErr",
          Validation.validateFullName(signUpData.name)
        );
      } else if (name == "email") {
        handleFormFieldsErr(
          "emailErr",
          Validation.validateEmail(signUpData.email)
        );
      } else if (name == "mobile") {
        handleFormFieldsErr(
          "mobileErr",
          Validation.validateMobileNumber(signUpData.mobile)
        );
      } else if (name == "password") {
        handleFormFieldsErr(
          "passwordErr",
          Validation.validatePassword(signUpData.password)
        );
      } else {
        handleFormFieldsErr(
          "cpasswordErr",
          Validation.validateConfirmPassword(
            signUpData.password,
            signUpData.cpassword
          )
        );
      }
    }
    setEnableSubmitButton(true);
  }

  const handleSubmitForm = () => {
    if (allValidationSuccessful()) {
      console.log("signUpdata :- ", signUpData);
    }
    console.log("signUpdataErr :- ", signUpDataErr);
  };

  return (
    <>
      {/* <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <Box className="signup">
        {/* <Typography className="new_account">Create new account</Typography> */}
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="text"
            name="name"
            label="Full Name *"
            variant="outlined"
            value={signUpData.name}
            onChange={handleChange}
            onBlur={handleValidation}
            sx={TextFieldStyle}
          />
          {signUpDataErr.nameErr ? (
            <FormHelperText error>{signUpDataErr.nameErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="email"
            name="email"
            label="Email *"
            variant="outlined"
            value={signUpData.email}
            onChange={handleChange}
            onBlur={handleValidation}
            sx={TextFieldStyle}
          />
          {signUpDataErr.emailErr ? (
            <FormHelperText error>{signUpDataErr.emailErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="number"
            name="mobile"
            label="Mobile Number *"
            variant="outlined"
            value={signUpData.mobile}
            onChange={handleChange}
            onBlur={handleValidation}
            sx={TextFieldStyle}
          />
          {signUpDataErr.mobileErr ? (
            <FormHelperText error>{signUpDataErr.mobileErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="password"
            name="password"
            label="Password *"
            variant="outlined"
            value={signUpData.password}
            onChange={handleChange}
            onBlur={handleValidation}
            sx={TextFieldStyle}
          />
          {signUpDataErr.passwordErr ? (
            <FormHelperText error>{signUpDataErr.passwordErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
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
            <FormHelperText error>{signUpDataErr.cpasswordErr}</FormHelperText>
          ) : null}
        </FormControl>
        <Button
          className="signup_btn"
          variant="contained"
          disabled={!enableSubmitButton}
          fullWidth
          onClick={handleSubmitForm}
          sx={ButtonStyle}
        >
          Sign Up
        </Button>
      </Box>
    </>
  );
};

export default SignUpForm;
