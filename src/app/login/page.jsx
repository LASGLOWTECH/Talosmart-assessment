"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";


export default function Login() {

  const router = useRouter()

  const [user, setUser] = useState(
    {

      email: "",
      password: "",

    }
  )


  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [loading, setLoading] = useState(false)


  const onLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("signup success", response.data);
      toast.success("Login success")
      router.push("/profile")
    }

    catch (error) {
      console.log("Login failed", error.message);
      toast.error(error.message)

    }
    finally { setLoading(false) };
  }








  useEffect(() => {

    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)

    }
    else { setButtonDisabled(true) }
  }, [user])


  return (

    <div className='py-8 px-6  overlay relative w-full h-full bg-darkBlue backdrop-brightness-100 flex justify-center items-center flex-col'>
      < h3 className=" font-medium  text-4xl  ps-5  py-6 text-darkGreen ">{loading ? "Processing" : "Login"}</h3>


      <form className=" flex flex-col justify-center md:w-auto w-full py-5 px-6 md:px-20  bg-opacity-25 rounded-2xl bg-darkBlue shadow-lg " >

        {/* Name form */}




        <div className="email-send flex justify-beween flex-col ">

          <label htmlFor="email" className="pt-3 pb-2   text-white text-lg font-medium " >Email<sup className="text-red-500">*</sup></label>


          <input type="text"
            value={user.email}
            id="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="ps-5  border focus:outline-none shadow-md border-double py-2 mt-2 w-full text-base  "
            placeholder="Email" />


        </div>


        <div className="email-send flex justify-beween flex-col ">

          <label htmlFor="password" className="pt-3 pb-2   text-white text-lg font-medium " for="text">Email<sup className="text-red-500">*</sup></label>


          <input type="password"
            value={user.password}
            id="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="ps-5  border focus:outline-none shadow-md border-double py-2 mt-2 w-full text-base  "
            placeholder="Password" />


        </div>


        <div className="submit flex  flex-col justify-start ">
          <input
            type="submit"
            onClick={onLogin}
            className="text-lg text-white flex place-self-start  focus:outline-none rounded-md px-16 py-2  my-3 bg-darkGreen"
            value="Sign in" />

        </div>

        <span className="flex flex-row pt-6 ">
          <p className=" text-lg   ps-5  text-white">New? </p>
          <Link href="/register" className="ps-5 font-medium text-darkGreen">Register</Link>
        </span>

      </form>

    </div>

  )
}


