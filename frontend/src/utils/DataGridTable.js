import { DataGrid } from "@material-ui/data-grid";
import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Table_filter from "./admin_filter/Table_filter";

const DataGridTable = ({ rows, columns, loading,item_Length,result_Per_page }) => {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(result_Per_page);
  const [selectedRows, setSelectedRows] = useState([]);

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
  };
  const handlePageChange = (newPage) => {
    console.log(newPage);
    setPage(newPage);
  };

  const handleSelectionModelChange = (newSelection) => {
    setSelectedRows(newSelection);
  };

  const Filter_by_Bulk_Action = (action) => {
    if (action === "Move to trash" && selectedRows.length > 0) {
      // const filterData = dummy.filter((row) => !selectedRows.includes(row.id));
      // rows.push(filterData);
    }
    console.log(rows);
  };
  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            height: "100%",
            minHeight:450
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
      <>
        <Table_filter Filter_by_Bulk_Action={Filter_by_Bulk_Action} item_Length={item_Length} />
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnMenu
          pageSize={pageSize}
          rowsPerPageOptions={[0, 20, 25, 50, 100]}
          onPageSizeChange={handlePageSizeChange}
          onPageChange={handlePageChange}
          initialState={{
            pagination: {
              paginationModel: { page, pageSize },
            },
          }}
          checkboxSelection
          className="product-list-table"
          autoHeight
          onSelectionModelChange={handleSelectionModelChange}
        />
      </>
      )}
    </>
  );
};

export default DataGridTable;
