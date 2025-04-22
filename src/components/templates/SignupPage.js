"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
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
  console.log(confirmPassword);
  const validatePassHandler = (e) => {
    setConfirmPassword(e.target.value);
    const regex = RegExp(`^${password}`);
    if (!regex.test(e.target.value)) {
      setErrorPassword("Password is not mached!");
    } else {
      setErrorPassword("");
    }
  };
  const signupHandler = async () => {
    event.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.message) {
        toast.success(data.message, {
          position: "top-left",
        });
        router.push("/auth/signin");
      } else if (data.error) {
        toast.error(data.error, {
          position: "top-left",
        });
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="opacity-60 bg-signin___page w-full h-full flex flex-col justify-center items-center ">
      <div className="w-[] md:w-[400px]  ">
        <form className="flex flex-col px-4 bg-black/70 py-8 rounded-md">
          <h5 className="text-white text-3xl">Signup</h5>
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-[280px] md:w-[350px] mt-5 py-1 md:py-2 px-2 rounded-md md:text-lg outline-none"
            value={confirmPassword}
            onChange={validatePassHandler}
          />
          {errorPassword ? (
            <p className="text-red-500 pt-2 text-lg">{errorPassword}</p>
          ) : null}
          <button
            onClick={signupHandler}
            className="w-[280px] md:w-[350px] mt-3 py-1 md:py-2 px-2  hover:bg-zinc-400/80 transition-colors rounded-md md:text-lg bg-zinc-500 text-white"
          >
            Signup
          </button>
          <div className="mt-5 md:text-lg text-zinc-600 flex gap-x-1 text-justify">
            <span>Do you have an acount?</span>
            <Link href="/auth/signin" className="text-blue-800">
              Login
            </Link>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default SignupPage;
