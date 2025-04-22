"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmailRegex, setErrorEmailRegex] = useState("");
  const router = useRouter();
  const validateEmailRegex = (value) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(value)) {
      setErrorEmailRegex("Email is invalid!");
    } else {
      setErrorEmailRegex("");
    }
  };
  const changeHandler = (event) => {
    const value = event.target.value;
    setEmail(value);
    validateEmailRegex(value);
  };

  async function loginHandler() {
    event.preventDefault();
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.ok) {
        toast.success("Login successfully", {
          position: "top-left",
        });
        router.push("/");
      } else {
        toast.error(result.error, {
          position: "top-left",
        });
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-left",
      });
    }
  }

  return (
    <div className="opacity-60 bg-signin___page w-full h-full flex flex-col justify-center items-center ">
      <div className="md:w-[400px]  ">
        <form className="flex flex-col px-4 bg-black/70 py-8 rounded-md">
          <h5 className="text-white text-xl md:text-3xl">Signup</h5>
          <input
            type="text"
            placeholder="Username"
            className="w-[280px] md:w-[350px] mt-5 py-1 md:py-2 px-2 rounded-md md:text-lg outline-none"
            value={email}
            onChange={changeHandler}
          />
          {errorEmailRegex ? (
            <p className="text-red-600 pt-2 text-lg">{errorEmailRegex}</p>
          ) : null}
          <input
            type="password"
            placeholder="Password"
            className="w-[280px] md:w-[350px] mt-5 py-1 md:py-2 px-2 rounded-md md:text-lg outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={loginHandler}
            className="w-[280px] md:w-[350px] mt-3 py-1 md:py-2 px-2  hover:bg-zinc-400/80 transition-colors rounded-md md:text-lg bg-zinc-500 text-white"
          >
            Login
          </button>
          <div className="mt-5 md:text-lg text-zinc-600 flex gap-x-1 text-justify">
            <span>Do you have an acount?</span>
            <Link href="/auth/signup" className="text-blue-800">
              Signup
            </Link>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default SigninPage;
