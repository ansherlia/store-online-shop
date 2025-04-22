"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  loadCart,
} from "../../../redux/features/cart/cartSlice";
import { FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";
import Image from "next/image";
import { shortenText } from "../../../utils/helper";
import { signOut } from "next-auth/react";

function DashboardPage({ email }) {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCart());
  }, []);
  console.log(cart);
  return (
    <div className="pt-40 container">
      <div className="flex justify-between">
        <div>
          <span className="md:text-xl ">Your Email</span> :{" "}
          <span className="md:text-xl text-purple-700 bg-green-300 px-2">
            {email}
          </span>
        </div>
        <button
          onClick={() => signOut()}
          className="md:text-xl font-semibold tracking-widest bg-red-600 px-4 py-1 rounded-md text-white hover:bg-black hover:text-white transition-colors"
        >
          Exit
        </button>
      </div>
      <h2 className="text-2xl mt-10">Cart:</h2>
      <div className="flex flex-wrap gap-4">
        {cart.items.map((item) => (
          <div
            key={item.id}
            className="flex w-full md:w-[600px] justify-between border md:h-[220px] border-zinc-400 py-4 px-4 md:px-8"
          >
            <div className="flex flex-col justify-between my-5 md:my-10">
              <div className="flex  gap-x-0.5">
                <FaStar color="oklch(85.2% 0.199 91.936)" />
                <FaStar color="oklch(85.2% 0.199 91.936)" />
                <FaStar color="oklch(85.2% 0.199 91.936)" />
                <FaRegStar color="oklch(85.2% 0.199 91.936)" />
                <FaRegStar color="oklch(85.2% 0.199 91.936)" />
              </div>
              <h1 className="text-sm md:text-base">
                {shortenText(item.title)}
              </h1>
              <div className="flex items-center gap-x-2">
                {item.quantity >= 1 ? (
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="md:text-2xl"
                  >
                    <MdAddCircle />
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="md:text-2xl"
                  >
                    <FaShoppingCart />
                  </button>
                )}
                {item.quantity >= 1 && (
                  <span className="md:text-xl">{item.quantity}</span>
                )}
                {item.quantity >= 1 ? (
                  <button
                    className="md:text-2xl"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    <IoIosRemoveCircle />
                  </button>
                ) : null}
              </div>
            </div>
            <Image
              src={item.image}
              width={400}
              height={400}
              alt="product"
              className="w-[130px] h-[160px] md:h-auto md:w-[200px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
