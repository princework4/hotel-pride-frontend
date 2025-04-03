import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RoomListing from "../RoomListing/RoomListing";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import GuestDetails from "../GuestDetails";
import { TabsStyle } from "../../MUIStyle/Tabs";
import { AppContext } from "../../context/AppContext";
import { reducerMethods } from "../../context/reducerMethods";

const steps = ["Select Room", "Personal Details", "Payment"];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomStepper() {
  const { state, dispatch } = React.useContext(AppContext);
  const { guestOptions, selectedRooms } = state;
  const [activeStep, setActiveStep] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  // const [user, setUser] = React.useState({ selectedRoom: [], totalPrice: 0 });
  // const [selectedRoom, setSelectedRoom] = React.useState(
  // selectedRooms
  // );
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    window.scrollTo(0, 0);
    setValue(newValue);
  };

  React.useEffect(() => {
    console.log("selectedRooms :- ", selectedRooms);
    for (let i = 0; i < guestOptions.rooms; i++) {
      if (selectedRooms?.length == i) setValue(i);
    }
    if (selectedRooms?.length == guestOptions.rooms) {
      const total = selectedRooms?.reduce(
        (acc, item) => (acc += item.price),
        0
      );
      setTotalPrice(total);
      if (activeStep == 0) {
        setActiveStep(activeStep + 1);
        dispatch({
          type: reducerMethods.setSteppersActiveStep,
          payload: 2,
        });
      }
    }

    window.scrollTo(0, 0);
  }, [selectedRooms.length]);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={activeStep}
        sx={{
          ".MuiStepConnector-root span": {
            borderColor: "#b85042",
          },
          ".MuiStepLabel-label": {
            fontSize: {
              xs: "0.7rem",
              sm: "0.875rem",
            },
          },
        }}
      >
        {steps.map((label) => {
          return (
            <Step
              key={Math.random()}
              sx={{
                "& .MuiStepLabel-root .Mui-completed": {
                  color: "#b85042",
                },
                "& .MuiStepLabel-root .Mui-active": {
                  color: "#b85042",
                },
                "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                  fill: "#fff",
                },
              }}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep == 0 ? (
        <>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            className="rooms_tab"
            sx={TabsStyle}
          >
            {[...Array(guestOptions.rooms)]?.map((_, index) => {
              if (index == 0) {
                return (
                  <Tab
                    value={0}
                    label={`Room ${index + 1}`}
                    {...a11yProps(index)}
                    className={value > index ? "already_selected" : ""}
                    key={index}
                  />
                );
              }
              return (
                <Tab
                  value={index}
                  label={`Room ${index + 1}`}
                  {...a11yProps(index)}
                  // disabled={selectedRoom?.length < index + 1}
                  className={value > index ? "already_selected" : ""}
                  key={index}
                />
              );
            })}
          </Tabs>
          {[...Array(guestOptions.rooms)]?.map((_, index) => (
            <TabPanel
              value={value}
              index={index}
              dir={theme.direction}
              key={index}
            >
              <RoomListing roomNumber={index} />
            </TabPanel>
          ))}
        </>
      ) : activeStep == 1 ? (
        <GuestDetails
          // user={user}
          totalPrice={totalPrice}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      ) : (
        <div>Payment Page</div>
      )}
    </Box>
  );
}
