"use client";
import Image from "next/image";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BsFillEmojiNeutralFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  loadCart,
} from "../../../redux/features/cart/cartSlice";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { shortenText } from "../../../utils/helper";

function CartPage() {
  const items = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCart());
  }, []);
  console.log(items);
  return (
    <div className="pt-10 md:pt-40 container md:text-xl flex justify-end items-start flex-col md:flex-row  gap-x-10">
      <div className="w-full flex flex-col gap-y-2">
        {!items.items.length && (
          <h4 className="flex  gap-x-2  text-2xl text-zinc-500 ">
            Your cart is empty! <BsFillEmojiNeutralFill fontSize={44} />
          </h4>
        )}
        {items.items.map((item) => (
          <div className="flex w-full xl:w-[800px] justify-between gap-x-5 text-sm lg:text-xl border md:h-[240px] border-zinc-400 py-4 px-3 md:px-8">
            <Image
              src={item.image}
              width={400}
              height={400}
              alt="product"
              className="w-[120px] md:w-[200px] h-[160px] md:h-auto"
            />
            <div className="flex flex-col justify-between my-4 md:my-10">
              <div className="flex  gap-x-0.5">
                <FaStar color="oklch(85.2% 0.199 91.936)" />
                <FaStar color="oklch(85.2% 0.199 91.936)" />
                <FaStar color="oklch(85.2% 0.199 91.936)" />
                <FaRegStar color="oklch(85.2% 0.199 91.936)" />
                <FaRegStar color="oklch(85.2% 0.199 91.936)" />
              </div>
              <h1>{shortenText(item.title)}</h1>
              <div className="flex items-center gap-x-2">
                {item.quantity >= 1 ? (
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>
                    <MdAddCircle />
                  </button>
                ) : (
                  <button onClick={() => dispatch(addToCart(item))}>
                    <FaShoppingCart />
                  </button>
                )}
                {item.quantity >= 1 && (
                  <span className="text-xl">{item.quantity}</span>
                )}
                {item.quantity >= 1 ? (
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                    <IoIosRemoveCircle />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border flex flex-col lg:text-xl gap-y-4 border-zinc-400 h-fit w-full mt-10 md:mt-auto md:w-[30%]  py-5 px-3">
        <div>
          <span className=" text-purple-700 tracking-wide">Total price</span> :{" "}
          <span className="text-green-600 ">{items.totalPrice} $</span>
        </div>
        <div>
          <span className=" text-purple-700 tracking-wide">Count</span> :{" "}
          <span className="text-green-600 ">{items.itemCounter}</span>
        </div>
        <div>
          <span className=" text-purple-700 tracking-wide">Status:</span> :{" "}
          <span className="text-green-600 ">Pending...</span>
        </div>
        <button className="bg-green-300 py-1.5 rounded-md hover:bg-green-400 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
