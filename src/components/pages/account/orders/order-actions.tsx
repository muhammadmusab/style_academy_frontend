import { Row } from "@tanstack/react-table";
import React, { Fragment, useState } from "react";
import { Order } from "./order-columns";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ViewProducts from "./order-view-products";
const OrderActions = ({ row }: { row: Row<Order> }) => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white" align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <hr />
          <DropdownMenuSeparator />
          <DropdownMenuItem>Reorder</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            View Products
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Products Modal */}
      {<ViewProducts open={open} onOpenChange={() => setOpen(false)} />}
    </Fragment>
  );
};

export default OrderActions;
