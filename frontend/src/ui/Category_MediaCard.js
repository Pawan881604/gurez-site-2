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

const Category_MediaCard = ({ item }) => {
  return (
    <>
      <Card
        sx={{ maxWidth: 345, background: "transparent", boxShadow: "none",boxShadow:customTheme.themes.layout.boxShadows.bs_50 }}
      >
        <CardMedia
          sx={{
            height: 140,
            backgroundColor:  [customTheme.themes.colors.white],
            backgroundSize: "80%",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: [customTheme.themes.colors.white],
            },
          }}
          image={
            "https://www.upack.in/media/catalog/product/cache/53044a3cfd6bcac7163468e00689f8a8/u/p/upkj233p248_1.jpg"
          }
          title={"demo"}
        />
        <CardContent
          style={{
            padding: "10px 2px",
            background: "transparent",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            style={{
              fontSize: [customTheme.themes.layout.fontSize.small],
              fontWeight: 600,
              textAlign: "center",
            }}
            component="div"
          >
            {"demp"}
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

export default Category_MediaCard;
