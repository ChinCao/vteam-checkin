"use client";

import LogoutSpinner from "@/components/Loader/LogoutSpinner";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Invalid = () => {
  useEffect(() => {
    localStorage.setItem("loginStatus", "Email liên kết không tồn tại");
    redirect("/signout");
  });
  signOut({ redirect: true, callbackUrl: "/signin" });

  return <LogoutSpinner />;
};

export default Invalid;
