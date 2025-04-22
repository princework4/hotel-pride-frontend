import * as React from "react";
import { AppContext } from "../../context/AppContext";
import { reducerMethods } from "../../context/reducerMethods";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { TextFieldStyle } from "../../MUIStyle/TextField";
import { ButtonStyle } from "../../MUIStyle/Button";
import { toast } from "react-toastify";
import { loginUser } from "../../services/Auth";
import "./Login.css";

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
    <Box className="login">
      <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
        <TextField
          type="email"
          name="email"
          label="Email / Mobile"
          variant="outlined"
          value={loginDetails.email}
          onChange={handleChange}
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
        fullWidth
        sx={ButtonStyle}
        onClick={handleClick}
      >
        Login
      </Button>
    </Box>
  );
};

export default LogInForm;
