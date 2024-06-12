import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  nav_main_list,
  nav_sub_list,
} from "../../../../actions/CategoreAction";
import updated_product_data from "../../../../utils/Filter_product_handler";

export const NavList = ({ toggleContentRemove }) => {
  const [visible, setVisible] = useState(null);
  const Navigate = useNavigate();
  const handleClick = (i) => {
    setVisible((prevVisible) => (prevVisible === i ? null : i));
  };
  const dispatch = useDispatch();

  const { loading: catLoading, nav_categores } = useSelector(
    (state) => state.nav_parent_category
  );
  const { nav_sub_categores } = useSelector((state) => state.nav_sub_category);

  useEffect(() => {
    dispatch(nav_main_list());
    dispatch(nav_sub_list());
  }, [dispatch]);

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
      {!catLoading ? (
        <div className="nav-col nav-li-list">
          <ul className="nav-list parent-navlist">
            <li>
              <NavLink to={"/shop"} onClick={toggleContentRemove}>
                Shop
              </NavLink>
            </li>
            {nav_categores &&
              nav_categores
                .filter((item) => item.category_status === "Active")
                .map((item, i) => (
                  <li key={i}>
                    <div className="mob-list">
                      <span
                        // onClick={toggleContentRemove}
                        onClick={() =>
                          navigate_cat_handler(item._id, item.slug)
                        }
                      >
                        {/* <NavLink to={`/product-category/${item.slug}`}> */}
                        {item.name}
                        {/* </NavLink> */}
                      </span>
                      <span onClick={() => handleClick(i)}>
                        {visible === i ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </span>
                    </div>
                    <ul
                      className={
                        visible === i
                          ? "child-navlist list-active"
                          : "child-navlist "
                      }
                    >
                      {nav_sub_categores &&
                        nav_sub_categores
                          .filter(
                            (sub) =>
                              item.uuid === sub.Parent_category &&
                              sub.category_status === "Active"
                          )
                          .map((subItem, i) => (
                            <li key={i}>
                              <span
                                // onClick={toggleContentRemove}
                                onClick={() =>
                                  navigate_sub_cat_handler(
                                    item._id,
                                    subItem._id,
                                    subItem.slug
                                  )
                                }
                              >
                                {/* <NavLink
                                  to={`/product-category/${item.slug}/${subItem.slug}`}
                                > */}
                                {subItem.name}
                                {/* </NavLink> */}
                              </span>
                            </li>
                          ))}
                    </ul>
                  </li>
                ))}

            <li onClick={toggleContentRemove}>
              <NavLink to={"/contact-us"}>Contact Us</NavLink>
            </li>
            {/* <li onClick={toggleContentRemove}>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li> */}
          </ul>
        </div>
      ) : (
        <div className="nav-col nav-li-list">
          <div
            style={{ maxWidth: "65%", margin: "0px auto", padding: "17px 0" }}
            className="nav-list parent-navlist"
          >
            {/* <div style={{margin:'5px 0'}} className="animated-background col3" />{" "}
            <div style={{margin:'5px 0'}} className="animated-background col3" />{" "}
            <div style={{margin:'5px 0'}} className="animated-background col3" />{" "}
            <div style={{margin:'5px 0'}} className="animated-background col3" />{" "}
            <div style={{margin:'5px 0'}} className="animated-background col3" />{" "}
            <div style={{margin:'5px 0'}} className="animated-background col3" /> */}
          </div>
        </div>
      )}
    </>
  );
};
