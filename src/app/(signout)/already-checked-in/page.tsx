"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";

const Invalid = () => {
  useEffect(() => {
    localStorage.setItem(
      "loginStatus",
      "Xin lỗi, nhưng bạn đã checked-in rồi!"
    );
    signOut({ redirect: true, callbackUrl: "/signin" });
  });
};

export default Invalid;
