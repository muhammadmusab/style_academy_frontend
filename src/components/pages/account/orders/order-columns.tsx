"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/ui/data-table/column-header";
import Link from "next/link";
import { Checkbox } from "@/components/ui/form/checkbox";
import OrderActions from "./order-actions";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Order = {
  id: string;
  orderNumber: number;
  orderStatus: "PENDING" | "COMPLETED" | "CANCELLED";
  paymentStatus: "pending" | "processing" | "success" | "failed";
  date: string;
  total: number;
};

export const columns: ColumnDef<Order>[] = [
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
    accessorKey: "orderNumber",
    header: "Order",
    cell: ({ row }) => {
      const orderNumber = `#${row.getValue("orderNumber")}`;

      return (
        <Link
          href={`/account/orders/${row.getValue("orderNumber")}`}
          className="font-medium text-primary"
        >
          {orderNumber}
        </Link>
      );
    },
  },
  {
    accessorKey: "orderStatus",
    header: "Order Status",
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Date" />;
    },
  },

  {
    accessorKey: "total",
    header: () => <div>Total</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PKR",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <div className="relative"><OrderActions row={row} /></div>;
    },
  },
];
