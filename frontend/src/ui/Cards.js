import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import customTheme from "./theme/theme.config";

const Cards = ({ item }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={item.img} title={item.title} />
        <CardContent>
          <Typography
            style={{
              fontSize: [customTheme.themes.layout.fontSize.small],
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.price}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </>
  );
};

export default Cards;
