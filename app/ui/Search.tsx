"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { useDebouncedCallback } from "use-debounce";
const Search = () => {
  const useSearchParam = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
 
  const handleSearch = useDebouncedCallback( (term: string) => {
    const params: any = new URLSearchParams(useSearchParam);
    // params.set("query", 1);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  },300);

   // Handle pagination
//    const handlePageChange = (newPage: number) => {
//     const params = new URLSearchParams();
//     if (searchTerm) params.set('search', searchTerm);
//     params.set('page', String(newPage));

//     router.push(`?${params.toString()}`);
//   };
  return (
    <div className=" mb-4 flex items-center gap-4 ">
      <input
        className=" border-gray-400 outline-none w-[35rem] rounded-md px-2 py-1 border-[1px]"
        type="text"
        placeholder=" Find a repository..."
        onChange={(e) => handleSearch(e.target.value)}

        //Keeping the url async with the input box
        defaultValue={useSearchParam.get("query")?.toString()}
      />
      <p className=" border-gray-400 rounded-md px-2 py-1 border-[1px] font-semibold flex items-center gap-2">
        Type <FaCaretDown />
      </p>
      <p className=" border-gray-400 rounded-md px-2 py-1 border-[1px] font-semibold flex items-center gap-2">
        Language <FaCaretDown />
      </p>
      <p className=" border-gray-400 rounded-md px-2 py-1 border-[1px] font-semibold flex items-center gap-2">
        Sort <FaCaretDown />
      </p>
      <p className=" bg-[#1A5D1A] px-3 py-1  text-white rounded-md font-semibold flex items-center gap-1">
        <RiGitRepositoryLine /> New
      </p>
    </div>
  );
};

export default Search;
