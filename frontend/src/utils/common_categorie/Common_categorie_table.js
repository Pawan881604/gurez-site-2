import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { server_url } from "../Url";
import { useDispatch, useSelector } from "react-redux";
import DataGridTable from "../DataGridTable";
import {
  GetBlogCategory,
  get_blog_sub_category,
} from "../../actions/BlogCategoryAction";
import { Box, CircularProgress } from "@mui/material";

const Common_categorie_table = () => {
  const dispatch = useDispatch();
  const { category, loading, all_sub_categores } = useSelector(
    (state) => state.allBlogCategore
  );

  const columns = [
    {
      field: "id",
      headerName: "No",
      width: 50,
    },
    {
      field: "img",
      headerName: "Image",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <img
              width={"50px"}
              height={"50px"}
              src={
                params.row.img !== null
                  ? `${server_url()}/${params.row.img}`
                  : `/placeholder.webp`
              }
              alt="placeholder"
            />
          </>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 50,
      maxWidth: 50,
      renderCell: (params) => {
        return (
          <>
            <NavLink
              className={"link-color"}
              to={`/admin/product/update-categorie/${params.row.uuid}`}
            >
              {params.row.name}
            </NavLink>
          </>
        );
      },
    },
    {
      field: "parent",
      headerName: "Parent",
      width: 130,
    },
    {
      field: "description",
      headerName: "Description",
      width: 130,
    },
    {
      field: "slug",
      headerName: "Slug",
      width: 120,
    },
    {
      field: "count",
      headerName: "Count",
      type: "number",
      width: 120,
      shortable: false,
      renderCell: (params) => {
        return (
          <>
            <NavLink to={`/admin/product/update-categorie/${params.row.uuid}`}>
              <FaUpRightFromSquare />
            </NavLink>
          </>
        );
      },
    },
  ];
  const rows = [];

  // Function to add rows to the 'rows' array
  const addRowsFromCategories = (categories, sub_Categore) => {
    const cat = [...categories, ...sub_Categore];
    console.log(cat);

    cat.forEach((item, i) => {
      // if (item.isdelete !== true) {
      let parentName = "";

      const parentCategory = cat.find(
        (category) => category.uuid === item.Parent_category
      );
      if (parentCategory) {
        parentName = parentCategory.name; // Set parentName to the name of the parent category
      }
      rows.push({
        id: i + 1,
        name: item.blog_category_title,
        parent: item.blog_Parent_category,
        img: item.blog_thumbnail && item.blog_thumbnail.path,
        uuid: item.blog_category_uuid,
        description: item.blog_category_description,
        slug: item.blog_category_slug,
      });
      // }
    });
  };

  // Add rows from main categories
  if (Array.isArray(category) && Array.isArray(all_sub_categores)) {
    addRowsFromCategories(
      category && category,
      all_sub_categores && all_sub_categores
    );
  }

  useEffect(() => {
    dispatch(GetBlogCategory());
    dispatch(get_blog_sub_category());
  }, []);

  return (
    <>
      <DataGridTable rows={rows} columns={columns} loading={loading} />
    </>
  );
};

export default Common_categorie_table;
