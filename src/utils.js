import * as CryptoJS from "crypto-js";

const secretKey = process.env.SECRET_ENCRYPTION_KEY;

export const encryptPassword = (password) => {
  const encryptedPassword = CryptoJS.AES.encrypt(
    password,
    secretKey
  ).toString();
  return encryptedPassword;
};

export const decryptPassword = (encryptedPassword) => {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
  const password = bytes.toString(CryptoJS.enc.Utf8);
  return password;
};

export const generateRoomBookingListData = (selectedRooms) => {
  const obj = {};
  for (let i = 0; i < selectedRooms.length; i++) {
    if (!obj[selectedRooms[i].selectedRoomId])
      obj[selectedRooms[i].selectedRoomId] = 1;
    else obj[selectedRooms[i].selectedRoomId]++;
  }

  const finalArr = [];
  for (const key in obj) {
    finalArr.push({
      roomTypeId: Number(key),
      noOfRooms: obj[key],
    });
  }

  return finalArr;
};

export const checkOfferAvailability = (offerStartDate, offerEndDate) => {
  const today = new Date();
  const day = String(today.getDate());
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  return offerStartDate <= formattedDate && offerEndDate >= formattedDate;
};
