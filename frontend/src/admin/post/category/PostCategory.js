import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Aside } from "../../aside/Aside";
import PostCategoryForm from "./assets/PostCategoryForm";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  GetBlogCategory,
  ClearError,
  CreatePostCategory,
  DeletePostCategory,
  create_new_post_sub_categore,
} from "../../../actions/BlogCategoryAction";
// import Loader from "../../../components/layout/loader/Loader";
// Loader
import { DataGrid } from "@material-ui/data-grid";
import { NavLink } from "react-router-dom";
import { FaTrash, FaUpRightFromSquare } from "react-icons/fa6";
import {
  CREATE_CATEGORY_RESET,
  DELETE_CATEGORY_RESET,
  NEW_SUB_POST_CATEGORIE_RESET,
} from "../../../constants/BlogCategoryConstant";
import Common_categorie from "../../../utils/common_categorie/Common_categorie";
import Common_categorie_form from "../../../utils/common_categorie/Common_categorie_form";
import Loader from "../../../utils/loader/Loader";

function PostCategory() {
  const { loading, success, error } = useSelector(
    (state) => state.adminCreateBlogCategory
  );
  const admin_status = {
    loading,
    success,
    error,
  };
  const { category } = useSelector((state) => state.allBlogCategore);

  return (
    <>
      <Helmet>
        <title itemProp="name" lang="en">
          Admin All Products
        </title>
        <meta name="keywords" content="Admin All Products" />
      </Helmet>
      <div className="admin-page">
        <div className="admin-page-area">
          <Aside />
          <div id="ad-body">
            <Common_categorie
              category={category}
             
              add_parent_caregorie={CreatePostCategory}
              add_sub_categorie={create_new_post_sub_categore}
              reset_type_parent_cat={CREATE_CATEGORY_RESET}
              reset_type_sub_cat={NEW_SUB_POST_CATEGORIE_RESET}
              admin_status={admin_status}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCategory;
