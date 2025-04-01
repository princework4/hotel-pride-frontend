import axios from "axios";

export async function requestCallback({
  name,
  email,
  mobile,
  noOfGuest,
  noOfRooms,
}) {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/${API_VERSION}/auth/requestCallback`,
      {
        name,
        email,
        contactNumber: mobile,
        guest: noOfGuest,
        room: noOfRooms,
      }
    );
    console.log(data);
    // return response.body;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
}

export async function fetchAllRoomTypes() {
  try {
    const { data } = await axios.get(`${BASE_URL}/${API_VERSION}/room-types`);
    console.log(data);
    // return response.body;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
}
