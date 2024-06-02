import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Add_New_categorie_list = () => {
  const [is_visiable, set_Is_visiable] = useState(false);
  const [new_category, set_new_category] = useState("");
  const [parent_category, set_parent_category] = useState(
    "-- Parent Category --"
  );
  const datasa = ["demi1", "demo2", "demo3", "demo4"];

  const handleChange = () => {};

  return (
    <Typography style={{ padding: "0px 10px 10px" }} component="div">
      <Typography
        component="p"
        style={{
          color: "blue",
          fontSize: "14px",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={(e) => set_Is_visiable(!is_visiable)}
      >
        + Add new Category
      </Typography>
      {is_visiable && (
        <Typography component="div">
          <TextField
            id="demo-select-small"
            value={new_category}
            size="small"
            type="text"
            className="input-fields-control"
            style={{ width: "100%", margin: "10px 0 5px" }}
            onChange={(e) => set_new_category(e.target.value)}
          ></TextField>

          <TextField
            id="demo-select-small"
            value={parent_category}
            select
            className="input-fields-control"
            style={{ width: "100%", margin: "10px 0 5px" }}
            SelectProps={{
              native: true,
            }}
            onChange={handleChange}
          >
            <option className="xxsm-font-size" value={"-- Parent Category --"}>
              -- Parent Category --
            </option>
            {datasa.map((item, i) => (
              <option key={i} className="xxsm-font-size" value={item}>
                {item}
              </option>
            ))}
          </TextField>
          <Button
            variant="outlined"
            size="small"
            style={{
              width: "140px",
              fontSize: "11px",
              padding: "3px",
              marginTop: "10px",
            }}
          >
            Add New Category
          </Button>
        </Typography>
      )}
    </Typography>
  );
};

export default Add_New_categorie_list;
