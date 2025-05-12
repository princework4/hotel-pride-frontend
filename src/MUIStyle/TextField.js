export const TextFieldStyle = {
  "& label": {
    fontSize: {
      xs: "0.7rem",
      sm: "0.8rem",
      md: "1rem",
    },
    transform: {
      xs: "translate(14px, 14px) scale(1)",
      sm: "translate(14px, 13px) scale(1)",
      md: "translate(14px, 16px) scale(1)",
    },
  },
  "& label.Mui-focused": {
    color: "#c4b991",
    transform: {
      xs: "translate(14px, -8px) scale(1)",
      sm: "translate(14px, -12px) scale(1)",
      md: "translate(14px, -9px) scale(1)",
    },
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#c4b991",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px",
    backgroundColor: "#fff",
    "& input": {
      padding: {
        xs: "10px 8px",
        sm: "12px 10px",
        md: "16px 14px",
      },
    },
    "& fieldset": {
      borderColor: "rgba(0, 0, 0, 0.23)",
    },
    "&:hover fieldset": {
      borderColor: "#c4b991",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#c4b991",
    },
  },
};
