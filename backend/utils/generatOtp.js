const master_otp_model = require("../models/master_otp_model");

exports.generate_Otp = async (limit, uuid) => {
  const digits = "0123456789";
  let OTP = "";

  for (let i = 0; i < limit; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }

  const existingOTPs = await master_otp_model.find({
    user_uuid: uuid,
    master_otp_status: "Active",
  });
  for (let otp of existingOTPs) {
    otp.master_otp_status = "Inactive";
    await otp.save();
  }
  // let existingOTP = await master_otp_model.findOne({ user_uuid: uuid });

  // if (existingOTP) {
  //   existingOTP.otp = OTP;
  //   existingOTP.master_otp_modifed_date = Date.now();

  //   await existingOTP.save();
  // } else {
  const otp_data_length = await master_otp_model.countDocuments();
  const otp_data = await master_otp_model.create({
    otp_id: otp_data_length === 0 ? 1 : otp_data_length + 1,
    otp: OTP,
    user_uuid: uuid,
    master_otp_modifed_date: Date.now(),
  });
  // }

  return OTP;
};
exports.verify_otp = async (otp, uuid) => {
  try {
    // Find the OTP details using a single query
    const otp_details = await master_otp_model.findOne({
      user_uuid: uuid,
      otp: Number(otp),
    });

    // Check if OTP details were found
    if (!otp_details) {
      throw new Error("OTP is invalid");
    }

    // Check if OTP status is inactive
    if (otp_details.master_otp_status === "Inactive") {
      throw new Error("OTP is invalid");
    }

    // Calculate the time difference in minutes
    const otp_modifed_date = new Date(otp_details.master_otp_modifed_date);
    const currentTime = new Date();
    const time_Difference = (currentTime - otp_modifed_date) / (1000 * 60);

    // Check if OTP has expired
    if (time_Difference > 5) {
      throw new Error("OTP is expired");
    }

    // If OTP is valid, mark it as inactive and save
    otp_details.master_otp_status = "Inactive";
    await otp_details.save();

    // Return true indicating the OTP is valid
    return true;
  } catch (error) {
    // Handle any errors that occur
    console.error(error);
    throw error;
  }
};
