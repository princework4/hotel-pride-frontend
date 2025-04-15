import axios from "axios";

export async function createPayment(amount) {
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/${process.env.API_VERSION}/payments/create`,
      {
        amount: amount,
      }
    );
    // console.log(data);
    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      return error.response.data;
      // console.log(error.response.status);
      // console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
      return error.request;
    } else {
      console.log("Error", error.message);
      return error.message;
    }
    // console.log(error.config);
  }
}

export async function verifyPayment({ paymentId, orderId, signature }) {
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/${process.env.API_VERSION}/payments/verify`,
      {
        paymentId,
        orderId,
        signature,
      }
    );
    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      return error.response.data;
      // console.log(error.response.status);
      // console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
      return error.request;
    } else {
      console.log("Error", error.message);
      return error.message;
    }
    // console.log(error.config);
  }
}
