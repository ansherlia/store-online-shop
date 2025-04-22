import { useSession } from "next-auth/react";
import Link from "next/link";
import { IoLogInOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { BsMinecart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { TbLogin2 } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";

function Header() {
  const [openHumberger, setOpenHamburger] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  console.log(openHumberger);
  const cart = useSelector((store) => store.cart);
  const { status } = useSession();
  return (
    <>
      <header className="w-[90%] h-[70px] hidden  text-zinc-600  md:flex justify-between bg-red-300/10 px-5  mx-auto items-center z-40 fixed right-0 left-0 top-0">
        <ul className="flex items-center gap-x-10">
          <li className="hover-link">
            <Link href="/">Home Page</Link>
          </li>
          <li className="hover-link">
            <Link href="/products">Products</Link>
          </li>
          <li className="hover-link">
            <Link href="/about-us">About us</Link>
          </li>
        </ul>
        <div className="flex gap-x-2">
          {status === "authenticated" ? (
            <Link href={`/dashboard`}>
              {" "}
              <FaUserAlt fontSize={23} />
            </Link>
          ) : (
            <Link
              href="/auth/signup"
              className="flex gap-x-1 items-center  text-zinc-400 px-5 py-1.5 rounded-md transition-colors hover:text-orange-300 "
            >
              <span className="text-xl">Register</span>
              <IoLogInOutline fontSize={22} className="mb-1" />
            </Link>
          )}
          <div>
            <Link href="/cart" className="relative">
              <BsMinecart fontSize={25} />
              {cart.itemCounter !== 0 ? (
                <span className="inline-flex bg-red-600 px-2 rounded-md absolute top-4 left-4 text-white">
                  {cart.itemCounter}
                </span>
              ) : null}
            </Link>
          </div>
        </div>
      </header>
      <div className="Header-mobile flex md:hidden justify-between px-5 py-4 bg-red-200/40">
        <div className="hamburger-menu">
          <button onClick={() => setOpenHamburger(true)}>
            <GiHamburgerMenu fontSize={25} color="oklch(55.4% 0.046 257.417)" />
          </button>

          {/* همیشه رندر می‌شه */}
          <div
            className={`fixed top-0 left-0 z-30 h-screen w-[220px] bg-white overflow-y-auto transition-transform duration-700 ${
              openHumberger ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center px-4 py-5">
              <span className="text-orange-300 bg-black px-2 py-1 rounded-md">
                ReOshOp
              </span>
              <button onClick={() => setOpenHamburger(false)}>
                <RxCross1 fontSize={23} />
              </button>
            </div>
            <ul className="space-y-10 pt-10 px-5 text-zinc-500">
              {status === "authenticated" ? (
                <li className="hover:bg-orange-200 w-fit px-4 pt-1 transition-colors rounded-sm">
                  <Link href={`/dashboard`} className="flex  gap-x-1">
                    Dashboard <FaUserAlt />
                  </Link>
                </li>
              ) : (
                <li className="hover:bg-orange-200 w-fit px-4 pt-1 transition-colors rounded-sm">
                  <Link href={`/auth/signup`} className="flex  gap-x-1">
                    Login <TbLogin2 />
                  </Link>
                </li>
              )}
              <li className="hover:bg-orange-200 w-fit px-4 pt-1 transition-colors rounded-sm">
                <Link href={`/`} className="flex  gap-x-1">
                  Home Page <IoMdHome />
                </Link>
              </li>
              <li className="hover:bg-orange-200 w-fit px-4 pt-1 transition-colors rounded-sm">
                <Link href={`/about-us`} className="flex  gap-x-1">
                  About us <MdGroup />
                </Link>
              </li>
              <li className="hover:bg-orange-200 w-fit px-4 pt-1 transition-colors rounded-sm">
                <Link href={`/products`} className="flex  gap-x-1">
                  Products
                  <AiOutlineProduct />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="cart">
          <button onClick={() => setOpenCart(true)} className="relative">
            <BsMinecart fontSize={25} color="oklch(55.4% 0.046 257.417)" />
            <span>
              {cart.itemCounter !== 0 && (
                <span className="bg-red-600 px-1.5 py-0.5 absolute text-white rounded-md top-3">
                  {cart.itemCounter}
                </span>
              )}
            </span>
          </button>
          {/* همیشه رندر می‌شه */}
          <div
            className={`fixed top-0 right-0 flex flex-col pb-10 justify-between z-30 h-screen w-[250px] bg-white overflow-y-auto transition-transform duration-700 ${
              openCart ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div>
              <div className="flex justify-between items-center px-4 py-5">
                <button onClick={() => setOpenCart(false)}>
                  <RxCross1 fontSize={23} />
                </button>
                <span className="text-orange-300 bg-black px-2 py-1 rounded-md">
                  ReOshOp
                </span>
              </div>
              <div className="flex flex-col gap-y-2 pt-5 px-4 overflow-y-auto">
                {cart.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-x-2 border border-zinc-400 p-2 text-zinc-500"
                  >
                    <Image
                      src={item.image}
                      width={400}
                      height={400}
                      alt={item.title}
                      className="w-[80px] h-[80px]"
                    />
                    <div className="flex justify-between flex-col py-2 ">
                      <h5 className="text-sm line-clamp-1">{item.title}</h5>
                      <span>{item.price} $</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button>
              <Link
                href="/cart"
                className="flex justify-center text-center items-start mx-auto gap-x-2 px-4 bg-green-500 w-[150px] py-1 text-white rounded-md pt-1 "
              >
                Cart <FaArrowRightLong />
              </Link>
            </button>
          </div>
        </div>
      </div>
      {openHumberger || openCart ? (
        <div className="visible  bg-black/40 w-full h-full fixed inset-0 z-10 md:hidden"></div>
      ) : null}
    </>
  );
}

export default Header;
