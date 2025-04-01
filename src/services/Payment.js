import axios from "axios";

export async function createPayment({ amount }) {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/${API_VERSION}/payments/create`,
      {
        amount: amount,
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
