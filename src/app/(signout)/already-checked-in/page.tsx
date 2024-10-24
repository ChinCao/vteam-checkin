"use client";

import { useEffect } from "react";
import LogoutSpinner from "@/components/Loader/LogoutSpinner";
import { signOut } from "next-auth/react";

const Invalid = () => {
  useEffect(() => {
    localStorage.setItem(
      "loginStatus",
      "Xin lỗi, nhưng bạn đã checked-in rồi!"
    );
    signOut({ redirect: true, callbackUrl: "/signin" });
  });
  return <LogoutSpinner />;
};

export default Invalid;
