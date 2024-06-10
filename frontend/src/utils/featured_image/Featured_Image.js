import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getAllImages } from "../../actions/imageGelleryAction";
import ImageUploaderForm from "../../admin/ImageGellery/uploadimage/ImageTabToggle";
const Featured_Image = () => {
  const dispatch = useDispatch();
  const { images } = useSelector((state) => state.selectedImages);
  const [open, setOpen] = useState(false);
  const handleImageClickOpen = () => {
    setOpen(true);

    dispatch(getAllImages());
  };
  const handleImageClickClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (images && images.length > 0) {
      setOpen(false);
    }
  }, [images]);

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
                  onClick={() => handleImageClickOpen()}
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
              {images &&
                images.length>0&&images.map((item, i) => (
                  <div key={i}>
                    
                      <img src={item.url} alt="jgjg" />
                    </div>
                ))}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Featured_Image;
