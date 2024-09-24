import Image from "next/image";
import React from "react";
import { GoProjectSymlink } from "react-icons/go";

const Projects = () => {
  return (
    <div className=" px-10 mt-8">
      <div className=" px-2 py-3 relative bg-[url(https://plus.unsplash.com/premium_photo-1705010649877-f561dd47dee9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center h-[13rem]  mt-2 rounded-md  ">
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
        <div className=" relative mt-3">
          <h2 className=" text-3xl mb-2"> Welcome to projects </h2>
          <p className=" ">
            Built like a spreadsheet, project tables give you a live canvas to
            filter, sort, and group issues <br /> and pull requests. Tailor them
            to your needs with custom fields and saved views.
          </p>
          <button className=" mt-2 text-sm border-gray-500 rounded-md border-[1px] px-2 py-1">
            Learn More
          </button>
        </div>
      </div>

      <div className=" py-16 mt-10 border-gray-300  border-[1px] rounded-md flex gap-4  flex-col justify-center items-center">
        <span className=" text-2xl  text-gray-500">
          {" "}
          <GoProjectSymlink />
        </span>

        <h3 className=" font-medium text-xl">Create your first GitHub project</h3>
        <p className=" text-gray-400">
          Projects are a customizable, flexible tool for planning and tracking
          your work.
        </p>
        <button className="  bg-[#059212] text-white px-2 py-[0.29rem] rounded-md text-sm">New project</button>
      </div>
    </div>
  );
};

export default Projects;
