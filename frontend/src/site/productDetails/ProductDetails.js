import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { addItemsToCart } from "../../actions/cartAction";
import "./style/style.css";
import ImageLightbox from "./assets/ImageLightbox";
import Details from "./assets/Details";
import AddQuantitBtns from "./assets/AddQuantitBtns";
import AddToCartBtn from "./assets/AddToCartBtn";
import AddReview from "./assets/AddReview";
import SinglePageArticle from "./assets/SinglePageArticle";
import RelatedProducts from "./assets/RelatedProducts";
import {
  CreateBookmarkAction,
  wishListAction,
} from "../../actions/wishListAction";
import generateUuid from "../../utils/Uuidv4";
import { Button } from "@material-ui/core";
import ErrorPage from "../404Page/ErrorPage";
import Reviews from "./assets/Reviews";
import { getProductDetails } from "../../actions/ProductAction";
import Loader from "../../utils/loader/Loader";
import MetaData from "../../utils/metaData/MetaData";
import {
  getAllCategories,
  get_all_sub_categories,
} from "../../actions/CategoreAction";

const ProductDetails = () => {
  const { id, category: product_cat } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const Navigate = useNavigate();
  const [label, setLabel] = useState("");

  // //--------------- useSelector ----------------------------
  const { allcategroes } = useSelector((state) => state.allCategroe);
  const { loding, product, error } = useSelector(
    (state) => state.productDetails
  );
  const [showContent, setShowContent] = useState(true);
  const { review_length } = useSelector((state) => state.review);
  let defaultPrice = product && product.product_sale_price;
  const [variantPriceValue, setVariantPriceValue] = useState([]);
  const [quentity, setQuentity] = useState(1);

  //---add to cart item
  const addToCartHandler = () => {
    dispatch(
      addItemsToCart(
        id,
        quentity,
        variantPriceValue.length === 0 ? defaultPrice : variantPriceValue[0],
        label
      )
    );
    alert.success("Item Added to Cart");
  };
  //-------add to wishlist item

  const wishlist_product_uuid = generateUuid();
  const wishlist_product_id = product && product._id;

  const addToWishtHandler = () => {
    dispatch(
      wishListAction(
        id,
        variantPriceValue.length === 0 ? defaultPrice : variantPriceValue[0],
        label
      )
    );
    dispatch(CreateBookmarkAction(wishlist_product_id, wishlist_product_uuid));
    alert.success("Item Added to Wishlist");
  };

  //--------buy handler
  const buyHandler = () => {
    dispatch(
      addItemsToCart(
        id,
        quentity,
        variantPriceValue.length === 0 ? defaultPrice : variantPriceValue[0],
        label
      )
    );
    Navigate("/cart");
  };
  const filter_category =
    allcategroes && allcategroes.filter((item) => item.slug === product_cat);
  const cat_id =
    filter_category && filter_category[0] && filter_category[0]._id;
  console.log(product);
  useMemo(() => {
    if (cat_id) {
      dispatch(
        getProductDetails("product_uuid", id, "product_category", cat_id)
      );
    }
    dispatch(getAllCategories("uuid"));
    // dispatch( dispatch(getAllCategories());("product_uuid", id,product_cat,''));
  }, [dispatch, id, cat_id]);

  return (
    <>
      <MetaData item_id={product && product.product_uuid} />
      {loding ? (
        <Loader />
      ) : product && product  ? (
        <div className="product-page">
          <section className="section-cont prod-details-page">
            <div className="product-cont">
              <div className="product-single">
                <div className="product-main">
                  <div className="product-main-left">
                    <div className="product-gallery">
                      <div className="main-product-gallery">
                        <ImageLightbox
                          product_images={product && product.product_images}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="product-main-right">
                    <div className="product-details">
                      <Details
                        setVariantPriceValue={setVariantPriceValue}
                        variantPriceValue={variantPriceValue}
                        setLabel={setLabel}
                      />
                      <div style={{ gap: 10 }} className="product-purchase row">
                        <div className="col-md-5">
                          <AddQuantitBtns
                            quentity={quentity}
                            setQuentity={setQuentity}
                          />
                        </div>

                        <div className="col-md-5">
                          <AddToCartBtn addToCartHandler={addToCartHandler} />
                        </div>
                        <div className="col-md-5">
                          <Button
                            className="button-danger"
                            onClick={buyHandler}
                          >
                            Buy Now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <AddReview addToWishtHandler={addToWishtHandler} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="product-review-main">
            <div className="product-des-and-rate">
              <div className="product-des-and-rate-tab">
                <ul>
                  <li
                    className={showContent ? "prod-active-class" : null}
                    onClick={() => setShowContent(true)}
                  >
                    Description
                  </li>
                  <li
                    className={!showContent ? "prod-active-class" : null}
                    onClick={() => setShowContent(false)}
                  >
                    Reviews ({review_length && review_length})
                  </li>
                </ul>
              </div>
              <div className={showContent ? "prod-des-show" : "prod-des-hide"}>
                <SinglePageArticle product={product} />
              </div>
              <div
                className={
                  !showContent
                    ? "prod-des-show -review-area"
                    : "prod-des-hide -review-area"
                }
              >
                <Reviews />
              </div>
              <RelatedProducts product={product} />
            </div>
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default ProductDetails;
