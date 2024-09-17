import React from "react";
import { repos, users } from "../lib/helper";
import Repos from "@/app/ui/Repos";
const page = async () => {
  const userName = "TahiruMustapha";
  const repositories: any = await repos(userName);
  const user: any = await users(userName);
  // console.log(user);
  return <Repos repositories={repositories} user={user} />;
};
export default page;
