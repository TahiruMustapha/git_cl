"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = () => {
  const useSearchParam = useSearchParams();
  const pathName = usePathname();
  const params: any = new URLSearchParams(useSearchParam);
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per__page = searchParams.get("per_page") ?? "5";
  return (
    <div className=" w-full  mt-1 mb-1 py-2 rounded-sm ">
      <div className=" flex items-center gap-4 justify-center">
        <span
          onClick={() =>
            router.push(`${pathName}/?page=${Number(page) - 1}&per_page=${per__page}`)
          }
          className=" border-gray-400 text-gray-400 border-[2px] px-2 py-2 rounded-md "
        >
          <FaChevronLeft />
        </span>
        <div className=" flex items-center gap-6 text-gray-400">
          {/* <span className=" cursor-pointer ">1</span>
          <span className=" cursor-pointer ">2</span>
          <span className=" cursor-pointer">3</span>
          <span className=" cursor-pointer ">4</span> */}
          {page}/{Math.ceil(10 / Number(per__page))}
        </div>
        <span
          onClick={() =>
            router.push(`${pathName}/?page=${Number(page) + 1}&per_page=${per__page}`)
          }
          className="  border-gray-400 text-gray-400 border-[2px] px-2 py-2 rounded-md "
        >
          <FaChevronRight />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
