import { getProduct } from "../actions/ProductAction";

function updated_product_data(
  dispatch,
  currentPage,
  price,
  cat_id,
  sub_cat_id
) {
  dispatch(
    getProduct(currentPage, price, cat_id && cat_id, sub_cat_id && sub_cat_id)
  );
}
export default updated_product_data;
