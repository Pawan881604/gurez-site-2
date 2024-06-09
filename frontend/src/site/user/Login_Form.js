import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";
// import Loader from "../layout/loader/Loader";
// Loader
import { useSelector, useDispatch } from "react-redux";
import { ClearError, Login, Singup } from "../../actions/UserAction";
import { useAlert } from "react-alert";
// import MetaData from "../layout/metaData/MetaData";
import CircularProgress from "@mui/material/CircularProgress";
import {
  TextField,
  Button,
  Checkbox,
  Link,
  FormControlLabel,
  Typography,
  Container,
  Box,
  Grid,
} from "@mui/material";
import { LOGIN_RESET } from "../../constants/UserConstants";
import Loader from "../../utils/loader/Loader";

const Login_Form = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, isAuthenticated, message, success, error } = useSelector(
    (state) => state.user
  );
  const Navigate = useNavigate();

  const [user_id, setuser_id] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();

    dispatch(Login(user_id));
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
      dispatch({ type: LOGIN_RESET });
      Navigate("/otp-verification");
    }
  }, [dispatch, error, alert, isAuthenticated, Navigate, success]);

  return (
    <>
      {/* <MetaData title={"Sign In"} content={"Sign In"} keywords={"Sign In"} /> */}

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
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="user_id"
                label="Email Address & Phone no"
                name="user_id"
                autoComplete="user_id"
                autoFocus
                value={user_id}
                onChange={(e) => setuser_id(e.target.value)}
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
                onClick={(e) => handleSignIn(e)}
                startIcon={!loading}
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
                  "Submit"
                )}
              </Button>
            </Box>
            <Grid container>
              {/* <Grid item xs>
                <Link
                  style={{ cursor: "pointer" }}
                  variant="body2"
                  onClick={(e) => Navigate("/forget-password")}
                >
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link
                  style={{ cursor: "pointer" }}
                  variant="body2"
                  onClick={(e) => Navigate("/sing-up")}
                >
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
};
export default Login_Form;
