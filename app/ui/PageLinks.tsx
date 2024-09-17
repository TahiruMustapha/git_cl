"use client";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GoPackage, GoProjectSymlink } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";
import { RiGitRepositoryLine } from "react-icons/ri";
import { repos } from "../lib/helper";
import Link from "next/link";
const PageLinks = () => {
  const router = useRouter();
  const { data: session } = useSession();
  // session?.user?.name?.replace(" ", "")
  const userName = session?.user?.name?.replace(" ", "");
  const pathName = usePathname();
  // const repositories: any =  repos(userName);
  return (
    <div className=" mt-5  ">
      <ul className=" px-8 flex items-center  gap-4">
        <li
          onClick={() => router.push(`/overview`)}
          className={`${clsx(`flex cursor-pointer pb-4 items-center gap-2`, {
            " border-[#FF8343] border-b-[2px]": pathName === "/overview",
          })}`}
        >
          <IoBookOutline />{" "}
          <span className=" text-sm font-normal">Overview</span>
        </li>
        <Link
          href={`/repositories`}
          // onClick={() => router.push(`/repositories`)}
          className={`${clsx(`flex cursor-pointer pb-4 items-center gap-2`, {
            " border-[#FF8343] border-b-[2px]": pathName === "/repositories",
          })} `}
        >
          <RiGitRepositoryLine />{" "}
          <span className={`text-sm font-normal`}>Repositories</span>
          <span className=" text-xs bg-gray-300 px-1  rounded-md">32</span>
        </Link>
        <Link
          href={`/projects/${userName}`}
          onClick={() => router.push(`/projects`)}
          className={`${clsx(`flex cursor-pointer pb-4 items-center gap-2`, {
            " border-[#FF8343] border-b-[2px]": pathName === "/projects",
          })} `}
        >
          <GoProjectSymlink />
          <span className=" text-sm font-normal">Projects</span>
        </Link>
        <li className=" flex cursor-pointer pb-4 items-center gap-2">
          <GoPackage />
          <span className=" text-sm font-normal">Packages</span>
        </li>
        <li className=" flex cursor-pointer pb-4 items-center gap-2">
          <MdOutlineStarOutline />
          <span className=" text-sm font-normal">Stars</span>
        </li>
      </ul>
    </div>
  );
};

export default PageLinks;
