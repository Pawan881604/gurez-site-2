import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import React from "react";
import { StarComponent } from "../site/productDetails/assets/StarComponent";

const Review_cards = () => {
  const bull = (
    <span
      style={{
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
      }}
    >
      •
    </span>
  );
  return (
    <Card sx={{ minWidth: 275, maxWidth: 345, margin: "0 auto" }}>
      <CardContent>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Demo
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <FaCheckCircle /> Verified Buyer
            </Typography>
          </Box>
          <Box component="div">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              05/11/24
            </Typography>
          </Box>
        </Box>
        <Box component="div">
          <StarComponent />
        </Box>
        <Box>
          <Typography
            variant="h5"
            component="div"
            style={{ marginBottom: "10px" }}
          >
            Nice Product
          </Typography>
          <Typography
            variant={"body"}
            component="div"
            style={{ marginBottom: "40px" }}
            color="text.secondary"
          >
            Order Received On Time . Quality received as mention . Overall Very
            Satisfied.
          </Typography>
          <Typography
             variant={"body"}
            component="div"
            style={{ marginBottom: "10px" }}
          >
            Pink Corrugated Shipping Box - 10 x 7 x 5 Inch
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Review_cards;
