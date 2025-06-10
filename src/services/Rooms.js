import axios from "axios";

export async function fetchAllRoomTypes() {
  console.log(
    "${process.env.VITE_BASE_URL}/${process.env.VITE_API_VERSION} :- ",
    `${process.env.VITE_BASE_URL}/${process.env.VITE_API_VERSION}`
  );
  try {
    const { data } = await axios.get(
      `${process.env.VITE_BASE_URL}/${process.env.VITE_API_VERSION}/room-types`
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

export async function fetchSingleRoomTypes(id) {
  try {
    const { data } = await axios.get(
      `${process.env.VITE_BASE_URL}/${process.env.VITE_API_VERSION}/room-types/${id}`
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
