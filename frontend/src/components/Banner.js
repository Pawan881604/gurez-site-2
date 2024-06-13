import { Box, Container, Typography } from "@mui/material";
import React from "react";
import customTheme from "../ui/theme/theme.config";

const Banner = ({ title,img }) => {
  return (
    <>
      <Container
        maxWidth="sm"
        style={{
          maxWidth: [customTheme.screens.lg],
          padding: [customTheme.themes.layout.padding.screen_large],
        }}
      >
        <Typography component={"H2"}>{title}</Typography>

        <Box sx={{ marginTop: 4 }} component={"div"}>
        
        </Box>
      </Container>
    </>
  );
};

export default Banner;
