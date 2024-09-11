"use client";
import { signOut } from "next-auth/react";
import React from "react";
const page = () => {
  return (
    <div>
      <button onClick={() => signOut({ callbackUrl: "/" })}>Logout</button>
    </div>
  );
};

export default page;
