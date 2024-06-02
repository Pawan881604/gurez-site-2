import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { LogoutUser } from "../../../../actions/UserAction";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { Box, CircularProgress } from "@mui/material";
const User_Status = ({ user, loading }) => {
  const Navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <span onClick={handleClick} className="user-d">
        <span>
          {user && user.is_verified === "Active" ? (
            String(user && user.name).slice(0, 1)
          ) : (
            <FaUser onClick={handleClick} />
          )}
        </span>
      </span>

      {user && user.is_verified === "Active" ? (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onMouseDown={() => Navigate("/user-dashboard")}
            onClick={handleClose}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            onMouseDown={() => {
              dispatch(LogoutUser());
              alert.success("user logout");
              Navigate("/");
            }}
            onClick={handleClose}
          >
            Log out
          </MenuItem>
        </Menu>
      ) : (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onMouseDown={() => Navigate("/sign-in")}
            onClick={handleClose}
          >
            Sign in
          </MenuItem>
          <MenuItem
            onMouseDown={() => Navigate("/sing-up")}
            onClick={handleClose}
          >
            Sign up
          </MenuItem>
        </Menu>
      )}
    </>
  );
};

export default User_Status;
