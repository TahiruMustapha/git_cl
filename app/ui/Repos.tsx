"use client";
import { timeAgo } from "@/app/lib/helper";
import UserDetails from "@/app/ui/UserDetails";
import clsx from "clsx";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Search from "./Search";
import { Pagination } from "@/components/ui/pagination";
import PaginationCom from "./PaginationCom";
// import Pagination from "./Pagination";
const Repos = ({ repositories, user, query }: any) => {
  const PER_PAGE = 5; // Number of repos per page
  const filteredRepos = repositories.filter((repo: any) =>
    repo.name.toLowerCase().includes(query.toLowerCase())
  );
  // console.log(currentPage);
  return (
    <div className=" px-[6rem] mt-10 flex gap-4 w-full h-screen   ">
      <UserDetails userData={user} />
      <div className=" w-[70%]  ">
        <Search />
        <hr />
        <div>
          {filteredRepos.map((repos: any) => (
            <div className=" flex  flex-col gap-4 mt-4" key={repos.id}>
              <p className=" flex items-center gap-4">
                <Link
                  href={`/repositories/${repos.name}`}
                  className=" text-xl cursor-pointer text-blue-600 font-semibold"
                >
                  {repos.name}
                </Link>
                <span className=" text-xs border-gray-200 border-[1px] px-2 py-[1px] rounded-xl">
                  {repos.visibility}
                </span>
              </p>
              <div className=" flex items-center gap-10 ">
                <p className=" ">
                  <span
                    className={clsx(
                      " text-xs inline-block h-3 w-3   mr-1 rounded-full",
                      {
                        " bg-yellow-300": repos.language === "TypeScript",
                        " bg-blue-700": repos.language === "JavaScript",
                        " bg-violet-900": repos.language === "CSS",
                        "bg-red-600": repos.language === "HTML",
                        "bg-[#ED3EF7]": repos.language === "SCSS",
                        "bg-[#173B45]": repos.language === "Hack",
                      }
                    )}
                  ></span>
                  <span className=" text-xs"> {repos.language}</span>
                </p>
                <span className=" text-xs"> {timeAgo(repos.pushed_at)}</span>
              </div>
              <hr />
            </div>
          ))}
        </div>
        {/* <div className=" w-full  mt-1 mb-1 py-2 rounded-sm ">
          <div className=" flex items-center gap-4 justify-center">
            <span className=" border-gray-400 text-gray-400 border-[2px] px-2 py-2 rounded-md ">
              <FaChevronLeft />
            </span>
            <div className=" flex items-center gap-3">
              <button className=" border-gray-400 text-gray-400 border-[2px] px-3 py-1 rounded-md ">
                1
              </button>
              <button className=" border-gray-400 text-gray-400 border-[2px] px-3 py-1 rounded-md ">
                2
              </button>
              <button className=" border-gray-400 text-gray-400 border-[2px] px-3 py-1 rounded-md ">
                3
              </button>
              <button className=" border-gray-400 text-gray-400 border-[2px] px-3 py-1 rounded-md ">
                4
              </button>
            </div>
            <span className="  border-gray-400 text-gray-400 border-[2px] px-2 py-2 rounded-md ">
              <FaChevronRight />
            </span>
          </div>
        </div> */}
        <PaginationCom/>
      </div>
    </div>
  );
};

export default Repos;
