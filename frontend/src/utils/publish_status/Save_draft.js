import { Button, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { GrLocationPin } from "react-icons/gr";

const Save_draft = ({ draft_action, set_draft_action }) => {
  const [status, set_status] = React.useState(false);
  const [action, set_action] = React.useState("Draft");
  const handleChange = (event) => {
    set_action(event.target.value);
  };

  const submit_handle_action = () => {
    set_draft_action(action);
    set_status(false);
  };

  return (
    <>
      <div className="xxsm-font-size row gap-5" style={{ padding: "2px 0" }}>
        <span>
          <GrLocationPin />
        </span>
        <span>Save: {draft_action}</span>
        {!status && (
          <span
            onClick={() => set_status(!status)}
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Edit
          </span>
        )}
      </div>
      {status && (
        <div
          className="xxsm-font-size row gap-5 space-between-center"
          style={{ padding: "5px 0 5px" }}
        >
          <div className="col-md-6">
            <TextField
              id="demo-select-small"
              value={action}
              select
              className="input-fields-control"
              style={{ width: "100%" }}
              SelectProps={{
                native: true,
              }}
              onChange={handleChange}
            >
              <option className="xxsm-font-size" value={"Draft"}>
                Draft
              </option>
              <option className="xxsm-font-size" value={"Pending"}>
                Pending
              </option>
            </TextField>
          </div>
          <div className="col-md-6">
            <div className="row gap-5 space-between-end">
              <Button
                size="small"
                variant="outlined"
                style={{
                  width: "30px",
                  padding: "3px",
                  minWidth: "40px",
                }}
                onClick={submit_handle_action}
              >
                Ok
              </Button>
              <span
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => set_status(false)}
              >
                Cancle
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Save_draft;
