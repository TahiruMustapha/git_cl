export const repos = async (userName: any) => {
  const res = await fetch(`https://api.github.com/users/${userName}/repos`);
  const data: any = await res.json();
  return data;
};
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
