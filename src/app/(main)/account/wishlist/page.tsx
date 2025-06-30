import React from "react";
import Image from "next/image";
import { FiDelete } from "react-icons/fi";
import AddToCartWishListButton from "@/components/pages/checkout/wishlist/add-to-cart-button";
import DeleteWishListButton from "@/components/pages/checkout/wishlist/delete-wishlist-button";
const items = [
  {
    uuid: "83701f42-d11c-45fb-b49e-94117e2ed0ec",
    image: "/product/1.webp",
    price: 500,
    quantity: 2,
    title: "Pima Lawn | Unstiched",
  },
  {
    uuid: "83701f42-d11c-45fb-b49e-94117e2ed0e2",
    image: "/product/2.webp",
    price: 300,
    quantity: 2,
    title: "Pima Lawn | Stiched",
  },
];
const WishList = () => {
    //  passing server action to client component
  const onDelete = async () => {
    "use server"
    console.log("on delete wishlist item");
  };

  return items.map((item: any, i: number) => (
    <div key={item.uuid} className="flex  mt-[30px]">
      {/* image */}
      <div className="basis-[80px] max-w-[80px]">
        <Image src={item.image} width={80} height={80} alt="product-item" />
      </div>

      <div className="flex justify-around flex-col ml-[30px] basis-[70%] max-w-[70%]">
        <h3 className="text-[#31333e] hover:text-primary font-bold text-[12px] font-roboto">
          {item.title}
        </h3>
        <AddToCartWishListButton uuid={item.uuid} />
      </div>

      <div className="flex flex-col justify-around">
        <DeleteWishListButton uuid={item.uuid} onDelete={onDelete} />
        <p className="text-[#31333e]  text-[14px] font-bold mb-0">
          Rs.{item.price.toFixed(2)}
        </p>
      </div>
    </div>
  ));
};

export default WishList;
