"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";

const UserDetails = ({userData}:any) => {
    const { data: session } = useSession();
//   const [userData, setUserData] = useState({});

  
  
//   useEffect(() => {
//     fetchUser();
//   }, []);
  // console.log(userData);
  return (
    <div className=" flex items-start flex-col">
      <Image
        src={session?.user?.image as string}
        className=" w-[20rem] h-[20rem] rounded-full border-gray-300 border-[1px]"
        alt="user image"
        width={200}
        height={200}     
      />
      <strong className=" mt-4 text-xl">{session?.user?.name}</strong>
      <p className=" text-gray-400">{session?.user?.name?.replace(" ", "")}</p>
      <p className=" flex items-center gap-2 mt-2  ">
        <FiUsers /> <strong>{userData.followers}</strong>{" "}
        <span className=" text-sm text-gray-400">follower.</span>{" "}
        <strong>{userData.following}</strong>{" "}
        <span className=" text-sm text-gray-400">following</span>
      </p>
      <hr className="" />
      <p className=" mt-4">Achievements</p>
    </div>
  );
};
export default UserDetails;
