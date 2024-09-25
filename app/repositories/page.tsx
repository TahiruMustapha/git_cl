import React from "react";
import { repos, users } from "../lib/helper";
import Repos from "@/app/ui/Repos";
const page = async ({
  searchParams,
}: {
  searchParams: {
    query?: string;
    page?: string;
    [key: string]: string | string[] | undefined;
   
  };
}) => {
  const PER_PAGE = 10;
  const page = 1; // Number of repos per page
  const pages = searchParams["page"] ?? "1";
  const per__page = searchParams["per_page"] ?? "5";

  const start = (Number(pages) - 1) * Number(per__page);
  const end = start + Number(per__page);
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const userName = "TahiruMustapha";
  const repositories: any = await repos(userName, PER_PAGE, page);
  const user: any = await users(userName);
  const entries = repositories.slice(start, end);
  console.log(entries.length);
  return (
    <Repos
      repositories={entries}
      user={user}
      query={query}
      currentPage={currentPage}
    />
  );
};
export default page;
