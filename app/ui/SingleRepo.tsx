import React from "react";
import { formatTimeAndDate } from "../lib/helper";
import { CiFilter } from "react-icons/ci";
const SingleRepo = ({ singleRepoDetails, commitData }: any) => {
  // const newCommitData = { ...commitData };
  // const { commit } = newCommitData;
  // console.log(commitData);
  const commitDetails = commitData.map((data: any) => {
    return data;
  });
  // console.log(commitDetails.commit, "details");
  return (
    <div>
      <div className=" mt-8 w-full flex items-center justify-center ">
        <p className="w-[30%] rounded-md px-2 border-gray-300 border-[1px] flex items-center  ">
          <span className=" text-gray-500 text-xl">
            <CiFilter />
          </span>
          <input
            className=" outline-none  py-1  "
            type="text"
            placeholder="Filter comments"
          />
        </p>
      </div>
      <table className=" table-auto mt-2 w-full  border-collapse border border-slate-400">
        <thead className=" border-b-blue-600 border-b-[2px] border-t-blue-600 border-t-[2px]">
          <tr className=" ">
            <th className=" p-3 text-sm text-gray-600">Repo Name</th>
            <th className=" p-3 text-sm text-gray-600">Commit Name</th>
            <th className=" p-3 text-sm text-gray-600">Commit Date & Time</th>
            <th className=" p-3 text-sm text-gray-600">Description</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className=" bg-white   my-1 px-1 py-1  border-b-gray-300 border-[1px] text-center  ">
            <td className=" p-3 text-gray-500  ">{singleRepoDetails.name}</td>
            <td className=" overflow-y-auto py-2 ">
              {commitData.map((data: any) => (
                <p className=" py-2 hover:bg-gray-200" key={data.sha}>
                  <span className="text-gray-500 cursor-pointer hover:text-blue-600 hover:underline">
                    {data?.commit.message}
                  </span>
                </p>
              ))}
            </td>
            <td className=" overflow-y-aut">
              {commitData.map((data: any) => (
                <p className=" py-2  text-gray-500  " key={data.sha}>
                  {formatTimeAndDate(data?.commit?.author.date)}
                </p>
              ))}
            </td>
            <td className="text-gray-500">
              {singleRepoDetails.description ? (
                singleRepoDetails.description
              ) : (
                <span>...</span>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default SingleRepo;
