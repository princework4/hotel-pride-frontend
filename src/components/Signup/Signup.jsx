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


  // const [registerNewUser] = useRegisterMutation();
  // const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: reducerMethods.setSignUpData, payload: { [name]: value } })
  };

  const handleFormFieldsErr = (errField, message) => {
    dispatch({ type: reducerMethods.setSignUpdataErr, payload: { [errField]: message } })
  };

  const submitForm = () => console.log("submited successully -signUpData", signUpData);
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


  const handleSubmitForm = () => {
    handleFormFieldsErr(
      "nameErr",
      Validation.validateFullName(signUpData.name)
    );
    handleFormFieldsErr("emailErr", Validation.validateEmail(signUpData.email));
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

    if (
      // signUpData.username !== "" &&
      signUpData.name !== "" &&
      signUpData.email !== "" &&
      signUpData.mobile !== "" &&
      signUpData.password !== "" &&
      signUpData.cpassword !== "" &&

      // check functionality after making an error
      // signUpDataErr.usernameErr === "" &&
      signUpDataErr.nameErr === "" &&
      signUpDataErr.emailErr === "" &&
      signUpDataErr.mobileErr === "" &&
      signUpDataErr.passwordErr === "" &&
      signUpDataErr.cpasswordErr === ""
    ) {
      submitForm();
    } else {
      console.log("signUpDataErr", signUpDataErr)
    }
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
        {/* <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="text"
            name="username"
            label="Username *"
            variant="outlined"
            value={signUpData.username}
            onChange={handleChange}
          />
          {signUpDataErr.usernameErr ? (
            <FormHelperText error>{signUpDataErr.usernameErr}</FormHelperText>
          ) : null}
        </FormControl> */}
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="text"
            name="name"
            label="Full Name *"
            variant="outlined"
            value={signUpData.name}
            onChange={handleChange}
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
            sx={TextFieldStyle}
          />
          {signUpDataErr.cpasswordErr ? (
            <FormHelperText error>{signUpDataErr.cpasswordErr}</FormHelperText>
          ) : null}
        </FormControl>
        <Button
          className="signup_btn"
          variant="contained"
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
