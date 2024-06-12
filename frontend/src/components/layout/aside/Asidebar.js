import React, { useEffect, useState, memo } from "react";
import FilterPrice from "./FilterPrice";
import Categories from "./Categories";
import "./style.css";
import { Button } from "@material-ui/core";
import { IoIosArrowRoundBack } from "react-icons/io";
import { getProduct } from "../../../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import updated_product_data from "../../../utils/Filter_product_handler";

const Asidebar = ({ setFilter, filter, currentPage }) => {
  const [price, setPrice] = useState([0, 1000]);
  const dispatch = useDispatch();
  const { category } = useParams();

  const [sub_cat_id, set_sub_cat_id] = useState("");
  const [cat_id, set_cat_id] = useState("");
  const { allcategroes } = useSelector((state) => state.allCategroe);
  const { all_sub_categores } = useSelector((state) => state.sub_Categore);
  const new_cat = [...allcategroes,...all_sub_categores]

  const filter_category =
  new_cat && new_cat.filter((item) => item.slug === category);
console.log(filter_category)
  const clearFilterHeandler = (e) => {
    // setCurrentPage(1);
    // setPrice([0, 1000]);
    // setCategories("");
    // setRatings(0);
    // setClearFilter(true);
    // setsideBarActive(false);
  };

  //current price
  const priceHeandler = (e, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (category === "shop") {
      updated_product_data(dispatch, currentPage, price, "", "");
    } else if (filter_category) {
      // updated_product_data(dispatch, currentPage, price, cat_id, sub_cat_id);
    }
  }, [
    dispatch,
    currentPage,
    price,
    cat_id,
    sub_cat_id,
    category,
    filter_category,
  ]);

  return (
    <>
      <aside>
        <div className="sidebar-cont">
          <div className="side-bar">
            {/* {catLoading ? (
                    <AsideAnimation />
                  ) : ( */}
            <div className="aside-filter aside-hr">
              <div className="inner-aside-filter">
                <Button onClick={() => setFilter(!filter)} className="filter">
                  Filter
                  <IoIosArrowRoundBack className="filter-arrow" />
                </Button>

                <Button
                  style={{
                    marginTop: 5,
                    fontWeight: 600,
                    fontSize: "13px",
                    width: "130px",
                  }}
                  onClick={() => clearFilterHeandler()}
                >
                  Clean All
                </Button>
              </div>
            </div>
            <div className="mob--cont">
              <div className="aside-price-categories aside-hr">
                <Categories
                  set_sub_cat_id={set_sub_cat_id}
                  set_cat_id={set_cat_id}
                />
              </div>
              <div className="aside-price-filter aside-hr">
                <FilterPrice price={price} inputevent={priceHeandler} />
              </div>
              {/* <RatingsFilter ratingsHeandle={ratingsHeandle} ratings={ratings} /> */}
              {/* <ClearFilter
          clearFilterHeandler={clearFilterHeandler}
          clearFilter={clearFilter}
        /> */}
            </div>
            {/* )} */}
          </div>
        </div>
      </aside>
    </>
  );
};

export default memo(Asidebar);
