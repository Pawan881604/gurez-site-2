import {
  Box,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

const navItems = ["Packaging", "Personal Care", "Pet Care"];
const Categorie_navigation = () => {
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

export default Categorie_navigation;
