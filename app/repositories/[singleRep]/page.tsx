import { repoCommits, singleRepo } from "@/app/lib/helper";
import SingleRepo from "@/app/ui/SingleRepo";
import React from "react";
const page = async ({ params: { singleRep } }: any) => {
  const userName = "TahiruMustapha";
  const singleRepoDetails: any = await singleRepo(singleRep, userName);
  const commitData: any = await repoCommits(singleRep, userName);
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
