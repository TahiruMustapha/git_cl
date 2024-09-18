"use client";
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const userName = session?.user?.name?.replace(" ", "");
  return (
    <div className=" relative bg-[url('https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center  p-0 m-0 box-border  h-full  ">
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
      <div className=" relative text-gray-100 h-full">
        <div className=" w-full  flex flex-col h-full items-center justify-center">
          <h2 className=" text-5xl">Unlock Your GitHub Stats</h2>
          <p className=" text-sm mt-4">
            Get insights into your repositories, contributions, followers, and
            more.
          </p>
          <button
            onClick={() => signIn("github",{callbackUrl:"/overview"})}
            className=" border-white border-[1px] font-light px-3 py-1 mt-4 rounded-md ext-sm flex items-center gap-2"
          >
            Login <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
