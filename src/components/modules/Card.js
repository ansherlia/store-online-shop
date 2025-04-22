"use client";
import Image from "next/image";
import { TbListDetails } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { shortenText } from "../../../utils/helper";
import { MdAddCircle } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  loadCart,
  removeFromCart,
} from "../../../redux/features/cart/cartSlice";
import { useEffect } from "react";
import { productInCart } from "@/helper/helper";

function Card({ data }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(loadCart());
  }, []);
  // const quantity = productInCart(cartItems, data) ? productInCart.quantity : 0;
  const cartExistance = productInCart(cartItems, data);
  const quantity = cartExistance ? cartExistance.quantity : 0;
  // console.log(cartItems.items);
  return (
    <div className="mx-auto px-2 min-w-[150px] md:px-6 py-4 border bg-white">
      <Image
        src={data.image}
        width={500}
        height={500}
        alt={data.title}
        className="w-[150px] h-[150px] md:w-[240px] md:h-[300px]"
      />
      <div className="my-4 text-zinc-500">
        <h4 className="text-sm line-clamp-1 md:text-lg">
          {shortenText(data.title)}
        </h4>
        <span>{data.price} $</span>
      </div>
      <div className="flex justify-between items-center text-pink-500">
        <Link href={`/products/${data.id}`} className="md:text-xl">
          <TbListDetails />
        </Link>
        <div className="flex items-center gap-x-2">
          {quantity >= 1 ? (
            <button
              onClick={() => dispatch(increaseQuantity(data.id))}
              className="md:text-xl"
            >
              <MdAddCircle />
            </button>
          ) : (
            <button
              onClick={() => dispatch(addToCart(data))}
              className="md:text-xl"
            >
              <FaShoppingCart />
            </button>
          )}
          {quantity >= 1 && <span>{quantity}</span>}
          {quantity >= 1 ? (
            <button
              className="md:text-xl"
              onClick={() => dispatch(decreaseQuantity(data.id))}
            >
              <IoIosRemoveCircle />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
