import { TextField } from "@material-ui/core";
import React, { useState } from "react";

const Categories_filter = () => {
  const [action, setAction] = useState("All Categories");

  const handleChange = (event) => {
    setAction(event.target.value);
  };
  return (
    <TextField
      labelId="demo-select-small-label"
      value={action}
      margin="normal"
      select
      style={{ width: "50%", paddingRight: 5 }}
      sx={{ m: 1, minWidth: "600px", with: "300px" }}
      size="medium"
      onChange={handleChange}
    >
      <option value={"All Categories"}>All Categories</option>
      <option value={"demo"}>demo</option>
      <option value={"demo1"}>demo1</option>
      <option value={"demo2"}>demo2</option>
    </TextField>
  );
};

export default Categories_filter;
