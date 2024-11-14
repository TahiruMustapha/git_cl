"use client";
import { useSession } from "next-auth/react";
import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
  loggedIn: boolean;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const { data: session } = useSession();
  const loggedIn = !!session;
  return (
    <AuthContext.Provider value={{ loggedIn }}>
      <main className=" h-screen overflow-y-hidden">{children}</main>
    </AuthContext.Provider>
  );
};

// Custom hook for easier access to AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
