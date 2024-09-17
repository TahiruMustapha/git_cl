"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { users } from "../lib/helper";
const UserDetails = ({ userData }: any) => {
  const { data: session } = useSession();
  const [userInfo, setUserInfo]: any = useState({});
  const userNames = session?.user?.name?.replace(" ", "");
  // console.log(userNames);
  const userName = "TahiruMustapha";
  // console.log(userName);
  useEffect(() => {
    const getReps = async () => {
      const userData: any = await users(userNames);
      setUserInfo(userData);
    };
    getReps();
  }, [userNames]);
  // console.log(userInfo, "Lenght");
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
        <FiUsers /> <strong>{userInfo.followers}</strong>{" "}
        <span className=" text-sm text-gray-400">followers.</span>{" "}
        <strong>{userInfo.following}</strong>{" "}
        <span className=" text-sm text-gray-400">following</span>
      </p>
      <hr className="" />
      <p className=" mt-4">Achievements</p>
    </div>
  );
};
export default UserDetails;
