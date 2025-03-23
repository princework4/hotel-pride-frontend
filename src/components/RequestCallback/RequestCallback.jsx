import * as React from "react";

// MUI imports
import {
  Button,
  Box,
  FormControl,
  FormHelperText,
  Modal,
  TextField,
} from "@mui/material";
import { TextFieldStyle } from "../../MUIStyle/TextField";
import { ButtonStyle } from "../../MUIStyle/Button";
import ChatIcon from "../../assets/comment-solid.svg";
import { AppContext } from "../../context/AppContext";
import { reducerMethods } from "../../context/reducerMethods";
import * as Validation from "../../validation/Validation";

import "./RequestCallback.css";

// requestCallbackData: { name: "", email: "", mobile: "", guests: 1, rooms: 1 },
// requestCallbackDataErr: { nameErr: "", emailErr: "", mobileErr: "", guestsErr: "", roomsErr: "" },

const RequestCallback = () => {
  const { state, dispatch } = React.useContext(AppContext);
  const { requestCallbackData, requestCallbackDataErr } = state;
  console.log(requestCallbackData, requestCallbackDataErr);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: reducerMethods.setReqCallbackData,
      payload: { ...requestCallbackData, [name]: value }
    });
  };

  const handleFormFieldsErr = (errField, message) => {
    dispatch({ type: reducerMethods.setReqCallbackDataErr, payload: { [errField]: message } })
  };

  const submitForm = () => console.log("submited successully -requestCallbackData", requestCallbackData);

  const handleSubmitForm = () => {
    handleFormFieldsErr(
      "nameErr",
      Validation.validateFullName(requestCallbackData.name)
    );
    handleFormFieldsErr("emailErr", Validation.validateEmail(requestCallbackData.email));
    handleFormFieldsErr(
      "mobileErr",
      Validation.validateMobileNumber(requestCallbackData.mobile)
    );
    handleFormFieldsErr(
      "guestsCountErr",
      Validation.validateCount(requestCallbackData.guests, "guests")
    );
    handleFormFieldsErr(
      "roomsCountErr",
      Validation.validateCount(requestCallbackData.rooms, "rooms")
    );

    if (
      // signUpData.username !== "" &&
      requestCallbackData.name !== "" &&
      requestCallbackData.email !== "" &&
      requestCallbackData.mobile !== "" &&
      requestCallbackData.guests !== "" &&
      requestCallbackData.rooms !== "" &&

      // check functionality after making an error
      // signUpDataErr.usernameErr === "" &&
      requestCallbackDataErr.nameErr === "" &&
      requestCallbackDataErr.emailErr === "" &&
      requestCallbackDataErr.mobileErr === "" &&
      requestCallbackDataErr.guestsErr === "" &&
      requestCallbackDataErr.roomsErr === ""
    ) {
      submitForm();
    } else {
      console.log("requestCallbackDataErr", requestCallbackDataErr)
    }
  };

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
      <button id="request_callback_button" onClick={handleOpen}>
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
              name="name"
              label="Full Name *"
              variant="outlined"
              value={requestCallbackData.name}
              onChange={handleChange}
              sx={TextFieldStyle}
            />
            {requestCallbackDataErr.nameErr ? (
              <FormHelperText error>{requestCallbackDataErr.nameErr}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
            <TextField
              type="email"
              name="email"
              label="Email *"
              variant="outlined"
              value={requestCallbackData.email}
              onChange={handleChange}
              sx={TextFieldStyle}
            />
            {requestCallbackDataErr.emailErr ? (
              <FormHelperText error>{requestCallbackDataErr.emailErr}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
            <TextField
              type="number"
              name="mobile"
              label="Mobile Number *"
              variant="outlined"
              value={requestCallbackData.mobile}
              onChange={handleChange}
              sx={TextFieldStyle}
            />
            {requestCallbackDataErr.mobileErr ? (
              <FormHelperText error>{requestCallbackDataErr.mobileErr}</FormHelperText>
            ) : null}
          </FormControl>
          <div className="request_callback__guest_room_container">
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
              <TextField
                type="number"
                name="guests"
                label="Number of Guest *"
                variant="outlined"
                value={requestCallbackData.guests}
                onChange={handleChange}
                sx={TextFieldStyle}
              />
              {requestCallbackDataErr.guestsErr ? (
                <FormHelperText error>{requestCallbackDataErr.guestsErr}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
              <TextField
                type="number"
                name="rooms"
                label="Number of Rooms *"
                variant="outlined"
                value={requestCallbackData.rooms}
                onChange={handleChange}
                sx={TextFieldStyle}
              />
              {requestCallbackDataErr.roomsErr ? (
                <FormHelperText error>{requestCallbackDataErr.roomsErr}</FormHelperText>
              ) : null}
            </FormControl>
          </div>
          <Button
            className="request_callback_btn"
            variant="contained"
            fullWidth
            onClick={handleSubmitForm}
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
