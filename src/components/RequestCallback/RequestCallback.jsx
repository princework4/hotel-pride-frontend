import * as React from "react";

// MUI imports
import { Button, Box, FormControl, Modal, TextField } from "@mui/material";
import { TextFieldStyle } from "../../MUIStyle/TextField";
import { ButtonStyle } from "../../MUIStyle/Button";
import ChatIcon from "../../assets/comment-solid.svg";
import { TOP } from "../../Constants";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { requestCallback } from "../../services/Booking";
import { toast } from "react-toastify";
import "./RequestCallback.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(40, "Too Long!")
    .required("Fullname is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Invalid mobile number"),
  guest: Yup.number()
    .min(1, "Minimum 1 guest is required")
    .required("Number of guest is required"),
  rooms: Yup.number()
    .min(1, "Minimum 1 room is required")
    .required("Number of rooms is required"),
});

const RequestCallback = () => {
  const style = {
    width: {
      xs: "315px",
      sm: "400px",
    },
    height: "auto",
    padding: "20px 20px 10px",
    border: "none",
    borderRadius: "20px",
    position: "absolute",
    top: "50%",
    left: "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    overflow: "auto",
    transform: "translate(-50%, -50%)",
  };

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

  async function handleFormSubmit(values, { resetForm }) {
    const response = await requestCallback(values);
    if (response?.status === 200) {
      toast.success(
        "Your query has been send successfully. We will shortly get back to you."
      );
      handleClose();
    } else {
      toast.error(response?.message || response?.error);
    }
    resetForm();
  }

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
        disableScrollLock={true}
      >
        <Formik
          initialValues={{
            name: "",
            email: "",
            mobile: "",
            guest: "",
            rooms: "",
          }}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}
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
              <Box sx={style} className="request_callback__form_container">
                <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                  <TextField
                    type="text"
                    name="name"
                    label="Full Name *"
                    variant="outlined"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                    sx={TextFieldStyle}
                  />
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                  <TextField
                    type="email"
                    name="email"
                    label="Email *"
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
                    type="number"
                    name="mobile"
                    label="Mobile Number *"
                    variant="outlined"
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.mobile && errors.mobile)}
                    helperText={touched.mobile && errors.mobile}
                    sx={TextFieldStyle}
                  />
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                  <TextField
                    type="number"
                    name="guest"
                    label="Number of Guest *"
                    variant="outlined"
                    value={values.guest}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.guest && errors.guest)}
                    helperText={touched.guest && errors.guest}
                    sx={TextFieldStyle}
                  />
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                  <TextField
                    type="number"
                    name="rooms"
                    label="Number of Rooms *"
                    variant="outlined"
                    value={values.rooms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.rooms && errors.rooms)}
                    helperText={touched.rooms && errors.rooms}
                    sx={TextFieldStyle}
                  />
                </FormControl>
                <Button
                  type="submit"
                  className="request_callback_btn"
                  variant="contained"
                  fullWidth
                  sx={ButtonStyle}
                >
                  Request Callback
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default RequestCallback;
