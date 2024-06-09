import React from "react";
import Currency from "../../../utils/currency/Currency";
// import Currency from "../../layout/currency/Currency";
// Currency
export const SubTotal = ({ item, quantity }) => {
  return (
    <>
      <div className="sub-total">
        <Currency price={item * quantity} />
      </div>
    </>
  );
};
