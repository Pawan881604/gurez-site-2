import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import {
  ClearError,
  LoadUser,
  updateUserProfile,
} from "../../../actions/UserAction";
import { useNavigate } from "react-router-dom";
import { UPDATE_PROFILE_RESET } from "../../../constants/UserConstants";
import MetaData from "../../layout/metaData/MetaData";
import { server_url } from "../../../utils/Url";
import { Dropzone, FileMosaic } from "@files-ui/react";

import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";

export const UpdateProfile = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { loading, isUpdated, error } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("./favicon.ico");
  const [files, setFiles] = useState([]);

  const updateFiles = async (incomingFiles) => {
    setFiles(incomingFiles);
  };

  const updateProfileBtn = (e) => {
    e.preventDefault();
    const image = files && files.length > 0 ? files : avatarPreview;
    
    dispatch(
      updateUserProfile(
        name,
        email,
        phone_number,
        image
      )
    );
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setemail(user.email);
      setphone_number(user.phone_number);
      setAvatarPreview(user && user.avatar ? user.avatar : "/icon.png");
    }
    if (error) {
      alert.error(error);
      dispatch(ClearError());
    }
    if (isUpdated) {
      alert.success("Profile Updated successfully");
      dispatch(LoadUser());
      Navigate("/user-dashboard");
      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, alert, error, Navigate, isUpdated, user]);

  return (
    <>
      <MetaData
        title={"Update Profile"}
        content={"Update Profile"}
        keywords={"Update Profile"}
      />
      {user ? (
        <>
          <section className="section-cont updatepage">
            <div className="cont-area-h">
              <div className="custom-login-form" style={{ paddingBottom: 80 }}>
                <Typography
                  sx={{
                    marginBottom: 5,
                    textAlign: "center",
                  }}
                  component="h1"
                  variant="h5"
                >
                  Update Profile
                </Typography>
                <Container maxWidth="sm">
                  <Box
                    sx={{
                      marginTop: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",

                      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        type="text"
                        fullWidth
                        id="Name"
                        label="Name"
                        name="name"
                        autoComplete="Name"
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <TextField
                        margin="normal"
                        required
                        type="email"
                        fullWidth
                        id="email"
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
                        type="number"
                        fullWidth
                        id="phone_number"
                        label="phone_number"
                        name="phone_number"
                        autoComplete="phone_number"
                        autoFocus
                        value={phone_number}
                        onChange={(e) => setphone_number(e.target.value)}
                      />

                      <img
                        className="user-profile"
                        style={{ marginBottom: 15, marginTop: 15 }}
                        src={
                          user && user.avatar
                            ? `${server_url()}/${user.avatar}`
                            : avatarPreview
                            ? avatarPreview
                            : "/icon.png"
                        }
                        alt="avatar preview"
                      />

                      <Dropzone
                        onChange={updateFiles}
                        value={files}
                        maxFiles={1}
                      >
                        {files.length > 0 &&
                          files.map((file, i) => (
                            <FileMosaic key={i} {...file} preview />
                          ))}
                      </Dropzone>

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={loading}
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
                        onClick={(e) => updateProfileBtn(e)}
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
                          "Update Profile"
                        )}
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </div>
            </div>
          </section>
        </>
      ) : (
        <p>Data not found</p>
      )}
    </>
  );
};
