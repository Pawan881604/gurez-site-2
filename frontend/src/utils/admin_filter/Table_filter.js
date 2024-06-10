import React from "react";
import All_Filter_links from "./All_Filter_links";
import Search_filter from "./Search_filter";
import Bulk_Action from "./Bulk_Action";
import Filter_by_Date from "./Filter_by_Date";
import Categories_filter from "./Categories_filter";

const Table_filter = ({ Filter_by_Bulk_Action,item_Length }) => {
  return (
    <>
      <div className="row space-between-center">
        <All_Filter_links />
        <Search_filter />
      </div>
      <div className="row space-between-center">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-5">
              <Bulk_Action Filter_by_Bulk_Action={Filter_by_Bulk_Action} />
            </div>
            <div className="col-md-7">
              <div className="row space-between-center gap-10">
                <Filter_by_Date />
                <Categories_filter />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 text-align-end">
          <p className="xsm-font-size">{item_Length} items</p>
        </div>
      </div>
    </>
  );
};

export default Table_filter;
