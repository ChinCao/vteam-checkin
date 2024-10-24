"use client";

import LogoutSpinner from "@/components/Loader/LogoutSpinner";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

const Valid = () => {
  useEffect(() => {
    localStorage.setItem(
      "loginStatus",
      "Chúc bạn có 1 đêm concert thật nồng cháy 🔥"
    );
    signOut({ redirect: true, callbackUrl: "/signin" });
  });
  return <LogoutSpinner />;
};

export default Valid;
