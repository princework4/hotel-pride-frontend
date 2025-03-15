import * as React from "react";
import { Box, Button, FormControl, TextField } from "@mui/material";
import { TextFieldStyle } from "../../MUIStyle/TextField";
import { ButtonStyle } from "../../MUIStyle/Button";
import "./Login.css";

const LogInForm = () => {
  //   const [logInData, setLogInData] = React.useState({
  //     email: "",
  //     password: "",
  //   });
  //   const [loginUser] = useLoginMutation();
  //   const dispatch = useDispatch();

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;

  //     setLogInData((preVal) => {
  //       return {
  //         ...preVal,
  //         [name]: value,
  //       };
  //     });
  //   };

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

  return (
    <>
      <Box className="login">
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="email"
            name="email"
            label="Email *"
            variant="outlined"
            // value={logInData.email}
            // onChange={handleChange}
            sx={TextFieldStyle}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="password"
            name="password"
            label="Password *"
            variant="outlined"
            // value={logInData.password}
            // onChange={handleChange}
            sx={TextFieldStyle}
          />
        </FormControl>
        <Button
          className="login_btn"
          variant="contained"
          fullWidth
          //   onClick={handleSubmitForm}
          sx={ButtonStyle}
        >
          LogIn
        </Button>
      </Box>
    </>
  );
};

export default LogInForm;
