const mongoose = require("mongoose");
const CountModel = require("./CountModel");

const shippingInfoSchema = new mongoose.Schema({
  shipping_uuid:{
    type: String,
    default:null
  },
  fullName: {
    type: String,
    default:null
  },
  phoneNo: {
    type: Number,
    default:null
  },
  email: {
    type: String,
    default:null
  },
  address: {
    type: String,
    default:null
  },
  country: {
    type: String,
   
    default: "India",
  },
  state: {
    type: String,
    default:null
  },
  city: {
    type: String,
    default:null
  },
  pinCode: {
    type: Number,
    default:null
  },
  order_info_uuid:{
    type: String,
    ref: "order",
  },
  gst_no:{
    type: String,
    default:null
  },
  order_notes:{
    type: String,
    default:null
  },
  user: {
    type: Number,
    ref: "User",
  },
});

module.exports = mongoose.model("shipping_Info", shippingInfoSchema);
