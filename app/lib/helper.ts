// import page from "../overview/page";

export const repos = async (userName: any, per_page: any ,page:number) => {
  const res = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${per_page}&page=${page}`);
  const data: any = await res.json();
  return data;
};  
// {params:{per_page:per_page,page:page}}
export const singleRepo = async (repoName: any, userName: any) => {
  const res = await fetch(
    `https://api.github.com/repos/${userName}/${repoName}`
  );
  const data: any = await res.json();
  return data;
};
export const repoCommits = async (repoName: any, userName: any) => {
  const res = await fetch(
    `https://api.github.com/repos/${userName}/${repoName}/commits`
  );
  const commitsData: any = await res.json();
  return commitsData;
};
export const users = async (userName: any) => {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  const data: any = await res.json();
  return data;
};

export const timeAgo = (dateString: any) => {
  const now = new Date();
  const pastDate = new Date(dateString);
  const diffInMs = now.getTime() - pastDate.getTime();
  const daysAgo = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  return `Updated ${daysAgo} days ago`;
};

export const formatTimeAndDate = function (dateString: Date) {
  const date = new Date(dateString);
  const options: any = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  // Get parts of the time
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be converted to 12

  const formattedTime = `${hours}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
  return `${formattedDate}, ${formattedTime}`;
};
