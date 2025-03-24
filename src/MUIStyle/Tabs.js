export const TabsStyle = {
  marginTop: "30px",
  "& .MuiTabs-list": {
    justifyContent: "flex-start",
    "& button": {
      border: "1px solid transparent",
      borderRadius: "25px",
      "&:hover": {
        border: "1px solid #d9736d",
      },
    },
    "& button:not(:first-of-type)": {
      marginLeft: "10px",
    },
    "& .Mui-selected": {
      border: "1px solid #d9736d",
    },
    // "& .Mui-disabled": {
    //   color: "#fff",
    //   backgroundColor: "rgba(0, 0, 0, 0.38)",
    // },
    "& .already_selected": {
      border: "1px solid #d9736d",
      backgroundColor: "#fff",
      color: "#d9736d",
    },
  },
};
