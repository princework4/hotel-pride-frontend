import axios from "axios";
import dayjs from "dayjs";

export async function requestCallback({ name, email, mobile, guest, rooms }) {
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/${process.env.API_VERSION}/bookings/request`,
      {
        hotelId: 1,
        fullName: name,
        email,
        phoneNumber: mobile,
        noOfGuests: guest,
        noOfRooms: rooms,
      }
    );
    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      return error.response.data;
    } else if (error.request) {
      console.log(error.request);
      return error.request;
    } else {
      console.log("Error", error.message);
      return error.message;
    }
  }
}

export async function getRoomsAvailability(checkInDate, checkOutDate) {
  const updatedCheckInDate = dayjs(checkInDate).format("DD-MM-YYYY");
  const updatedCheckOutDate = dayjs(checkOutDate).format("DD-MM-YYYY");
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/${process.env.API_VERSION}/bookings/availability?hotelId=1&checkinDate=${updatedCheckInDate}&checkoutDate=${updatedCheckOutDate}`
    );
    // console.log(data);
    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      return error.response.data;
      //   console.log(error.response.status);
      //   console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
      return error.request;
    } else {
      console.log("Error", error.message);
      return error.message;
    }
  }
}

export async function bookingConfirmation({
  userId,
  hotelId,
  couponCode,
  noOfAdults,
  noOfChildrens,
  checkInDate,
  checkOutDate,
  paymentType,
  totalAmount,
  payableAmount,
  roomBookingList,
}) {
  const updatedCheckInDate = dayjs(checkInDate).format("DD-MM-YYYY");
  const updatedCheckOutDate = dayjs(checkOutDate).format("DD-MM-YYYY");
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/${process.env.API_VERSION}/bookings`,
      {
        userId,
        hotelId,
        couponCode,
        noOfAdults,
        noOfChildrens,
        checkInDate: updatedCheckInDate,
        checkOutDate: updatedCheckOutDate,
        paymentType,
        totalAmount,
        payableAmount,
        roomBookingList,
      }
    );
    // console.log(data);
    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      return error.response.data;
      //   console.log(error.response.status);
      //   console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
      return error.request;
    } else {
      console.log("Error", error.message);
      return error.message;
    }
  }
}

export async function guestBookingConfirmation({
  email,
  phone,
  fullName,
  hotelId,
  couponCode,
  noOfAdults,
  noOfChildrens,
  checkInDate,
  checkOutDate,
  paymentType,
  totalAmount,
  payableAmount,
  roomBookingList,
}) {
  const updatedCheckInDate = dayjs(checkInDate).format("DD-MM-YYYY");
  const updatedCheckOutDate = dayjs(checkOutDate).format("DD-MM-YYYY");
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/${process.env.API_VERSION}/bookings/guest`,
      {
        email,
        phone,
        fullName,
        hotelId,
        couponCode,
        noOfAdults,
        noOfChildrens,
        checkInDate: updatedCheckInDate,
        checkOutDate: updatedCheckOutDate,
        paymentType,
        totalAmount,
        payableAmount,
        roomBookingList,
      }
    );
    // console.log(data);
    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      return error.response.data;
      //   console.log(error.response.status);
      //   console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
      return error.request;
    } else {
      console.log("Error", error.message);
      return error.message;
    }
  }
}
