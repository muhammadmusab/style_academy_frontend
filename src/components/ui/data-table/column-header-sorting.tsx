import React from "react";

import { ArrowUpDown } from "lucide-react";
const ColumnHeaderSorting = ({ column,title }: { column: any;title:string }) => {
  return (
    <button
      className="flex items-center gap-1"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      <span>{title}</span>
      <ArrowUpDown className="h-4 w-4" />
    </button>
  );
};

export default ColumnHeaderSorting;
