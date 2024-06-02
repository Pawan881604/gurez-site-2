import React, { useState } from "react";
import { TimeAgo } from "../../layout/time/TimeAgo";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import Table_filter from "../../../utils/admin_filter/Table_filter";

const Post_tabel = ({ blog }) => {
  const [pageSize, setPageSize] = useState(20);
  const [page, setPage] = useState(20);
  const [selectedRows, setSelectedRows] = useState([]);

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
  };
  const handlePageChange = (newPage) => {
    console.log(newPage);
    setPage(newPage);
  };
  const dummy = [
    {
      Title: "demo",
      Author: "gurezecom",
      Categories: "Pet Products",
      Tags: "	Tags",
      Date: "	001",
    },
    {
      Title: "demo1",
      Author: "gureze",
      Categories: "Pet ",
      Tags: "	Tagsc",
      Date: "	001",
    },
    {
      Title: "demo2",
      Author: "gureom",
      Categories: "Pet",
      Tags: "	Tags",
      Date: "	001",
    },
    {
      Title: "demo3",
      Author: "gurem",
      Categories: "Pets",
      Tags: "	Tags",
      Date: "	001",
    },
    {
      Title: "demo4",
      Author: "gurezecdom",
      Categories: "Pet Psdroducts",
      Tags: "	Tagss",
      Date: "	001",
    },
  ];
  const columns = [
    {
      field: "name",
      headerName: "Title",
      minWidth: 100,
    },
    {
      field: "author",
      headerName: "Author",
      minWidth: 150,
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 150,
    },
    {
      field: "tag",
      headerName: "Tag",
      minWidth: 150,
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 150,
      renderCell: (params) => <TimeAgo time={params.value} />,
    },
    {
      field: "action",
      headerName: "Action",
      type: "number",
      minWidth: 150,
      shortable: false,
      renderCell: (params) => {
        return (
          <>
            <NavLink
            //   to={`/admin/post/update/${params.getValue(params.id, "id")}`}
            >
              <FaUpRightFromSquare />
            </NavLink>
          </>
        );
      },
    },
  ];

  const rows = [];
  dummy &&
    dummy.forEach((item, i) => {
      rows.push({
        id: i,
        name: item.Title,
        author: item.Author,
        category: item.Categories,
        tag: item.Tags,
        date: item.Date,
      });
    });
  const handleSelectionModelChange = (newSelection) => {
    setSelectedRows(newSelection);
  };

  const Filter_by_Bulk_Action = (action) => {
    if (action === "Move to trash" && selectedRows.length > 0) {
      const filterData = dummy.filter((row) => !selectedRows.includes(row.id));
      rows.push(filterData);
    }
  };
  return (
    <>
      <Table_filter Filter_by_Bulk_Action={Filter_by_Bulk_Action} />
      <div>
        <DataGrid
          rows={rows}
          disableColumnMenu
          columns={columns}
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
      </div>
    </>
  );
};

export default Post_tabel;
