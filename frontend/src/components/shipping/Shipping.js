import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import { State, City } from "country-state-city";
import { useAlert } from "react-alert";
import { CheckoutStep } from "./assets/CheckoutStep";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
} from "@mui/material";
import MetaData from "../layout/metaData/MetaData";

export const Shipping = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const Navigate = useNavigate();
  const { shippinginfo } = useSelector((state) => state.cart);

  const [fullName, setfullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setemail] = useState("");
  const [gst_no, setgst_no] = useState("");
  const [order_notes, setorder_notes] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const country = "India";
  const [pinCode, setPinCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const shippingSubmit = (e) => {
    e.preventDefault();
    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error("Phone no should be 10 digit long");
      return;
    }
    dispatch(
      saveShippingInfo({
        fullName,
        phoneNo,
        email,
        address,
        country,
        state,
        city,
        pinCode,
        gst_no,
        order_notes
      })
    );
    Navigate("/shipping/order/confirm");
  };

  useEffect(() => {
    if (shippinginfo) {
      setfullName(shippinginfo && shippinginfo.fullName);
      setAddress(shippinginfo.address);
      setemail(shippinginfo.email);
      setState(shippinginfo.state);
      setCity(shippinginfo.city);
      setPinCode(shippinginfo.pinCode);
      setPhoneNo(shippinginfo.phoneNo);
      setgst_no(shippinginfo.gst_no);
      setorder_notes(shippinginfo.order_notes);
    }
  }, [shippinginfo, dispatch]);

  return (
    <>
      <MetaData
        title={"Shipped Order"}
        content={"Shipped Order"}
        keywords={" Shipped Order"}
      />
      <div className="stepper-main">
        <CheckoutStep activeStep={0} />
      </div>
      <div style={{ paddingBottom: 80, paddingTop: 20 }}>
        <Typography
          sx={{
            marginBottom: 10,
            paddingBottom: 5,
            textAlign: "center",
          }}
          component="h1"
          variant="h5"
        >
          Shipping details
        </Typography>
        <Container maxWidth="sm">
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: 550,
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              padding: "30px 20px 30px",
            }}
          >
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                type="text"
                id="name"
                label="Full name"
                name="name"
                autoComplete="name"
                autoFocus
                value={fullName}
                onChange={(e) => setfullName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="text"
                id="phone_no"
                label="Phone No"
                name="phone_no"
                autoComplete="phone_no"
                autoFocus
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="email"
                id="Email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                type="text"
                id="address"
                multiline
                rows={2}
                label="Address"
                name="address"
                autoComplete="address"
                autoFocus
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="country"
                select
                style={{ width: "50%", paddingRight: 5 }}
                label="Select"
                name="country"
                defaultValue="India"
                value={country}
                // onChange={(e) => change_input_handler(e)}
                SelectProps={{
                  native: true,
                }}
              >
                <option value="Select one">Select one</option>
                <option value="India">India</option>
                <option value="Other">Other</option>
              </TextField>
              <TextField
                margin="normal"
                required
                fullWidth
                id="state"
                select
                style={{ width: "50%" }}
                label="Select"
                name="state"
                defaultValue="Select one"
                value={state}
                onChange={(e) => setState(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                <option value="">Select state</option>
                {State &&
                  State.getStatesOfCountry("IN").map((item, i) => (
                    <option key={i} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </TextField>
              <TextField
                margin="normal"
                required
                fullWidth
                id="city"
                select
                label="City"
                style={{ width: "50%", paddingRight: 5 }}
                name="city"
                defaultValue="Select one"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                <option value="">Select city</option>
                {City &&
                  City.getCitiesOfState("IN", state).map((item, i) => (
                    <option key={i} value={item.name}>
                      {item.name}
                    </option>
                  ))}
              </TextField>

              <TextField
                margin="normal"
                required
                fullWidth
                type="number"
                id="pin_code"
                label="Pin Code"
                name="pin_code"
                style={{ width: "50%" }}
                autoFocus
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                type="text"
                id="gst"
                label="GST No (Optional)"
                name="gst_no"
                autoFocus
                value={gst_no}
                onChange={(e) => setgst_no(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                type="text"
                id="order notes"
                multiline
                rows={2}
                label="Order Notes (Optional)"
                name="order_notes"
                autoComplete="order_notes"
                autoFocus
                value={order_notes}
                onChange={(e) => setorder_notes(e.target.value)}
              />
              <Button
                type="submit"
                onClick={(e) => shippingSubmit(e)}
                fullWidth
                variant="contained"
                disabled={state ? false : true}
                sx={{
                  mt: 3,
                  mb: 2,
                  color: "#fff",
                  backgroundColor: "#73c631",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#73c631",
                  },
                }}
              >
                Continue
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};
