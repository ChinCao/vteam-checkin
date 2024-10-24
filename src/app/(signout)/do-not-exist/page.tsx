"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";

const Invalid = () => {
  useEffect(() => {
    localStorage.setItem("loginStatus", "Email liên kết không tồn tại");
    signOut({ redirect: true, callbackUrl: "/signin" });
  });
};

export default Invalid;
