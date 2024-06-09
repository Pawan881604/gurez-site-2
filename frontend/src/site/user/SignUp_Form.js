import React, { useEffect, useState } from "react";
import "./style.css";
// import Loader from "../layout/loader/Loader";
// Loader
import { useSelector, useDispatch } from "react-redux";
import { ClearError, Login, Singup } from "../../actions/UserAction";
import { useAlert } from "react-alert";
// import MetaData from "../layout/metaData/MetaData";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Link,
  Typography,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import generateUuid from "../../utils/Uuidv4";
import { SINGUP_RESET } from "../../constants/UserConstants";
import Loader from "../../utils/loader/Loader";

const SignUp_Form = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, isAuthenticated, message, success, error } = useSelector(
    (state) => state.user
  );
  const Navigate = useNavigate();
  const [user_id, setuser_id] = useState("");
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [phone_number, setphone_number] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const uuid = generateUuid();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const indianMobileRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    if (name.trim() === "") {
      alert.error("Name are required");
      return;
    }
    if (email.trim() === "") {
      alert.error("Email are required");
      return;
    }
    if (!emailPattern.test(email)) {
      alert.error("Please enter a valid email address");
      return;
    }
    if (!indianMobileRegex.test(phone_number)) {
      alert.error("Please enter a valid phone number");
      return;
    }

    const userDetails = {
      uuid,
      name,
      email,
      phone_number,
    };

    dispatch(Singup(userDetails));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(ClearError());
    }

    if (isAuthenticated) {
      Navigate("/user-dashboard");
    }
    if (success) {
      alert.success(message);
      dispatch({ type: SINGUP_RESET });
      Navigate("/otp-verification");
    }
  }, [dispatch, error, alert, isAuthenticated, Navigate, success]);

  return (
    <>
      {/* <MetaData title={"Sing Up"} content={"Sing Up"} keywords={"Sing Up"} /> */}
      <div className="custom-login-form" style={{ paddingBottom: 80 }}>
        <Container maxWidth="sm">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: 550,
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              padding: "30px 20px 30px",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full name"
                name="name"
                autoComplete="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                type="email"
                label="Email Address"
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
                id="phone number"
                type="text"
                label="Phone Number"
                name="phone_number"
                autoComplete="Phone Number"
                autoFocus
                value={phone_number}
                onChange={(e) => setphone_number(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading} // Disable button when loading
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
                onClick={handleSignUp}
                startIcon={!loading} // Show icon only when not loading
              >
                {loading ? (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress size={24} color="inherit" />
                  </div>
                ) : (
                  "Sign Up"
                )}
              </Button>

              <Link
                style={{ cursor: "pointer" }}
                variant="body2"
                onClick={(e) => Navigate("/sign-in")}
              >
                Already have an account? Sign In
              </Link>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};
export default SignUp_Form;
