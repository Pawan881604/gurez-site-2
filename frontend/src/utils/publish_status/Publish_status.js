import * as React from "react";
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
  CircularProgress,
} from "@mui/material";
import Save_draft from "./Save_draft";
import Visibility_public from "./Visibility_public";

const Publish_status = ({ handlePublishBut, loading }) => {
  const [draft_action, set_draft_action] = React.useState("Draft");
  const [Visibility_action, set_Visibility_action] = React.useState("Public");
  const [Publish_action, set_Publish_action] = React.useState("Public");
  return (
    <Box sx={{ minWidth: 275 }}>
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
            Publish
          </Typography>
          <Typography
            component="div"
            sx={{
              padding: 1,
            }}
            className="row space-between-center gap-10 from-space"
          >
            <Button
              style={{ fontSize: "11px" }}
              size="small"
              variant="outlined"
            >
              Save{" "}
              {draft_action === "Draft" ? draft_action : `as ${draft_action}`}
            </Button>
            <Button
              disabled={true}
              style={{ fontSize: "11px" }}
              size="small"
              variant="outlined"
            >
              Preview
            </Button>
          </Typography>

          <Typography style={{ padding: "10px 25px" }} component="div">
            <Save_draft
              draft_action={draft_action}
              set_draft_action={set_draft_action}
            />
            <Visibility_public
              Visibility_action={Visibility_action}
              set_Visibility_action={set_Visibility_action}
            />

            <div
              className="xxsm-font-size row gap-5"
              style={{ padding: "5px 0 5px" }}
            >
              <span>
                <FaCalendarAlt />
              </span>{" "}
              <span>Publish immediately</span>{" "}
              <span
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Edit
              </span>
            </div>
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            padding: 1,
            borderTop: "1px solid",
            borderColor: "text.secondary",
          }}
        >
          <div className="row space-between-center">
            <div
              className="col-md-6 xxsm-font-size"
              style={{
                color: "red",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Move to Trash
            </div>
            <div className="col-md-6">
              <Button
                type="submit"
                fullWidth
                size="small"
                style={{ fontSize: "12px" }}
                onClick={() => handlePublishBut()}
                variant="contained"
                disabled={loading}
                sx={{
                  mt: 3,
                  mb: 3,
                  color: "#fff",
                  backgroundColor: "#73c631",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#73c631",
                  },
                }}
                startIcon={!loading}
              >
                {loading ? (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress size={24} color="inherit" />
                  </div>
                ) : (
                  "Publish"
                )}
              </Button>
            </div>
          </div>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Publish_status;
