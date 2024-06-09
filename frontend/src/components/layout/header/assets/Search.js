import React, { useEffect, useState } from "react";
import { FaSistrix } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { NavLink } from "react-router-dom";
import "./search.css";
import { server_url } from "../../../../utils/Url";
import Currency from "../../../../utils/currency/Currency";
import {ClearError, searchProduct } from "../../../../actions/ProductAction";
import { StarComponent } from "../../../../site/productDetails/assets/StarComponent";
import Loader from "../../../../utils/loader/Loader";

export const Search = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, products } = useSelector((state) => state.search);
  const [searchInput, setSearchInput] = useState({ search: "" });
  const [InputLength, setInputLength] = useState(false);

  const searchHandle = (e) => {
    if (e.target.value.length >= 1) {
      setInputLength(true);
    } else {
      setInputLength(false);
    }
    const { name, value } = e.target;
    setSearchInput({ ...searchInput, [name]: value });
  };

  const handerSearchDropdown = (e) => {
    e.preventDefault();
    setInputLength(false);
    setSearchInput("");
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(ClearError());
    }
    if (InputLength) {
      const { search } = searchInput;
      dispatch(searchProduct(search));
    }
  }, [alert, error, dispatch, InputLength, searchInput]);

  return (
    <div className="search-area">
      <div className="search-row">
        <input
          type="search"
          placeholder="Search product"
          name="search"
          value={searchInput.search}
          onChange={searchHandle}
        />
        <div className="search-icon-div">
          <FaSistrix />
        </div>
      </div>
      <div className="search-product">
        <ul className={InputLength ? "listcont" : ""}>
          {loading ? (
            <Loader />
          ) : (
            <>
              {InputLength ? (
                products && products.length > 0 ? (
                  products.map((item, i) => (
                    <li onClick={handerSearchDropdown} key={i}>
                      <NavLink to={`/shop/${item.category}/${item._id}`}>
                        <img
                          src={`${server_url()}/${
                            item.product_images && item.product_images[0].path
                          }`}
                          alt={item.product_name}
                        />
                        <div style={{ display: "block", width: "100%" }}>
                          <div>
                            <p>{String(item.product_name).substr(0, 20)}</p>
                          </div>

                          <div className="row" style={{ gap: 10 }}>
                            <p>
                              <ins>
                                <Currency price={item.product_sale_price} />
                              </ins>
                            </p>
                            <p>
                              <del>
                                <Currency price={item.product_regular_price} />
                              </del>
                            </p>
                            <StarComponent review={item.ratings} />
                          </div>
                        </div>
                      </NavLink>
                    </li>
                  ))
                ) : (
                  <li className="listcont-not-found">Product not found</li>
                )
              ) : null}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
