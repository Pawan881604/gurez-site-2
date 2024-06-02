import React, { useState } from "react";
import { GrLocationPin } from "react-icons/gr";
import { FaRegEye } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import {
  Typography,
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";
import { Chip } from "@material-ui/core";
const Tags = () => {
  const [new_tags, set_new_tags] = useState("");
  const [all_tags, set_all_tags] = useState([]);

  const tag_handler = () => {
    set_all_tags((prev) => [...prev, new_tags]);
    set_new_tags("");
  };

  const handleDelete = (index) => {
    const updated_tages = all_tags.filter((item, i) => i !== index);
    set_all_tags(updated_tages);
  };

  return (
    <Box sx={{ minWidth: 275, marginTop: 5 }}>
      <Card variant="outlined">
        <CardContent sx={{ padding: 0 }}>
          <Typography
            sx={{
              fontSize: 14,
              padding: 1,
              borderBottom: "1px solid",
              borderColor: "text.secondary",
            }}
            color="text.secondary"
            gutterBottom
          >
            Tags
          </Typography>

          <Typography component="div" style={{ padding: 15 }}>
            <TextField
              id="demo-select-small"
              value={new_tags}
              size="small"
              type="text"
              className="input-fields-control"
              style={{ width: "100%", margin: "10px 0 5px" }}
              onChange={(e) => set_new_tags(e.target.value)}
            ></TextField>

            <Button
              variant="outlined"
              size="small"
              style={{
                width: "50px",
                fontSize: "11px",
                padding: "3px",
                marginTop: "5px",
              }}
              onClick={tag_handler}
            >
              Add
            </Button>
          </Typography>
          <Typography component="div" style={{ padding: "0 15px" }}>
            {all_tags.map((item, i) => (
              <Chip
                key={i}
                className="tagify__tag-text"
                label={item}
                onDelete={() => handleDelete(i)}
              />
            ))}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Tags;
