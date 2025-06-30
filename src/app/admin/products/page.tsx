import { Fragment } from "react";
import {
  type Product,
  columns,
} from "@/components/pages/admin/products/product-columns";
import { DataTable } from "@/components/ui/data-table/data-table";
import TableToolBar from "@/components/ui/data-table/table-toolbar";
const Orders = () => {
  // Fetch data from your API here.
  const data: Product[] = [
    {
      id: "728ed52f",
      price: 150,
      image: "/img/product/wishlist2.png",
      title: "Product 1",
      quantity: 3,
    },
    {
      id: "489e1d42",
      price: 180,
      image: "/img/product/wishlist1.png",
      title: "Product 2",
      quantity: 5,
    },
  ];

  return (
    <Fragment>
      <TableToolBar
        searchInput={{ show: true, placeholder: "Search Products..." }}
        RouteButton={{ path:'/admin/products/new', show: true, text: "Add Product" }}
      />
      <DataTable columns={columns} data={data} />
    </Fragment>
  );
};

export default Orders;
