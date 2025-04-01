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

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LogInForm = () => {
  const { state, dispatch } = React.useContext(AppContext);
  const [error, setError] = React.useState("");

  function handleFormSubmit(values, { resetForm }) {
    console.log(values);
    const response = loginUser(values);
    // if (success) {
    //   setError("");
    //   dispatch({ type: reducerMethods.setLoggedInUser, payload: response });
    //   dispatch({ type: reducerMethods.setIsUserLoggedIn, payload: true });
    //   toast.success("Logged In Successfully");
    // } else {
    //   setError("error message");
    // }
    // successToast("Logged in successfully.");
    resetForm();
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
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
          <Box className="login">
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
              <TextField
                type="email"
                name="email"
                label="Email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                sx={TextFieldStyle}
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
              <TextField
                type="password"
                name="password"
                label="Password"
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                sx={TextFieldStyle}
              />
            </FormControl>
            {error && <Typography>{error}</Typography>}
            <Button
              type="submit"
              className="login_btn"
              variant="contained"
              // disabled={!enableSubmitButton}
              fullWidth
              sx={ButtonStyle}
            >
              Login
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LogInForm;
