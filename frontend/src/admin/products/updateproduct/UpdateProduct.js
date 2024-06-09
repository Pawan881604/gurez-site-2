import React, { useEffect, useMemo, useState } from "react";
import { Aside } from "../../aside/Aside";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router-dom";

import {
  ClearError,
  GetAllProductLabelAction,
  GetProductAttributeAction,
  getProductDetails,
  updateAdminProduct,
} from "../../../actions/ProductAction";
// import MetaData from "../../../layout/metaData/MetaData";
import { getProductPostMeta } from "../../../actions/PostmetaAction";
import { Box, TextField } from "@mui/material";
import ProductTab from "../../../utils/product_options/update_options/ProductTab";
import Seo_Handler from "../../../utils/seo/Seo_Handler";
import Publish_status from "../../../utils/publish_status/Publish_status";
import Sidebar_categories from "../../../utils/sidebar_categorie/Sidebar_categories";
import Image_card from "../../../utils/Image_card/Image_card";
import Tags from "../../../utils/tags/Tags";
import Featured_Image from "../../../utils/featured_image/Featured_Image";
import Jodit_Editor from "../../../utils/Editor/Jodit_Editor";
import { UPDATE_PRODUCT_RESET } from "../../../constants/ProductConstants";
import { Update_seo, getAllSeo } from "../../../actions/SeoAction";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const Navigate = useNavigate();
  const [oldImage, setOldImage] = useState([]);
  const { error: updateError, isUpdate } = useSelector(
    (state) => state.adminProduct
  );
  const { seoData } = useSelector((state) => state.admin_seo);

  const { error: imageError, images } = useSelector(
    (state) => state.selectedImages
  );
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  const { postmeta } = useSelector((state) => state.postMeta);
  const postmetaData = postmeta && postmeta;
  //-----------urlParams
  const { id } = useParams();

  const [categorie_list, set_categori_list] = useState([]);
  const [sub_categorie_list, set_sub_categorie_list] = useState([]);
  const [article, setArticle] = useState("");
  const [content, setContent] = useState("");
  const [Variations, setVariations] = useState("");

  //-------------usestate

  const [inputValue, setInputValue] = useState({
    title: "",
    slug: "",
    product_Type: "",
    product_regular_price: "",
    product_sale_price: "",
    SKU: "",
    Stock: "",
    product_uuid: "",
    product_meta_uuid: "",
    Sold_Individually: "",
    Availability_Date: "",
    Weight: "",
    Dimensions: "",
    Shipping_class: "",
    Default_value: "",
  });

  //------------------seo
  const [seo_keywords, set_seo_keywords] = useState([]);
  const [seo_input_value, set_seo_input_value] = useState({
    seo_title: "",
    seo_slug: "",
    seo_decription: "",
  });

  const seo_data = {
    title: inputValue.title,
    content,
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const getCurrentImage = () => {
    const imageIds = images && images.map((item) => item.url);
    const oldIds = oldImage && oldImage.map((item) => item);
    if (imageIds && imageIds.length !== 0) {
      return imageIds;
    } else {
      return oldIds;
    }
  };
 
  // const currentImageArray = getCurrentImage();

  useEffect(() => {
    dispatch(getProductDetails("product_uuid", id));
  }, [id]);

  useEffect(() => {
    if (product) {
      if (product.product_uuid) {
        dispatch(getAllSeo(product.product_uuid));
      }

      setInputValue({
        title: product.product_name || "",
        slug: product.slug || "",
        product_uuid: product.product_uuid || "",
        product_Type: product.product_Type || "",
        product_regular_price: product.product_regular_price || "",
        product_sale_price: product.product_sale_price || "",
        SKU: product.product_SKU || "",
        Stock: product.product_Stock || "",
        Sold_Individually: product.product_Sold_Individually || "",
        Availability_Date: product.product_Availability_Date || "",
        Weight: product.product_Weight || "",
        Dimensions: product.product_Dimensions || "",
        Shipping_class: product.product_Shipping_class || "",
        Default_value: product.Default_value || "",
      });
      setOldImage(product.product_images || []);
      setArticle(product.product_article || "");
      setContent(product.product_description || "");

      set_categori_list(
        product.product_category?.map((item) => item._id) || []
      );
      set_sub_categorie_list(
        product.product_subcategory?.map((item) => item._id) || []
      );

      if (product.product_meta_uuid) {
        dispatch(getProductPostMeta(product.product_meta_uuid));
      }
    }
  }, [product, dispatch]);

  // Handle SEO data updates
  useEffect(() => {
    if (seoData && seoData.length > 0) {
      set_seo_input_value({
        seo_title: seoData[0].seo_title || "",
        seo_slug: seoData[0].seo_link || "",
        seo_description: seoData[0].seo_description || "",
      });
      set_seo_keywords(seoData[0].seo_keyword || "");
    }
  }, [seoData]);

  // Handle errors and other side effects
  useEffect(() => {
    if (updateError) {
      alert.error(updateError);
      dispatch(ClearError());
    }
    // if (imageError) {
    //   alert.error(imageError);
    //   dispatch(clearErrors());
    // }
    // if (error) {
    //   alert.error(error);
    //   dispatch(ClearError());
    // }

    // if (isUpdate) {
    //   alert.success("product updated");
    //   Navigate("/admin/all-products");
    //   dispatch({ type: UPDATE_PRODUCT_RESET });
    // }
    dispatch(GetAllProductLabelAction());
    dispatch(GetProductAttributeAction(""));
  }, [updateError, isUpdate, error, alert, Navigate, dispatch]);

  // useMemo(() => {
  //   // if (product && product._id !== id) {
  //   dispatch(getProductDetails(id), []);
  //   // }
  // }, []);

  // useEffect(() => {
  //   if (product) {
  //     product.product_uuid &&
  //       dispatch(getAllSeo(product && product.product_uuid), []);

  //     setInputValue({
  //       title: product && product.product_name,
  //       slug: product && product.slug,
  //       product_uuid: product && product.product_uuid,
  //       product_Type: product && product.product_Type,
  //       product_regular_price: product && product.product_regular_price,
  //       product_sale_price: product && product.product_sale_price,
  //       SKU: product && product.product_SKU,
  //       Stock: product && product.product_Stock,
  //       Sold_Individually: product && product.product_Sold_Individually,
  //       Availability_Date: product && product.product_Availability_Date,
  //       Weight: product && product.product_Weight,
  //       Dimensions: product && product.product_Dimensions,
  //       Shipping_class: product && product.product_Shipping_class,
  //       Default_value: product && product.Default_value,
  //     });
  //     setOldImage(product && product.product_images);
  //     setArticle(product && product.product_article);
  //     setContent(product && product.product_description);

  //     set_categori_list(
  //       product &&
  //         product.product_category &&
  //         product.product_category.map((item) => item._id)
  //     );
  //     set_sub_categorie_list(
  //       product &&
  //         product.product_subcategory &&
  //         product.product_subcategory.map((item) => item._id)
  //     );
  //     product.product_meta_uuid &&
  //       dispatch(getProductPostMeta(product && product.product_meta_uuid), []);
  //   }

  //   // setVariations(product && product.product_description )
  //   if (updateError) {
  //     alert.error(updateError);
  //     dispatch(ClearError());
  //   }
  //   // if (imageError) {
  //   //   alert.error(imageError);
  //   //   dispatch(clearErrors());
  //   // }
  //   // if (error) {
  //   //   alert.error(error);
  //   //   dispatch(ClearError());
  //   // }

  //   // if (isUpdate) {
  //   //   alert.success("product updated");
  //   //   Navigate("/admin/all-products");
  //   //   dispatch({ type: UPDATE_PRODUCT_RESET });
  //   // }
  //   dispatch(GetAllProductLabelAction());
  //   dispatch(GetProductAttributeAction(""));
  //   if (seoData) {
  //     set_seo_input_value({
  //       seo_title: seoData && seoData[0] && seoData[0].seo_title,
  //       seo_slug: seoData && seoData[0] && seoData[0].seo_link,
  //       seo_decription: seoData && seoData[0] && seoData[0].seo_description,
  //     });
  //   }
  // }, [
  //   alert,
  //   updateError,
  //   imageError,
  //   product,
  //   isUpdate,
  //   Navigate,
  //   id,
  //   error,
  //   dispatch,
  //   seoData,
  // ]);

  const handlePublishBut = (e) => {
    // e.preventDefault();

    const currentImageArray = getCurrentImage();

    let VariationData = Variations ? Variations : postmeta && postmeta;
    dispatch(
      updateAdminProduct(
        id,
        categorie_list ? categorie_list : [],
        sub_categorie_list ? sub_categorie_list : [],
        article,
        content,
        VariationData,
        inputValue,
        currentImageArray ? currentImageArray : []
      )
    );
    dispatch(
      Update_seo(
        seo_input_value,
        product && product.product_uuid,
        seoData && seoData[0]&&seoData[0].seo_uuid,
        seo_keywords
      )
    );
  };

  // console.log(product);

  return (
    <>
      {/* <MetaData
        title={"Admin create product list"}
        content={"Admin create product list"}
        keywords={"Admin create product list"}
      /> */}
      <div className="admin-page">
        <div className="admin-page-area">
          <Aside />
          <div id="ad-body">
            <div className="ad-cont">
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
                          name="title"
                          value={inputValue.title}
                          onChange={handleChange}
                        />
                        <div>
                          <Jodit_Editor
                            height={700}
                            getcontent={setArticle}
                            content={article}
                          />
                        </div>
                        <div className="attribute-tab">
                          <ProductTab
                            inputValue={inputValue}
                            handleChange={handleChange}
                            Variations={Variations}
                            setVariations={setVariations}
                          />
                        </div>
                        <div>
                          <Jodit_Editor
                            height={400}
                            getcontent={setContent}
                            content={content}
                          />
                        </div>

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
                    <Publish_status handlePublishBut={handlePublishBut} />
                    <Sidebar_categories
                      set_sub_categorie_list={set_sub_categorie_list}
                      categorie_list={categorie_list}
                      set_categori_list={set_categori_list}
                      sub_categorie_list={sub_categorie_list}
                      cat_status={"product-cat"}
                    />
                    <Image_card selectedImage={oldImage && oldImage} />
                    <Tags />
                    <Featured_Image />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
