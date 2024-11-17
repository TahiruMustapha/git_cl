"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useContext } from "react";

import HeaderSearch from "./HeaderSearch";
import PageLinks from "./PageLinks";
import { useAuth } from "@/context/AuthContext";
import { CiMenuBurger } from "react-icons/ci";



const Header = () => {
  const { loggedIn } = useAuth();
  const { data: session } = useSession();
  
  return (
    <>
      {loggedIn ? (
        <nav className="bg-gray-100">
          <div className="py-4 px-6 text-black w-full flex items-center justify-between">
            <div className="flex items-center text-gray-500">
              <span className="cursor-pointer border-gray-300 mr-5 border-[1px] px-2 py-2 rounded-md">
                <CiMenuBurger/>
              </span>
              <p className="cursor-pointer">
                nab{" "}
                <span className="ml-[-6px] font-semibold text-3xl">Cl.</span>
              </p>
              <span className="hover:bg-gray-100 px-2 py-[0.28rem] rounded-md cursor-pointer text-sm text-black font-medium">
                {session?.user?.name}
              </span>
            </div>
            <div className="text-gray-500 text-sm">
              <div className="flex items-center gap-3">
                <HeaderSearch />
                <Image
                  src={session?.user?.image || "/default-image.png"}
                  alt="User Image"
                  className="w-8 h-8 rounded-full"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>
          <PageLinks />
        </nav>
      ) : (
        <nav className="bg-black">
          <div className="relative py-4 px-6 w-full flex items-center justify-around">
            <p className="cursor-pointer text-gray-100">
              nab <span className="ml-[-6px] font-semibold text-3xl">Cl.</span>
            </p>
            <div className="text-gray-100 text-sm">Hi, Developer</div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
