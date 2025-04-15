import axios from "axios";

export async function fetchAllRoomTypes() {
  try {
    const { data } = await axios.get(
      `${process.env.BASE_URL}/${process.env.API_VERSION}/room-types`
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
