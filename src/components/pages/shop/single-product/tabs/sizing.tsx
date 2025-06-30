import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface Props {
  headings: any[];
  rows: any[];
}
const Sizing = ({ headings, rows }: Props) => {
  return (
    <div>
      <h1 className="text-secondaryhover font-bold text-[20px] my-[20px]">Sizing Guide</h1>
      <p className="text-primaryhover my-[10px]">
        You can use our size guides as a general reference to determine your
        size. Each design will have a distinct set of measurements because our
        shapes range from slim-fitting to large. You can always get in touch
        with our support team if you have queries about the measurements of a
        certain model to ensure a great fit. We can assist you if you include
        your breast, waist, high hip, and low hip measurements with your
        comment.
      </p>

      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="">
            {/* <TableHead className="w-[100px]">Invoice</TableHead> */}
            {headings.map((heading,i) => (
              <TableHead className={`py-[15px] px-[15px] font-bold text-primary`} key={heading.id}>
                {heading.value}
              </TableHead>
            ))}
            {/* <TableHead>Method</TableHead> */}
            {/* <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow className="px-[20px]" key={"sizing-row" + i}>
              {headings.map((cell,cellIndex) => (
                <TableCell
                  className={`text-primaryhover py-[10px] px-[15px] font-medium ${
                    i % 2 === 0 ? 'bg-[#ECF2FF]' : "bg-gray-100"
                  }`}
                >
                  {row[cell.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Sizing;
