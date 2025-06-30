import DeleteItemButton from "@/components/pages/checkout/cart/delete-item-button";
import QuantityButton from "@/components/pages/checkout/cart/quantity-button";
import { cartItems } from "@/constants/products";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="mb-[50px] flex flex-col justify-between w-[700px] mx-auto sm:w-full">
      <div className="overflow-y-auto h-[400px] pr-[10px]">
        {/* items */}
        {cartItems.map((item) => (
          <div key={item.uuid} className="flex mb-[30px]">
            {/* image */}
            <div className="basis-[80px] max-w-[80px]">
              <Image
                src={item.image}
                width={80}
                height={80}
                alt="product-item"
              />
            </div>

            <div className="flex justify-around flex-col ml-[30px] basis-[70%] max-w-[70%]">
              <h3 className="text-[#31333e] hover:text-primary font-bold text-[12px] font-roboto">
                {item.title}
              </h3>
              <div className="flex items-center mt-5">
                <QuantityButton
                  type={"decrease"}
                  quantity={item.quantity}
                  uuid={item.uuid}
                />
                <div className="w-[30px] h-[30px] mx-5 text-[14px] flex items-center justify-center text-center rounded-full border border-gray-400">
                  {item.quantity}
                </div>

                <QuantityButton
                  type={"increase"}
                  quantity={item.quantity}
                  uuid={item.uuid}
                />
              </div>
            </div>

            <div className="flex flex-col justify-around">
              <DeleteItemButton uuid={item.uuid} />
              <p className="text-[#31333e]  text-[14px] font-bold mb-0">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
