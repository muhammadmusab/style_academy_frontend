import Link from "next/link";
import React from "react";
import ProductRating from "./product-rating";
interface Props {
  product: {
    rating: number;
    reviews: number;
    price: number;
    oldPrice?: number;
    title: string;
    isFavorite: boolean;
    productLink: string;
    colors?: any[];
    variants?: { type: string; values: { value: string; price: number }[] }[];
    properties?: { name: string; value: string }[];
    description: string;
    productType?: {
      value: string;
      path: string;
    };
    vendor?: {
      value: string;
      path: string;
    } | null;
    tags: {
      value: string;
      path: string;
    }[];
    quantity?: number;
  };
}

const ProductInformation = ({ product }: Props) => {
  return (
    <div>
      {/* Reviews */}
      <div className="flex items-center">
        <ProductRating rating={product.rating} />

        <p className="text-secondaryhover mb-0 ml-[5px] pt-[3.5px] text-[14px]">
          {product.reviews}
          {product.reviews > 1 ? " Reviews" : " Review"}
        </p>
      </div>
      {/* Availability */}
      <div className="flex items-center mt-[5px] mb-[10px] text-[12px]">
        <span className="font-bold text-primary  text-[14px]">
          Availability :
        </span>
        <span className="text-primary ml-1">Hurry, only left</span>
        <span className="text-white flex items-center px-[5px] rounded-[5px] bg-secondaryhover ml-1">
          {product.quantity} items
        </span>
        <span className="text-primary ml-1">in quantity</span>
      </div>
      {/* Title */}
      <h1 className="text-primary font-bold text-[25px]">{product.title}</h1>

      {/* Price */}
      <div className="flex items-baseline mt-[10px]">
        <span className="text-primary text-[16px] mr-[1px] font-bold">$</span>
        <h4 className="text-primary font-bold text-[25px]">
          {product.price.toFixed(2)}
        </h4>
        {product.oldPrice && (
          <span className="text-primary text-[14px] line-through ml-[5px]">
            ${product.oldPrice.toFixed(2)}
          </span>
        )}
      </div>
      <p className="text-primaryhover text-[14px]">Tax included</p>

      {/* Description */}
      <div className="mt-[30px] mb-[20px] xl:max-w-[90%] lg:max-w-[100%]">
        <h2 className="text-primary font-bold text-[16px]">
          Short Description
        </h2>
        <p className="text-[14px] mt-[5px] leading-[1.8] text-primaryhover">
          {product.description}
        </p>
      </div>

      {/* Product Type */}
      {product.productType && (
        <div className="text-[14px] text-primary">
          <h2 className=" font-bold ">
            Product Type:{" "}
            <Link
              className=" font-normal underline"
              href={product.productType.path}
            >
              {product.productType.value}
            </Link>
          </h2>
        </div>
      )}
      {/* Product Properties */}
      {product.properties &&
        product.properties.map((property, i) => (
          <div
            key={property.name + i}
            className="my-[10px] flex items-center text-[14px] text-primary"
          >
            <h2 className=" font-bold">{property.name}:</h2>
            <span className=" pl-[5px]">{property.value}</span>
          </div>
        ))}

      {/* Tags */}
      {product.properties && (
        <div className="my-[10px] flex items-center text-[14px] text-primary">
          <h2 className=" font-bold">Tags:</h2>
          {product.tags.map((tag) => (
            <Link
              key={tag.path}
              href={tag.path}
              className=" font-normal underline pl-[5px]"
            >
              {tag.value}
            </Link>
          ))}
        </div>
      )}

      {/* ask-about-product sizing-guide delivery-return */}
      <div className="flex items-center"></div>
    </div>
  );
};

export default ProductInformation;
