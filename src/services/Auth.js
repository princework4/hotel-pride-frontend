import axios from "axios";

export async function loginUser({ email, password }) {
  try {
    const { data } = await axios.post(`${BASE_URL}/${API_VERSION}/auth/login`, {
      email,
      password,
    });
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

export async function registerUser({ name, email, mobile, password }) {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/${API_VERSION}/auth/register`,
      {
        name,
        email,
        contactNumber: mobile,
        password,
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
