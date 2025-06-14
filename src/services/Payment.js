import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiVersion = import.meta.env.VITE_API_VERSION;

export async function createPayment(bookingNumber) {
  try {
    const response = await axios.post(
      `${baseUrl}/${apiVersion}/payments/create?bookingNumber=${bookingNumber}`
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
      `${baseUrl}/${apiVersion}/payments/verify`,
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
