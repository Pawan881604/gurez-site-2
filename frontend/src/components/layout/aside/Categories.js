import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {
  getAllCategories,
  get_all_sub_categories,
} from "../../../actions/CategoreAction";
import updated_product_data from "../../../utils/Filter_product_handler";

const Categories = ({ set_sub_cat_id, set_cat_id }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const {
    loading: catLoading,
    allcategroes,
    error: caterror,
  } = useSelector((state) => state.allCategroe);

  const { all_sub_categores } = useSelector((state) => state.sub_Categore);
  const [is_visiable_cat_list, set_is_visiable_cat_list] = useState(true);
  const [is_visiable_sub_cat_list, set_is_visiable__sub_cat_list] = useState(
    []
  );
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(get_all_sub_categories());
  }, [dispatch]);

  const toggleSubCategories = (index) => {
    const newVisibility = [...is_visiable_sub_cat_list];
    newVisibility[index] = !newVisibility[index];
    set_is_visiable__sub_cat_list(newVisibility);
  };
  const currentPage = 1;
  const price = [0, 1000];
  const navigate_sub_cat_handler = (cat_id, sub_cat_id, slug) => {
    updated_product_data(dispatch, currentPage, price, cat_id, sub_cat_id);
    Navigate(`/${slug}`);
  };
  const navigate_cat_handler = (cat_id, slug) => {
    updated_product_data(dispatch, currentPage, price, cat_id, "");
    Navigate(`/${slug}`);
  };

  return (
    <>
      <div className="category-containor">
        <div className="cate-header">
          <h3 className="col-md-12 row space-between-center">
            <span className="col-md-10">Product Categories</span>
            <span className="col-md-3">
              {is_visiable_cat_list ? (
                <FaMinus onClick={() => set_is_visiable_cat_list(false)} />
              ) : (
                <FaPlus onClick={() => set_is_visiable_cat_list(true)} />
              )}
            </span>
          </h3>
        </div>
        <div className="category-list">
          <div
            style={is_visiable_cat_list ? { height: "auto" } : { height: 0 }}
          >
            <ul className="parent-cat-list">
              {allcategroes &&
                allcategroes.map((item, i) => (
                  <li key={i}>
                    <div
                      onClick={() => navigate_cat_handler(item._id, item.slug)}
                      className="row col-md-12"
                    >
                      {/* <NavLink
                        to={`/${item.slug}`}
                        className="parent-cate-list col-md-10"
                      > */}
                      {item.name}
                      {/* </NavLink> */}
                      <span
                        style={{ cursor: "pointer" }}
                        className="col-md-3"
                        onClick={() => toggleSubCategories(i)}
                      >
                        {is_visiable_sub_cat_list[i] ? (
                          <IoIosArrowForward />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </span>
                    </div>
                    <ul
                      style={
                        is_visiable_sub_cat_list[i]
                          ? { height: "auto" }
                          : { height: 0 }
                      }
                      className="category-list"
                    >
                      {all_sub_categores &&
                        all_sub_categores
                          .filter(
                            (sub) =>
                              item.uuid === sub.Parent_category &&
                              sub.category_status === "Active"
                          )
                          .map((subitem, i) => (
                            <li
                              key={i}
                              onClick={() =>
                                navigate_sub_cat_handler(
                                  item._id,
                                  subitem._id,
                                  subitem.slug
                                )
                              }
                            >
                              {/* <NavLink
                                to={`/${item.slug}/${subitem.slug}`}
                              > */}
                              {subitem.name}
                              {/* </NavLink> */}
                            </li>
                          ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
