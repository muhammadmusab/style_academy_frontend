import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Addresses from "@/components/pages/account/orders/addresses";
const Order = ({ params }:any) => {

  const order = {
    headings: [
      {
        id: "290f2752-f9ae-4182-bf45-d6ce46ade2e7",
        value: "product",
      },
      {
        id: "290f2752-f9ae-4182-bf45-d6ce46ade2e8",
        value: "sku",
      },
      {
        id: "290f2753-f9ae-4182-bf45-d6ce46ade2e8",
        value: "price",
      },
      {
        id: "290f2753-f9be-4182-bf45-d6ce46ade2e8",
        value: "quantity",
      },
      {
        id: "390f2753-f9be-4182-bf45-d6ce46ade2e9",
        value: "total",
      },
    ],
    products: [
      {
        id: "e36d688f-9bca-46a9-b078-cf293436ca59",
        product: "Demi-season denim trousers - Gray / XS",
        sku: "M75003GY1",
        price: "18,300",
        quantity: 1,
        total: "18,300",
      },
      {
        id: "e36d688f-9bca-46a9-b078-cf293436ca58",
        product: "Demi-season shirts - Blue / XS",
        sku: "N75203HZ2",
        price: "5,300",
        quantity: 2,
        total: "10,600",
      },
    ],
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    subtotal: "28,900",
    discount: "900",
    shipping: "200",
    total: "28,200",
  };
  return (
    <div>
      <Addresses />
      <h3 className="text-center font-bold">Order #{params.id}</h3>
      <p>Order place on {order.date}</p>
      <div className="">
        <Table className="border border-[#ccc] mt-[15px]">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow className="">
              {/* <TableHead className="w-[100px]">Invoice</TableHead> */}
              {order.headings.map((heading, i) => (
                <TableHead
                  className={`py-[15px] px-[15px] font-bold text-primary ${
                    i === order.headings.length - 1 ? "text-right" : ""
                  }`}
                  key={heading.id}
                >
                  {heading.value.toUpperCase()}
                </TableHead>
              ))}
              {/* <TableHead>Method</TableHead> */}
              {/* <TableHead className="text-right">Amount</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {order.products.map((row, i) => (
              <TableRow className="px-[20px]" key={"sizing-row" + i}>
                {order.headings.map((cell, cellIndex) => (
                  <TableCell
                    key={cell.id}
                    className={`text-primaryhover py-[10px] px-[15px] font-medium ${
                      i % 2 === 0 ? "bg-[#ECF2FF]" : "bg-gray-100"
                    } ${
                      cellIndex === order.headings.length - 1
                        ? "!text-right"
                        : ""
                    }`}
                  >
                    {row.product === row[cell.value] ? (
                      <Link
                        className="hover:text-secondary transition-all duration-500"
                        href={`/shop/product/${row.id}`}
                      >
                        {row[cell.value]}
                      </Link>
                    ) : (
                      row[cell.value]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {/*  */}

            <TableRow>
              <TableCell className=" px-[20px]">Subtotal</TableCell>
              <TableCell className=" px-[20px]"></TableCell>
              <TableCell className=" px-[20px]"></TableCell>
              <TableCell className=" px-[20px]"></TableCell>

              <TableCell className="text-right">Rs {order.subtotal}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className=" px-[20px]">Discount</TableCell>
              <TableCell className=" px-[20px]"></TableCell>
              <TableCell className=" px-[20px]"></TableCell>
              <TableCell className=" px-[20px]"></TableCell>

              <TableCell className="text-right">
                - Rs {order.discount}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className=" px-[20px]">Shipping</TableCell>
              <TableCell className=" px-[20px]"></TableCell>
              <TableCell className=" px-[20px]"></TableCell>
              <TableCell className=" px-[20px]"></TableCell>

              <TableCell className="text-right">Rs {order.shipping}</TableCell>
            </TableRow>

            <TableRow className="py-[40px]">
              <TableCell className="font-bold px-[20px]">Total</TableCell>
              <TableCell className="font-bold px-[20px]"></TableCell>
              <TableCell className="font-bold px-[20px]"></TableCell>
              <TableCell className="font-bold px-[20px]"></TableCell>

              <TableCell className="text-right">Rs {order.total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Order;
