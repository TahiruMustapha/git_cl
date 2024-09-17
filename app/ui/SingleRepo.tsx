import React from "react";
const SingleRepo = ({ singleRepoDetails, commitData }: any) => {
  const newCommitData = { ...commitData };
  const { commit } = newCommitData;
  console.log(commit);

  return (
    <div>
      <table className=" table-auto mt-8 w-full  border-collapse border border-slate-400">
        <thead className=" border-b-blue-600 border-b-[2px] border-t-blue-600 border-t-[2px]">
          <tr className=" ">
            <th className=" p-3 text-sm text-gray-600">Repo Name</th>
            <th className=" p-3 text-sm text-gray-600">Commit Name</th>
            <th className=" p-3 text-sm text-gray-600">Commit Date & Time</th>
            <th className=" p-3 text-sm text-gray-600">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" bg-white  my-1 px-1 py-1 border-b-gray-500 border-[1px] text-center  ">
            <td className=" p-3  ">{singleRepoDetails.name}</td>
            <td>{singleRepoDetails.message}</td>
            <td>{singleRepoDetails.name}</td>
            <td>
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
