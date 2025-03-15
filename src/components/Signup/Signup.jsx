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

const SignUpForm = (props) => {
  // const [signUpdata, setSignUpData] = React.useState({
  //   username: "",
  //   name: "",
  //   email: "",
  //   mobile: "",
  //   password: "",
  //   cpassword: "",
  // });
  // const [signUpdataErr, setSignUpdataErr] = React.useState({
  //   usernameErr: "",
  //   nameErr: "",
  //   emailErr: "",
  //   mobileErr: "",
  //   passwordErr: "",
  //   cpasswordErr: "",
  // });
  // const [registerNewUser] = useRegisterMutation();
  // const dispatch = useDispatch();

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setSignUpData((preVal) => {
  //     return {
  //       ...preVal,
  //       [name]: value,
  //     };
  //   });
  // };

  // const handleFormFieldsErr = (errField, message) => {
  //   setSignUpdataErr((prevState) => {
  //     return {
  //       ...prevState,
  //       [errField]: message,
  //     };
  //   });
  // };

  // const submitForm = async () => {
  //   const data = await registerNewUser(signUpdata);

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

  // const handleSubmitForm = () => {
  //   handleFormFieldsErr(
  //     "usernameErr",
  //     Validation.validateUsername(signUpdata.username)
  //   );
  //   handleFormFieldsErr(
  //     "nameErr",
  //     Validation.validateFullName(signUpdata.name)
  //   );
  //   handleFormFieldsErr("emailErr", Validation.validateEmail(signUpdata.email));
  //   handleFormFieldsErr(
  //     "mobileErr",
  //     Validation.validateMobileNumber(signUpdata.mobile)
  //   );
  //   handleFormFieldsErr(
  //     "passwordErr",
  //     Validation.validatePassword(signUpdata.password)
  //   );
  //   handleFormFieldsErr(
  //     "cpasswordErr",
  //     Validation.validateConfirmPassword(
  //       signUpdata.password,
  //       signUpdata.cpassword
  //     )
  //   );

  //   if (
  //     signUpdata.username !== "" &&
  //     signUpdata.name !== "" &&
  //     signUpdata.email !== "" &&
  //     signUpdata.mobile !== "" &&
  //     signUpdata.password !== "" &&
  //     signUpdata.cpassword !== ""

  //     // check functionality after making an error
  //     // signUpdataErr.usernameErr === "" &&
  //     // signUpdataErr.nameErr === "" &&
  //     // signUpdataErr.emailErr === "" &&
  //     // signUpdataErr.mobileErr === "" &&
  //     // signUpdataErr.passwordErr === "" &&
  //     // signUpdataErr.cpasswordErr === ""
  //   ) {
  //     submitForm();
  //   }
  // };

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
            value={signUpdata.username}
            onChange={handleChange}
          />
          {signUpdataErr.usernameErr ? (
            <FormHelperText error>{signUpdataErr.usernameErr}</FormHelperText>
          ) : null}
        </FormControl> */}
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="text"
            name="name"
            label="Full Name *"
            variant="outlined"
            // value={signUpdata.name}
            // onChange={handleChange}
            sx={TextFieldStyle}
          />
          {/* {signUpdataErr.nameErr ? (
            <FormHelperText error>{signUpdataErr.nameErr}</FormHelperText>
          ) : null} */}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="email"
            name="email"
            label="Email *"
            variant="outlined"
            // value={signUpdata.email}
            // onChange={handleChange}
            sx={TextFieldStyle}
          />
          {/* {signUpdataErr.emailErr ? (
            <FormHelperText error>{signUpdataErr.emailErr}</FormHelperText>
          ) : null} */}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="number"
            name="mobile"
            label="Mobile Number *"
            variant="outlined"
            // value={signUpdata.mobile}
            // onChange={handleChange}
            sx={TextFieldStyle}
          />
          {/* {signUpdataErr.mobileErr ? (
            <FormHelperText error>{signUpdataErr.mobileErr}</FormHelperText>
          ) : null} */}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="password"
            name="password"
            label="Password *"
            variant="outlined"
            // value={signUpdata.password}
            // onChange={handleChange}
            sx={TextFieldStyle}
          />
          {/* {signUpdataErr.passwordErr ? (
            <FormHelperText error>{signUpdataErr.passwordErr}</FormHelperText>
          ) : null} */}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="password"
            name="cpassword"
            label="Confirm Password *"
            variant="outlined"
            // value={signUpdata.cpassword}
            // onChange={handleChange}
            sx={TextFieldStyle}
          />
          {/* {signUpdataErr.cpasswordErr ? (
            <FormHelperText error>{signUpdataErr.cpasswordErr}</FormHelperText>
          ) : null} */}
        </FormControl>
        <Button
          className="signup_btn"
          variant="contained"
          fullWidth
          // onClick={handleSubmitForm}
          sx={ButtonStyle}
        >
          Sign Up
        </Button>
      </Box>
    </>
  );
};

export default SignUpForm;
