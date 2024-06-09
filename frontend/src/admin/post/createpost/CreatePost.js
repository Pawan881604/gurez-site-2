import React, { useEffect, useState } from "react";
import { Aside } from "../../aside/Aside";
import "./CreatePost.css";
import MyEditor from "../../../components/layout/classiceditor/MyEditor";
// import MetaData from "../../../components/layout/metaData/MetaData";
// import { CharCount } from "../../../components/layout/CharCount/CharCount";
// CharCount
import Categore from "./assets/Categore";
import { GetBlogCategory } from "../../../actions/BlogCategoryAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { ClearError, CreateBlogPost } from "../../../actions/BlogPostAction";
import { useNavigate } from "react-router-dom";
import { CREATE_BLOG_POST_RESET } from "../../../constants/BlogPostConstants";
import CreateSeo from "../../seo/create/CreateSeo";
// import Loader from "../../../components/layout/loader/Loader";
// Loader
// import CK_Calssic_Editor from "../../../utils/Editor/CK_Calssic_Editor";
import { Box, TextField } from "@mui/material";
import Seo_Handler from "../../../utils/seo/Seo_Handler";
import Publish_status from "../../../utils/publish_status/Publish_status";
import Sidebar_categories from "../../../utils/sidebar_categorie/Sidebar_categories";
import Tags from "../../../utils/tags/Tags";
import Featured_Image from "../../../utils/featured_image/Featured_Image";
// import Featured_Image from "../../../utils/featured_image/Featured_Image";


import Draft_wysiwyg from "../../../utils/Editor/Draft_wysiwyg";
import Loader from "../../../utils/loader/Loader";
import { CharCount } from "../../../utils/CharCount/CharCount";
function CreatePost() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const Navigate = useNavigate();
  const { loading, success, error } = useSelector(
    (state) => state.adminCreatePost
  );

  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setSescription] = useState("");
  const [slug, setSlug] = useState("");
  const [seoInputValue, setSeoInputValue] = useState({
    seotitle: "",
    keyword: "",
    metadec: "",
    metalink: "",
  });

  //------------------seo
  const [seo_keywords, set_seo_keywords] = useState([]);
  const [seo_input_value, set_seo_input_value] = useState({
    seo_title: "",
    seo_slug: "",
    seo_decription: "",
  });

  const contentHeandle = (e) => {
    setSescription(e);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!seoInputValue) {
      return alert.error("seoInputValue is undefined or null");
    }
    const { seotitle, keyword, metadec, metalink } = seoInputValue;
    if (
      selectedCategoryId.trim() === "" ||
      title.trim() === "" ||
      description.trim() === "" ||
      slug.trim() === "" ||
      seotitle.trim() === "" ||
      keyword.trim() === "" ||
      metadec.trim() === "" ||
      metalink.trim() === ""
    ) {
      return alert.error("Please fill out all required fields.");
    }

    dispatch(
      CreateBlogPost(
        selectedCategoryId,
        title,
        description,
        slug,
        seotitle,
        keyword,
        metadec,
        metalink
      )
    );
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(ClearError());
    }

    if (success) {
      alert.success("Product successfully created");
      dispatch({ type: CREATE_BLOG_POST_RESET });
      Navigate("/admin/post/all-post");
    }

    if (title) {
      setSeoInputValue((prev) => ({ ...prev, seotitle: title }));
    }
    if (slug) {
      setSeoInputValue((prev) => ({ ...prev, metalink: slug }));
    }

    dispatch(GetBlogCategory());
  }, [dispatch, success, error, alert, title, slug]);

  const seoHandler = (e) => {
    const { name, value } = e.target;

    setSeoInputValue({ ...seoInputValue, [name]: value });
  };

  const seo_data = {
    title,
    // content,
  };

  return (
    <>
      <div className="admin-page">
        <div className="admin-page-area">
          <Aside />
          <div id="ad-body">
            <div className="ad-cont">
              {/* <CK_Calssic_Editor/> */}

              <div className="containor">
                <div className="title">
                  <h2>Add New Post</h2>
                </div>

                <div className="row metabox-wrap space-between">
                  <div className="col-md-8">
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          placeholder="Add Title"
                          id="outlined-size-small"
                          size="small"
                          style={{ width: "100%" }}
                        />
                        <div>
                          <Draft_wysiwyg box_class={"control-editor-content"} />
                        </div>
                        {/* <CK_Calssic_Editor style_editor={"content"} /> */}

                        <Seo_Handler
                          seo_data={seo_data}
                          seo_keywords={seo_keywords}
                          set_seo_keywords={set_seo_keywords}
                          seo_input_value={seo_input_value}
                          set_seo_input_value={set_seo_input_value}
                        />
                      </div>
                    </Box>
                  </div>
                  <div className="col-md-4">
                    <Publish_status />
                    <Sidebar_categories />
                    <Categore setSelectedCategoryId={setSelectedCategoryId} />
                    <Tags />
                    <Featured_Image />
                  </div>
                </div>
              </div>

              {/* {loading ? (
                <Loader />
                ) : (
                  <>
                  
                  </>
                )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
