import axios from "axios";

const BASE_URL = "";
const API_VERSION = "/api/v1";

export async function loginUser({ email, password }) {
  try {
    const response = await axios.post(`${BASE_URL}/${API_VERSION}/auth/login`, {
      email,
      password,
    });
    return response.body;
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

export async function registerUser({ name, email, mobile, password }) {
  try {
    const response = await axios.post(
      `${BASE_URL}/${API_VERSION}/auth/register`,
      {
        name,
        email,
        contactNumber: mobile,
        password,
      }
    );
    return response.body;
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
    const response = await axios.get(`${BASE_URL}/${API_VERSION}/room-types`);
    return response.body;
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
