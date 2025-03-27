import * as React from "react";
import { AppContext } from "../../context/AppContext";
import { reducerMethods } from "../../context/reducerMethods";
import { Box, Button, FormControl, TextField, FormHelperText } from "@mui/material";
import { TextFieldStyle } from "../../MUIStyle/TextField";
import { ButtonStyle } from "../../MUIStyle/Button";
import * as Validation from "../../validation/Validation";
import "./Login.css";

const LogInForm = () => {
  const { state, dispatch } = React.useContext(AppContext);
  const { logInData, logInDataErr } = state;
  const [enableSubmitButton, setEnableSubmitButton] = React.useState(false);

  //   const [loginUser] = useLoginMutation();
  //   const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: reducerMethods.setLoginData, payload: { [name]: value } });
  };

  const handleFormFieldsErr = (errField, message) => {
    dispatch({ type: reducerMethods.setLogInDataErr, payload: { [errField]: message } });
  };

  //   const handleSubmitForm = async () => {
  //     const data = await loginUser(logInData);
  //     const token = data?.data?.token;

  //     if (token === `${process.env.REACT_APP_TOKEN}`) {
  //       dispatch(setCredentials({ token: token }));
  //       localStorage.setItem("token", token);
  //       setLogInData({
  //         email: "",
  //         password: "",
  //       });
  //       props.handleClose();
  //       toast.success(`Logged In successfully.`, {
  //         position: "top-center",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     } else {
  //       toast.error(`${data?.error?.error}`, {
  //         position: "top-center",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     }
  //   };

  function allValidationSuccessful() {
    if (
      logInData.email !== "" &&
      logInData.password !== "" &&
      // check functionality after making an error
      logInDataErr.emailErr === "" &&
      logInDataErr.passwordErr === ""
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
        "emailErr",
        Validation.validateEmail(logInData.email)
      );
      handleFormFieldsErr(
        "passwordErr",
        Validation.validatePassword(logInData.password)
      );
    } else {
      const { name } = event.target;
      if (name == "email") {
        handleFormFieldsErr(
          "emailErr",
          Validation.validateEmail(logInData.email)
        );
      } else if (name == "password") {
        handleFormFieldsErr(
          "passwordErr",
          Validation.validatePassword(logInData.password)
        );
      }
    }
    setEnableSubmitButton(true);
  }

  const handleSubmitForm = () => {
    if (allValidationSuccessful()) {
      console.log("logInData :- ", logInData);
    }
    console.log("logInDataErr :- ", logInDataErr);
  };

  return (
    <>
      <Box className="login">
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="email"
            name="email"
            label="Email *"
            variant="outlined"
            value={logInData.email}
            onChange={handleChange}
            onBlur={handleValidation}
            sx={TextFieldStyle}
          />
          {logInDataErr.emailErr ? (
            <FormHelperText error>{logInDataErr.emailErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="password"
            name="password"
            label="Password *"
            variant="outlined"
            value={logInData.password}
            onChange={handleChange}
            onBlur={handleValidation}
            sx={TextFieldStyle}
          />
          {logInDataErr.passwordErr ? (
            <FormHelperText error>{logInDataErr.passwordErr}</FormHelperText>
          ) : null}
        </FormControl>
        <Button
          className="login_btn"
          variant="contained"
          disabled={!enableSubmitButton}
          fullWidth
          onClick={handleSubmitForm}
          sx={ButtonStyle}
        >
          LogIn
        </Button>
      </Box>
    </>
  );
};

export default LogInForm;
