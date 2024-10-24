"use client";

import LogoutSpinner from "@/components/Loader/LogoutSpinner";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

const Invalid = () => {
  useEffect(() => {
    localStorage.setItem(
      "loginStatus",
      "Xin lỗi, nhưng bạn đã đăng nhập ở thiết bị khác rồi!"
    );
    signOut({ redirect: true, callbackUrl: "/signin" });
  });
  return <LogoutSpinner />;
};

export default Invalid;
