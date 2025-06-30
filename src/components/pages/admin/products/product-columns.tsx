"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/ui/data-table/column-header";
import Link from "next/link";
import { Checkbox } from "@/components/ui/form/checkbox";
import ProductActions from "./product-actions";
import Image from "next/image";
import ColumnHeaderSorting from "@/components/ui/data-table/column-header-sorting";
import { ColumnFilter } from "@/components/ui/data-table/column-filter";

export type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    // id: "id",
    // enableSorting: false,
    // enableHiding: false,

    id: "id",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Product Name",
    cell: ({ row }) => {
      const title = row.getValue("title") as string;

      return <p className="font-medium">{title}</p>;
    },
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const image = `${row.getValue("image")}`;
      const title = `${row.getValue("title")}`;
      return <Image width={100} height={100} src={image} alt={title} />;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <div>
          <ColumnHeaderSorting column={column} title="Price"  />
          <ColumnFilter column={column}  />
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PKR",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
    meta: {
      filterVariant: "range",
    },
    enableSorting: true,
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return <ColumnHeaderSorting column={column} title="Quantity" />;
    },
    cell: ({ row }) => {
      const quantity = parseInt(row.getValue("quantity"));

      return <div className="font-medium">{quantity}</div>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="relative">
          <ProductActions row={row} />
        </div>
      );
    },
  },
];
