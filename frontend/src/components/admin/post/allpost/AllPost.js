import React, { useEffect, useState } from "react";
import { Aside } from "../../aside/Aside";
import { NavLink, useNavigate } from "react-router-dom";
import "./AllPost.css";
import CreatePost from "../createpost/CreatePost";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  ClearError,
  DeleteBlogPost,
  GetBlogPost,
} from "../../../../actions/BlogPostAction";
import { DELETE_BLOG_POST_RESET } from "../../../../constants/BlogPostConstants";
import { Button } from "@material-ui/core";
import Bulk_Action from "../../../../utils/admin_filter/Bulk_Action";
import Filter_by_Date from "../../../../utils/admin_filter/Filter_by_Date";
import Categories_filter from "../../../../utils/admin_filter/Categories_filter";
import Search_filter from "../../../../utils/admin_filter/Search_filter";
import All_Filter_links from "../../../../utils/admin_filter/All_Filter_links";
import Table_filter from "../../../../utils/admin_filter/Table_filter";
import Common_categorie from "../../../../utils/common_categorie/Common_categorie";
import Common_categorie_table from "../../../../utils/common_categorie/Common_categorie_table";
import { TimeAgo } from "../../../layout/time/TimeAgo";
import { FaUpRightFromSquare } from "react-icons/fa6";
import DataGridTable from "../../../../utils/DataGridTable";

function AllPost() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const Navigate = useNavigate();
  const { loading, blog, error } = useSelector((state) => state.allBlog);
  const {
    loading: deleteLoading,
    isDeleted,
    error: deleteError,
  } = useSelector((state) => state.adminDeletePost);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(ClearError());
    }
    if (deleteError) {
      alert.error(deleteError);
      dispatch(ClearError());
    }
    if (isDeleted) {
      alert.success("Post has been deleted");
      dispatch({ type: DELETE_BLOG_POST_RESET });
    }
    dispatch(GetBlogPost());
  }, [alert, dispatch, error, Navigate, deleteError, isDeleted]);

  const deletehandler = (id) => {
    dispatch(DeleteBlogPost(id));
  };

  const dummy = [
    {
      Title: "demo",
      Author: "gurezecom",
      Categories: "Pet Products",
      Tags: "	Tags",
      Date: "	001",
    },
    {
      Title: "demo1",
      Author: "gureze",
      Categories: "Pet ",
      Tags: "	Tagsc",
      Date: "	001",
    },
    {
      Title: "demo2",
      Author: "gureom",
      Categories: "Pet",
      Tags: "	Tags",
      Date: "	001",
    },
    {
      Title: "demo3",
      Author: "gurem",
      Categories: "Pets",
      Tags: "	Tags",
      Date: "	001",
    },
    {
      Title: "demo4",
      Author: "gurezecdom",
      Categories: "Pet Psdroducts",
      Tags: "	Tagss",
      Date: "	001",
    },
  ];
  const columns = [
    {
      field: "name",
      headerName: "Title",
      minWidth: 100,
    },
    {
      field: "author",
      headerName: "Author",
      minWidth: 150,
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 150,
    },
    {
      field: "tag",
      headerName: "Tag",
      minWidth: 150,
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 150,
      renderCell: (params) => <TimeAgo time={params.value} />,
    },
    {
      field: "action",
      headerName: "Action",
      type: "number",
      minWidth: 150,
      shortable: false,
      renderCell: (params) => {
        return (
          <>
            <NavLink
            //   to={`/admin/post/update/${params.getValue(params.id, "id")}`}
            >
              <FaUpRightFromSquare />
            </NavLink>
          </>
        );
      },
    },
  ];

  const rows = [];
  dummy &&
    dummy.forEach((item, i) => {
      rows.push({
        id: i,
        name: item.Title,
        author: item.Author,
        category: item.Categories,
        tag: item.Tags,
        date: item.Date,
      });
    });
  return (
    <>
      <div className="admin-page">
        <div className="admin-page-area">
          <Aside />
          <div id="ad-body">
            <div className="ad-cont">
              <section className="page-section">
                <div className="all-post">
                  <div className="all-post-heading row" style={{ gap: 5 }}>
                    <h2>Posts</h2>
                    <Button
                      style={{ width: "150px" }}
                      size="small"
                      className="xsm-font-size"
                      onClick={() => Navigate("/admin/post/add-new-post")}
                      variant="outlined"
                    >
                      Add New Post
                    </Button>
                  </div>
                  <div className="all-products-cont">
                    <div className="all-products-content-area">
                      <div className="productdata">
                        {/* {deleteLoading ? (
                          <Loader />
                        ) : (
                          <>
                            {blog && blog.length > 0 ? (
                              <> */}
                        <div className="table-grid">
                          <DataGridTable
                            rows={rows}
                            columns={columns}
                            loading={false}
                          />
                        </div>
                        {/* </>
                            ) : (
                              <p>no data found</p>
                            )}
                          </>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllPost;
