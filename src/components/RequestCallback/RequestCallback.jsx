import * as React from "react";

// MUI imports
import {
  Button,
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { TextFieldStyle } from "../../MUIStyle/TextField";
import { ButtonStyle } from "../../MUIStyle/Button";
import ChatIcon from "../../assets/comment-solid.svg";
import { TOP } from "../../Constants";
import "./RequestCallback.css";

const RequestCallback = () => {
  const [changePosition, setChangePosition] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    function onScroll() {
      setChangePosition(document.documentElement.scrollTop >= TOP);
    }
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [TOP]);

  const style = {
    width: "400px",
    height: "auto",
    padding: "20px 20px 10px 20px",
    border: "none",
    borderRadius: "20px",
    position: "absolute",
    top: "50%",
    left: "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    overflow: "auto",
    transform: "translate(-50%, -50%)",
    // maxWidth: 400,
    // minWidth: 300,
    // p: 4,
  };

  return (
    <>
      <button
        id="request_callback_button"
        onClick={handleOpen}
        style={{ bottom: changePosition ? "100px" : "30px" }}
      >
        <img src={ChatIcon} alt="request callback" />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="request_callback_form"
      >
        <Box sx={style} className="request_callback__form_container">
          <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
            <TextField
              type="text"
              name="fullName"
              label="Full Name *"
              variant="outlined"
              // value={logInData.email}
              // onChange={handleChange}
              sx={TextFieldStyle}
            />
          </FormControl>
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
          <div className="request_callback__guest_room_container">
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
              <TextField
                type="number"
                name="guests"
                label="Number of Guest *"
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
                type="number"
                name="rooms"
                label="Number of Rooms *"
                variant="outlined"
                // value={signUpdata.mobile}
                // onChange={handleChange}
                sx={TextFieldStyle}
              />
              {/* {signUpdataErr.mobileErr ? (
            <FormHelperText error>{signUpdataErr.mobileErr}</FormHelperText>
          ) : null} */}
            </FormControl>
          </div>
          <Button
            className="request_callback_btn"
            variant="contained"
            fullWidth
            //   onClick={handleSubmitForm}
            sx={ButtonStyle}
          >
            Request Callback
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default RequestCallback;
