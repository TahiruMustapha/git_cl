import { repoCommits, singleRepo } from "@/app/lib/helper";
import SingleRepo from "@/app/ui/SingleRepo";
import React from "react";
const page = async ({ params: { singleRep } }: any) => {
  const userName = "TahiruMustapha";
  // console.log(singleRep);
  const singleRepoDetails: any = await singleRepo(singleRep, userName);
  const commitData: any = await repoCommits(singleRep, userName);
  // console.log(commitData);
  return (
    <div>
      <SingleRepo
        singleRepoDetails={singleRepoDetails}
        commitData={commitData}
      />
    </div>
  );
};
export default page;
