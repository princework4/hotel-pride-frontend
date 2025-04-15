import * as CryptoJS from "crypto-js";

const secretKey = process.env.SECRET_ENCRYPTION_KEY;

export const encryptPassword = (password) => {
  console.log("encryptPassword --> ", password, secretKey);
  const encryptedPassword = CryptoJS.AES.encrypt(
    password,
    secretKey
  ).toString();
  console.log("encryptedPassword :- ", encryptedPassword);
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
      roomTypeId: key,
      noOfRooms: obj[key],
    });
  }

  return finalArr;
};
