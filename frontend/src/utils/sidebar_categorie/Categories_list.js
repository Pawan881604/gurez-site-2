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
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Categories_list = ({
  selectedIndices = [],
  setSelectedIndices,
  sub_selectedIndices = [],
  set_sub_SelectedIndices,
  cat_status,
}) => {
  const [loading, set_loading] = useState(false);
  const [category, set_category] = useState(null);
  const [all_sub_categores, set_all_sub_categores] = useState(null);
  //----------------------product
  const product_loading = useSelector((state) => state.Categore.loading);
  const productCategores = useSelector((state) => state.Categore.allcategores);
  const productSubCategores = useSelector(
    (state) => state.sub_Categore.all_sub_categores
  );
  //----------------------bog
  const blog_loading = useSelector((state) => state.allBlogCategore.loading);
  const blogCategores = useSelector((state) => state.allBlogCategore.category);
  const blogSubCategores = useSelector(
    (state) => state.allBlogCategore.all_sub_categores
  );
  console.log(blogCategores);
  useEffect(() => {
    if (cat_status === "product-cat") {
      // set_loading(product_loading);
      set_category(productCategores);
      set_all_sub_categores(productSubCategores);
    } else if (cat_status === "blog-cat") {
      // set_loading(blog_loading);
      set_category(blogCategores);
      set_all_sub_categores(blogSubCategores);
    }
  }, [
    cat_status,
    productCategores,
    productSubCategores,
    blogCategores,
    blogSubCategores,
    blog_loading,
    product_loading,
  ]);

  const changeHandler = (index) => {
    setSelectedIndices((prev) => {
      if (prev.includes(index)) {
        // If the index is already in the array, remove it (deselect)
        return prev.filter((i) => i !== index);
      } else {
        // If the index is not in the array, add it (select)
        return [...prev, index];
      }
    });
  };

  const sub_changeHandler = (index) => {
    set_sub_SelectedIndices((prev) => {
      if (prev.includes(index)) {
        // If the index is already in the array, remove it (deselect)
        return prev.filter((i) => i !== index);
      } else {
        // If the index is not in the array, add it (select)
        return [...prev, index];
      }
    });
  };

  return (
    <>
      <Box>
        <Card
          className="cat-inbox-select"
          style={{ padding: "10px 25px" }}
          variant="outlined"
        >
          {loading ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                minHeight: 225,
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <FormGroup>
              {category &&
                category.map((Parent, i) => (
                  <>
                    <FormControlLabel
                      key={i}
                      size="small"
                      onChange={() => changeHandler(Parent._id)}
                      control={
                        <Checkbox
                          checked={selectedIndices.includes(Parent._id)}
                        />
                      }
                      label={
                        cat_status === "product-cat"
                          ? Parent.name
                          : Parent.blog_category_title
                      }
                    />

                    {all_sub_categores &&
                    all_sub_categores.filter(
                      (item) =>
                        item.blog_Parent_category === Parent.blog_category_uuid
                    ).length > 0 ? (
                      <ul>
                        {all_sub_categores &&
                          all_sub_categores
                            .filter((item) => {
                              if (cat_status === "product-cat") {
                                return item.Parent_category === Parent.uuid;
                              } else {
                                return (
                                  item.blog_Parent_category ===
                                  Parent.blog_category_uuid
                                );
                              }
                            })

                            .map((item, i) => (
                              <li key={i}>
                                <FormControlLabel
                                  size="small"
                                  onChange={() => sub_changeHandler(item._id)}
                                  control={
                                    <Checkbox
                                      checked={sub_selectedIndices.includes(
                                        item._id
                                      )}
                                    />
                                  }
                                  label={
                                    cat_status === "product-cat"
                                      ? item.name
                                      : Parent.blog_category_title
                                  }
                                />
                              </li>
                            ))}
                      </ul>
                    ) : null}
                  </>
                ))}
            </FormGroup>
          )}
        </Card>
      </Box>
    </>
  );
};

export default Categories_list;
