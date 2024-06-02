import React, { useEffect, useState } from "react";
import { Aside } from "../../aside/Aside";
import MetaData from "../../../layout/metaData/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ClearError,
  GetAllProductLabelAction,
  GetProductAttributeAction,
  createNewProduct,
} from "../../../../actions/ProductAction";
import { useAlert } from "react-alert";
import { NEW_PRODUCT_RESET } from "../../../../constants/ProductConstants";
import generateUuid from "../../../../utils/Uuidv4";
import Seo_Handler from "../../../../utils/seo/Seo_Handler";
import { create_seo } from "../../../../actions/SeoAction";
import { Box, TextField } from "@mui/material";
import Draft_wysiwyg from "../../../../utils/Editor/Draft_wysiwyg";
import ProductTab from "../../../../utils/product_options/ProductTab";
import Publish_status from "../../../../utils/publish_status/Publish_status";
import Sidebar_categories from "../../../../utils/sidebar_categorie/Sidebar_categories";
import Tags from "../../../../utils/tags/Tags";
import Featured_Image from "../../../../utils/featured_image/Featured_Image";
import Image_card from "../../../../utils/Image_card/Image_card";

export const CreateProduct = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const alert = useAlert();

  const { loding, error, success } = useSelector((state) => state.newProduct);
  const { images } = useSelector((state) => state.selectedImages);
  const [categorie_list, set_categori_list] = useState([]);
  const [sub_categorie_list, set_sub_categorie_list] = useState([]);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
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

  const handlePublishBut = () => {
    const imageIds = images && images.map((item) => item.url);

    let productData = {
      title: title,
      article: article,
      slug: [seo_input_value.seo_slug],
      content: content,
      product_Type: product_Type,
      SKU: SKU,
      Stock: Stock,
      Sold_Individually: Sold_Individually,
      Availability_Date: Availability_Date,
      Weight: Weight,
      Dimensions: Dimensions,
      Shipping_class: Shipping_class,
      product_uuid: generateUuid(),
      product_regular_price: product_regular_price,
      product_sale_price: product_sale_price,
      Default_value: Default_value,
    };
    let VariationData = Variations ? Variations : {};

    let hasError = false;
    switch (true) {
      case !title.trim():
        hasError = true;
        alert.error("fill Product Title field");
        break;
      case !content.trim():
        hasError = true;
        alert.error("fill Product Short Description field");
        break;
      case !article.trim():
        hasError = true;
        alert.error("fill Product Description field");
        break;
      case !product_Type.trim():
        hasError = true;
        alert.error("fill Product Description field");
        break;

      case (imageIds ?? []).length === 0:
        hasError = true;
        alert.error("Please add images");
        break;
      case (categorie_list ?? []).length === 0:
        hasError = true;
        alert.error("Please select parent category");
        break;
      case (sub_categorie_list ?? []).length === 0:
        hasError = true;
        alert.error("Please select sub category");
        break;

      case product_Type === "Simple product":
        if (
          product_regular_price.trim() === "" ||
          product_sale_price.trim() === ""
        ) {
          hasError = true;
          alert.error(
            "Please fill in Regular Price and Sale Price fields for a Simple product"
          );
        }
        break;
      case product_Type !== "Simple product":
        if (!Variations) {
          hasError = true;
          alert.error("Please add variations");
          return;
        }
        const meta_value = Variations.meta_value;
        meta_value.forEach((item) => {
          const keys = Object.keys(item);
          keys.forEach((subitem, k) => {
            if (!Variations) {
              hasError = true;
              alert.error("Please add variations");
              return;
            }
            const regularPrice = item[subitem][0].regular_price;
            const salePrice = item[subitem][0].sale_price;

            switch (true) {
              case typeof regularPrice !== "number" ||
                isNaN(regularPrice) ||
                typeof salePrice !== "number" ||
                isNaN(salePrice):
                hasError = true;
                alert.error(`Please add regular amd sale price of ${keys}`);
                break;

              default:
                break;
            }
          });
        });
        if (!Default_value.trim()) {
          hasError = true;
          alert.error("fill Default value field");
          return;
        }
        break;

      default:
        alert.error("success fully add");
        break;
    }
    if (!hasError) {
      dispatch(
        createNewProduct(
          productData,
          VariationData,
          imageIds ? imageIds : [],
          sub_categorie_list ? sub_categorie_list : [],
          categorie_list ? categorie_list : []
        )
      );

      dispatch(
        create_seo(
          seo_input_value,
          productData.product_uuid,
          generateUuid(),
          seo_keywords
        )
      );
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(ClearError());
    }
    if (success) {
      alert.success("product created");
      Navigate("/admin/all-products");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
    if (!seo_input_value.seo_title) {
      const url = title.split(" ").join("-");
      set_seo_input_value({
        seo_title: title,
        seo_slug: url,
        seo_decription: title,
      });
    }

    dispatch(GetAllProductLabelAction());
    dispatch(GetProductAttributeAction(""));
  }, [alert, error, dispatch, success, Navigate, slug, title]);

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
                          style={{ width: "100%" }}
                          name="name"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                        <div>
                          <Draft_wysiwyg
                            box_class={"control-editor-content"}
                            getcontent={setArticle}
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
                    <Image_card />
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
export default CreateProduct;
