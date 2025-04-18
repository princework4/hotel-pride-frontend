import * as React from "react";
import { AppContext } from "../../context/AppContext";
import { reducerMethods } from "../../context/reducerMethods";
import {
  Box,
  Button,
  FormControl,
  TextField,
  FormHelperText,
  Typography,
} from "@mui/material";
import { TextFieldStyle } from "../../MUIStyle/TextField";
import { ButtonStyle } from "../../MUIStyle/Button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import * as Validation from "../../validation/Validation";
import { toast } from "react-toastify";
import "./Login.css";
import { loginUser } from "../../services/Auth";
import { encryptPassword } from "../../utils";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LogInForm = ({ handleClose }) => {
  const { state, dispatch } = React.useContext(AppContext);
  const [loginDetails, setLoginDetails] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginDetails((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  }

  async function handleClick() {
    // const updatedValues = {
    //   email: values.email,
    //   password: encryptPassword(values.password),
    // };
    // console.log(updatedValues);
    const response = await loginUser(loginDetails);
    if (response?.status === 200) {
      setError("");
      dispatch({
        type: reducerMethods.setLoggedInUser,
        payload: response?.data,
      });
      dispatch({ type: reducerMethods.setIsUserLoggedIn, payload: true });
      toast.success("Logged In Successfully");
      localStorage.setItem(
        "userObj",
        JSON.stringify({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          contactNumber: response.data.contactNumber,
          isLoggedIn: true,
        })
      );
      handleClose();
    } else if (response?.statusCode === 400 || response?.statusCode === 404) {
      setError(response?.message);
    } else {
      setError("");
      toast.error(response?.message || response?.error);
    }
    setLoginDetails({
      email: "",
      password: "",
    });
  }

  return (
    // <Formik
    //   initialValues={{ email: "", password: "" }}
    //   validationSchema={validationSchema}
    //   onSubmit={handleFormSubmit}
    // >
    //   {({
    //     values,
    //     handleSubmit,
    //     touched,
    //     errors,
    //     handleChange,
    //     handleBlur,
    //   }) => (
    //     <Form onSubmit={handleSubmit}>
    <Box className="login">
      <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
        <TextField
          type="email"
          name="email"
          label="Email / Mobile"
          variant="outlined"
          value={loginDetails.email}
          onChange={handleChange}
          // onBlur={handleBlur}
          // error={Boolean(touched.email && errors.email)}
          // helperText={touched.email && errors.email}
          sx={TextFieldStyle}
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          value={loginDetails.password}
          onChange={handleChange}
          // onBlur={handleBlur}
          // error={Boolean(touched.password && errors.password)}
          // helperText={touched.password && errors.password}
          sx={TextFieldStyle}
        />
      </FormControl>
      {error && (
        <Typography color="error" sx={{ fontSize: "12px" }}>
          {error}
        </Typography>
      )}
      <Button
        type="submit"
        className="login_btn"
        variant="contained"
        // disabled={!enableSubmitButton}
        fullWidth
        sx={ButtonStyle}
        onClick={handleClick}
      >
        Login
      </Button>
    </Box>
    //     </Form>
    //   )}
    // </Formik>
  );
};

export default LogInForm;
