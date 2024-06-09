import React, { useState } from "react";
import { GrLocationPin } from "react-icons/gr";
import { FaRegEye } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import {
  Typography,
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { getAllImages } from "../../actions/imageGelleryAction";
import ImageUploaderForm from "../../admin/ImageGellery/uploadimage/ImageTabToggle";
const Featured_Image = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleImageClickOpen = () => {
    setOpen(true);

    dispatch(getAllImages());
  };
  const handleImageClickClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ImageUploaderForm open={open} close={handleImageClickClose} />
      <Box sx={{ minWidth: 275, marginTop: 5 }}>
        <Card variant="outlined">
          <CardContent sx={{ padding: 0 }}>
            <Typography
              sx={{
                fontSize: 14,
                padding: 1,
                borderBottom: "1px solid",
                borderColor: "text.secondary",
              }}
              color="text.secondary"
              gutterBottom
            >
              Featured Image
            </Typography>

            <Typography component="div" style={{ padding: 15 }}>
              <Typography
                sx={{
                  padding: 1,
                }}
                color="text.secondary"
                gutterBottom
              >
                <span
                  onClick={()=>handleImageClickOpen()}
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontSize: "12px",
                    color: "blue",
                  }}
                >
                  Set featured image
                </span>
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Featured_Image;
