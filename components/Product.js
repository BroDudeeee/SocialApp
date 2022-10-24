import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
const Product = ({ title, price, category, description, image }) => {
  return (
    <div className="flex flex-col m-5 bg-white shadow-md items-center z-30 p-10 gap-3 rounded-md">
      <p className="mb-4 font-semibold text-xl">{category}</p>
      <Image
        src={image}
        alt="product"
        width={200}
        height={200}
        className="z-30"
      />
      <h3 className="text-sm">{title}</h3>

      <p className="text-xs">
        {`${
          !description.length > 100 ? description : description.slice(0, 100)
        }...`}
      </p>
      <p className="font-semibold">${price}</p>
      <button className="font-semibold mt-auto w-full py-1 rounded-md bg-yellow-500 hover:bg-yellow-600 outline-none">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
