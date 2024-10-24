"use client";

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
};

export default Valid;
