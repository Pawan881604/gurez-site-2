import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";

const Bulk_Action = ({ Filter_by_Bulk_Action }) => {
  const [action, setAction] = React.useState("none");

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  return (
    <>
      <div className="row align-center gap-10">
        <div className="col-md-7">
          <TextField
            labelId="demo-select-small-label"
            value={action}
            margin="normal"
            select
            style={{ width: "100%", paddingRight: 5 }}
            label="Bulk Action"
            sx={{ m: 1, minWidth: "600px", with: "300px" }}
            size="medium"
            onChange={handleChange}
          >
            <option value={"none"}>None</option>
            <option value={"Move to trash"}>Move to trash</option>
            <option value={"delete"}>Delete</option>
            <option value={30}>Thirty</option>
          </TextField>
        </div>
        <div className="col-md-2">
          <Button
            style={{ width: "50%", paddingRight: 5 }}
            variant="outlined"
            size="small"
            onClick={() => Filter_by_Bulk_Action(action)}
          >
            Apply
          </Button>
        </div>
      </div>
    </>
  );
};

export default Bulk_Action;
