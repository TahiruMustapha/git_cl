"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
const UserDetails = ({ userData }: any) => {
  const { data: session } = useSession();
  return (
    <div className=" flex items-start flex-col">
      <Image
        src={session?.user?.image as string}
        alt="user image"
        className="w-[20rem] h-[20rem] rounded-full  border-gray-300 border-[1px]"
        width={300}
        height={300}
        
      />
      <strong className=" mt-4 text-xl">{session?.user?.name}</strong>
      <p className=" text-gray-400">{session?.user?.name?.replace(" ", "")}</p>
      <p className=" flex items-center gap-2 mt-2  ">
        <FiUsers /> <strong>{userData.followers}</strong>{" "}
        <span className=" text-sm text-gray-400">followers.</span>{" "}
        <strong>{userData.following}</strong>{" "}
        <span className=" text-sm text-gray-400">following</span>
      </p>
      <hr className="" />
      <p className=" mt-4">Achievements</p>
    </div>
  );
};
export default UserDetails;
