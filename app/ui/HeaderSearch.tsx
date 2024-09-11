import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { GoIssueOpened } from "react-icons/go";
import { IoGitPullRequestOutline, IoSearchOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";

const HeaderSearch = () => {
  return (
    <div className=" flex items-center gap-3">
      <button className=" border-gray-300 border-[1px] px-[0.29rem] py-1 rounded-md w-[22rem] flex items-center">
        <span className=" mr-2 text-base font-semibold">
        <IoSearchOutline />
        </span>
        Type <span className=" border-gray-400 border-[1px] text-xs mx-1 px-1 rounded-sm">/</span>
        to search
      </button>
      <span className=" text-gray-300">|</span>
      <div className=" flex items-center gap-3">
        <p className=" flex items-center gap-2 border-gray-300 border-[1px] px-2 py-2 rounded-md cursor-pointer "><FiPlus /> <FaCaretDown /></p>
        <p className="border-gray-300 border-[1px] px-2 py-2 rounded-md cursor-pointer"><GoIssueOpened  /></p>
        <p className="border-gray-300 border-[1px] px-2 py-2 rounded-md cursor-pointer"><IoGitPullRequestOutline /></p>
        <p className="border-gray-300 border-[1px] px-2 py-2 rounded-md cursor-pointer"><TiMessages /></p>
      </div>
    </div>
  );
};

export default HeaderSearch;
