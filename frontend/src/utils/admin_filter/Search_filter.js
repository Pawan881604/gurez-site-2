import { TextField } from "@material-ui/core";
import React from "react";

const Search_filter = () => {
  return (
    <div>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"
      />
    </div>
  );
};

export default Search_filter;
