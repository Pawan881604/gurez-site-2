import { TextField } from "@material-ui/core";
import React, { useState } from "react";

const Filter_by_Date = () => {
  const [action, setAction] = useState("All Date");

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
      <option value={"All Date"}>All Date</option>
      <option value={"November 2023"}>November 2023</option>
    </TextField>
  );
};

export default Filter_by_Date;
