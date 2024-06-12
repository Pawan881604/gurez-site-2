import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import Asidebar from "../../components/layout/aside/Asidebar";
import { Paginations } from "../../utils/Paginations";
import ProductContainor from "./ProductContainor";
import { useParams } from "react-router-dom";
import ErrorPage from "../404Page/ErrorPage";
// Asidebar
const Shop = () => {
  const { category } = useParams();
  const [filter, setFilter] = useState(false);
  const { productsCount, resultPerPage } = useSelector(
    (state) => state.products
  );
  const [error_page, set_error_page] = useState(false);
  const { allcategroes } = useSelector((state) => state.allCategroe);
  const { all_sub_categores } = useSelector((state) => state.sub_Categore);
  const new_cat = [...allcategroes,...all_sub_categores]

  const filter_category =
  new_cat && new_cat.filter((item) => item.slug === category);
  const [currentPage, setCurrentPage] = useState(1);
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (
      filter_category &&
      filter_category.length === 0 &&
      category !== "shop"
    ) {
      set_error_page(true);
    } else {
      set_error_page(false);
    }
    const handleResize = () => {
      setFilter(window.innerWidth < 980 ? true : false);
    };
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [filter_category, category]);

  return (
    <>
      {!error_page ? (
        <>
          <div className="product-cont-row shop-page product-page--">
            <div
              id="prod-cont"
              className={`${
                filter
                  ? "prod-cont cont-area-h full-width"
                  : "prod-cont cont-area-h"
              }`}
            >
              <Asidebar
                setFilter={setFilter}
                filter={filter}
                currentPage={currentPage}
              />
              <ProductContainor setFilter={setFilter} filter={filter} />
            </div>
          </div>
          {resultPerPage < productsCount && (
            <Paginations
              totalItemsCount={productsCount}
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              handlePageChange={setCurrentPageNo}
            />
          )}{" "}
        </>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default Shop;
