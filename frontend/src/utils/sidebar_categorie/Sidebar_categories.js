import React, { useEffect, useState } from "react";
import { GrLocationPin } from "react-icons/gr";
import { FaRegEye } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import "./sidebar_categorie.css";
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
} from "@mui/material";
import Categories_list from "./Categories_list";
import Add_New_categorie_list from "./Add_New_categorie_list";
import {
  GetBlogCategory,
  get_blog_sub_category,
} from "../../actions/BlogCategoryAction";
import { useDispatch } from "react-redux";
import {
  getAllCategories,
  get_all_sub_categories,
} from "../../actions/CategoreAction";

const Sidebar_categories = ({
  categorie_list,
  set_categori_list,
  sub_categorie_list,
  set_sub_categorie_list,
  cat_status,
}) => {
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [sub_selectedIndices, set_sub_SelectedIndices] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cat_status === "product-cat") {
      dispatch(getAllCategories());
      dispatch(get_all_sub_categories());
    } else if (cat_status === "blog-cat") {
      dispatch(GetBlogCategory());
      dispatch(get_blog_sub_category());
    }
  }, [cat_status, dispatch]);

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
            Categories
          </Typography>

          <Typography style={{ padding: "10px 25px" }} component="div">
            <Button
              size="small"
              style={{ width: "130px", fontSize: "11px", padding: "3px 5px" }}
              variant="outlined"
            >
              All Categories
            </Button>
            <Categories_list
            cat_status={cat_status}
              selectedIndices={categorie_list}
              setSelectedIndices={set_categori_list}
              sub_selectedIndices={sub_categorie_list}
              set_sub_SelectedIndices={set_sub_categorie_list}
            />
          </Typography>
        </CardContent>
        <CardActions>
          <Add_New_categorie_list />
        </CardActions>
      </Card>
    </Box>
  );
};

export default Sidebar_categories;
