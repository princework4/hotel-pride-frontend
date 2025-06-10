import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiVersion = import.meta.env.VITE_API_VERSION;

export async function fetchAllRoomTypes() {
  try {
    const { data } = await axios.get(`${baseUrl}/${apiVersion}/room-types`);
    // console.log(data);
    return data;
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

export async function fetchSingleRoomTypes(id) {
  try {
    const { data } = await axios.get(
      `${baseUrl}/${apiVersion}/room-types/${id}`
    );
    // console.log(data);
    return data;
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
