import {
  Button,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { GrLocationPin } from "react-icons/gr";

const Publish_immediately = ({ Publish_action, set_Publish_action }) => {
  const [status, set_status] = React.useState(false);
  const [password, set_password] = React.useState("");
  const [action, set_action] = React.useState("Public");
  const handleChange = (event) => {
    set_action(event.target.value);
  };

  const submit_handle_action = () => {
    set_Publish_action(action);
    set_status(false);
  };

  return (
    <>
      <div
        className="xxsm-font-size row gap-5"
        style={{ padding: "5px 0 5px" }}
      >
        <span>
          <GrLocationPin />
        </span>
        <span>Save: {Visibility_action}</span>
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
        <div className="xxsm-font-size" style={{ padding: "2px 0" }}>
          <div className="col-md-12">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Public"
              name="radio-buttons-group"
              value={action}
              className="input-radio-fields-control"
              onChange={handleChange}
            >
              <FormControlLabel
                value="Public"
                control={<Radio />}
                label="Public"
              />
              <FormControlLabel
                value="Password protected"
                control={<Radio />}
                label="Password protected"
              />
              {action === "Password protected" && (
                <TextField
                  id="demo-select-small"
                  value={password}
                  size="small"
                  type="password"
                  className="input-fields-control"
                  style={{ width: "100%", margin: "3px 0" }}
                  onChange={(e) => set_password(e.target.value)}
                ></TextField>
              )}
              <FormControlLabel
                value="Private
"
                control={<Radio />}
                label="Private
"
              />
            </RadioGroup>
          </div>
          <div className="col-md-6 spacer">
            <div className="row gap-5">
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

export default Publish_immediately;
