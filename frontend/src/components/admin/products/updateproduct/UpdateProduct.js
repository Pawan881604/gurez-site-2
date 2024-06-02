import React, { useEffect, useMemo, useState } from "react";
import { Aside } from "../../aside/Aside";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import {
  ClearError,
  GetAllProductLabelAction,
  GetProductAttributeAction,
  getProductDetails,
  updateAdminProduct,
} from "../../../../actions/ProductAction";
import { UPDATE_PRODUCT_RESET } from "../../../../constants/ProductConstants";
import Loader from "../../../layout/loader/Loader";
import "./updateproduct.css";
import { Helmet } from "react-helmet";
import { CharCount } from "../../../layout/CharCount/CharCount";
import { ProductSidebar } from "../createproduct/ProductSidebar";
import MetaData from "../../../layout/metaData/MetaData";
import ProductUpdateForm from "../productUpdateform/ProductUpdateForm";
import ImageTabToggle from "../../ImageGellery/uploadimage/ImageTabToggle";
import {
  clearErrors,
  getAllImages,
} from "../../../../actions/imageGelleryAction";
import CreateSeo from "../../seo/create/CreateSeo";
import UpdateForm from "./updateproductform/UpdateForm";
import { getProductPostMeta } from "../../../../actions/PostmetaAction";
import PublishSection from "./assets/PublishSection";
import { Box, TextField } from "@mui/material";
import Draft_wysiwyg from "../../../../utils/Editor/Draft_wysiwyg";
import ProductTab from "../../../../utils/product_options/ProductTab";
import Seo_Handler from "../../../../utils/seo/Seo_Handler";
import Publish_status from "../../../../utils/publish_status/Publish_status";
import Sidebar_categories from "../../../../utils/sidebar_categorie/Sidebar_categories";
import Image_card from "../../../../utils/Image_card/Image_card";
import Tags from "../../../../utils/tags/Tags";
import Featured_Image from "../../../../utils/featured_image/Featured_Image";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const alert = useAlert();
  const { error: updateError, isUpdate } = useSelector(
    (state) => state.adminProduct
  );
  const { images } = useSelector((state) => state.selectedImages);

  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  const { postmeta } = useSelector((state) => state.postMeta);
  const postmetaData = postmeta && postmeta;
  //-----------urlParams
  const { id } = useParams();

  const [categorie_list, set_categori_list] = useState([]);
  const [oldImage, setOldImage] = useState([]);
  const [sub_categorie_list, set_sub_categorie_list] = useState([]);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [product_uuid, set_product_uuid] = useState("");
  const [article, setArticle] = useState("");
  const [content, setContent] = useState("");
  const [product_Type, setProductType] = useState("Simple product");

  // Genral
  const [product_regular_price, setProduct_regular_price] = useState("");
  const [product_sale_price, setProduct_sale_price] = useState("");

  //Inventory
  const [SKU, setSKU] = useState("");
  const [Stock, setStock] = useState(true);
  const [Sold_Individually, setSold_Individually] = useState(false);
  const [Availability_Date, setAvailability_Date] = useState("");
  //Shiupping
  const [Weight, setWeight] = useState("");
  const [Dimensions, setDimensions] = useState("");
  const [Shipping_class, setShipping_class] = useState("");
  //Variations
  const [Default_value, setDefault_value] = useState("");
  const [Variations, setVariations] = useState(null);

  //------------------seo
  const [seo_keywords, set_seo_keywords] = useState([]);
  const [seo_input_value, set_seo_input_value] = useState({
    seo_title: "",
    seo_slug: "",
    seo_decription: "",
  });

  const seo_data = {
    title,
    content,
  };

  const getCurrentImage = () => {
    const imageIds = images && images.map((item) => item._id);
    const oldIds = oldImage && oldImage.map((item) => item._id);
    if (imageIds && imageIds.length !== 0) {
      return imageIds;
    } else {
      return oldIds;
    }
  };

  const currentImageArray = getCurrentImage();

  // dispatch(
  //   updateAdminProduct(id, productData, checkedItems, subcheckedItems)
  // );

  useMemo(() => {
    // if (product && product._id !== id) {
    dispatch(getProductDetails(id), []);
    // }
  }, []);

  useEffect(() => {
    if (product) {
      setTitle(product && product.product_name);
        setSlug(product && product.slug);
        set_product_uuid(product && product.product_uuid);
        // article: product && product.product_article;
        // content: product && product.product_description;
        setProductType(product && product.product_Type);
        setProduct_regular_price(product && product.product_regular_price);
        setProduct_sale_price(product && product.product_sale_price);
        setSKU(product && product.product_SKU);
        setStock(product && product.product_Stock);
        setSold_Individually(product && product.product_Sold_Individually);
        setAvailability_Date(product && product.product_Availability_Date);
        setWeight(product && product.product_Weight);
        setDimensions(product && product.product_Dimensions);
        setShipping_class(product && product.product_Shipping_class);
        setDefault_value(product && product.Default_value);
        setOldImage(product && product.product_images);
      setArticle(product && product.product_article);
      setContent(product && product.product_description);

      set_categori_list(
        product &&
          product.product_category &&
          product.product_category.map((item) => item._id)
      );
      set_sub_categorie_list(
        product &&
          product.product_subcategory &&
          product.product_subcategory.map((item) => item._id)
      );
      product.product_meta_uuid &&
        dispatch(getProductPostMeta(product && product.product_meta_uuid), []);
    }

    // setVariations(product && product.product_description )
    // if (updateError) {
    //   alert.error(updateError);
    //   dispatch(ClearError());
    // }
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
  }, [
    alert,
    updateError,
    // imageError,
    product,
    isUpdate,
    Navigate,
    id,
    error,
    dispatch,
  ]);

  // [
  //
  // ])}

  const handlePublishBut = (e) => {
    // e.preventDefault();

    const currentImageArray = getCurrentImage();

    let VariationData = Variations ? Variations : postmeta && postmeta;
    console.log(VariationData);
    dispatch(
      updateAdminProduct(
        id,
        categorie_list,
        sub_categorie_list,
        article,
        content,
        VariationData,
        currentImageArray
      )
    );
  };

  return (
    <>
      <MetaData
        title={"Admin create product list"}
        content={"Admin create product list"}
        keywords={"Admin create product list"}
      />
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
                          value={title}
                          style={{ width: "100%" }}
                          name="name"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                        <div>
                          <Draft_wysiwyg
                            box_class={"control-editor-content"}
                            getcontent={setArticle}
                            value={article}
                          />
                        </div>
                        <div className="attribute-tab">
                          <ProductTab
                            setProductType={setProductType}
                            setProduct_regular_price={setProduct_regular_price}
                            setProduct_sale_price={setProduct_sale_price}
                            setSKU={setSKU}
                            setStock={setStock}
                            setSold_Individually={setSold_Individually}
                            setAvailability_Date={setAvailability_Date}
                            setWeight={setWeight}
                            setDimensions={setDimensions}
                            setShipping_class={setShipping_class}
                            setVariations={setVariations}
                            setDefault_value={setDefault_value}
                          />
                        </div>
                        <div>
                          <Draft_wysiwyg
                            box_class={"control-editor-discription"}
                            getcontent={setContent}
                          />
                        </div>
                        {/* <CK_Calssic_Editor style_editor={"content"} /> */}

                        {/* <Seo_Handler
                          seo_data={seo_data}
                          seo_keywords={seo_keywords}
                          set_seo_keywords={set_seo_keywords}
                          seo_input_value={seo_input_value}
                          set_seo_input_value={set_seo_input_value}
                        /> */}
                      </div>
                    </Box>
                  </div>
                  <div className="col-md-4">
                    {/* <Publish_status handlePublishBut={handlePublishBut} />
                    <Sidebar_categories
                      set_sub_categorie_list={set_sub_categorie_list}
                      categorie_list={categorie_list}
                      set_categori_list={set_categori_list}
                      sub_categorie_list={sub_categorie_list}
                      cat_status={"product-cat"}
                    /> */}
                    <Image_card selectedImage={oldImage && oldImage} />
                    {/* <Categore setSelectedCategoryId={setSelectedCategoryId} /> */}
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
