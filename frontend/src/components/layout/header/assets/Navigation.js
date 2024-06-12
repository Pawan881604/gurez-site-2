import {
  Box,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

const navItems = ["Blog", "About-Us", "Login"];

const Navigation = () => {
  return (
    <Box sx={{ width: "40%" }}>
      <List sx={{ display: "flex", width: "100%" }}>
        {navItems.map((item) => (
          <ListItem sx={{ textAlign: "Center" }} key={item} disablePadding>
            {/* <ListItemButton sx={{ textAlign: "center" }}> */}
            <ListItemText primary={item} />
            {/* </ListItemButton> */}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Navigation;
