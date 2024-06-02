import React, { memo } from "react";
import Common_categorie_form from "./Common_categorie_form";
import Common_categorie_table from "./Common_categorie_table";
import { Typography } from "@mui/material";

const Common_categorie = ({
  category,
  admin_status,
  add_sub_categorie,
  add_parent_caregorie,
  reset_type_parent_cat,
  reset_type_sub_cat,
}) => {
  return (
    <Typography
      style={{ padding: "0px 10px 10px", marginTop: "50px" }}
      component="div"
    >
      <Typography> Product categories</Typography>
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-md-5">
          <Common_categorie_form
            category={category}
            add_parent_caregorie={add_parent_caregorie}
            add_sub_categorie={add_sub_categorie}
            reset_type_parent_cat={reset_type_parent_cat}
            reset_type_sub_cat={reset_type_sub_cat}
            admin_status={admin_status}
          />
        </div>
        <div className="col-md-8">
          <Common_categorie_table />
        </div>
      </div>
    </Typography>
  );
};

export default memo(Common_categorie);
