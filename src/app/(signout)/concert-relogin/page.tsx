"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";

const Invalid = () => {
  useEffect(() => {
    localStorage.setItem(
      "loginStatus",
      "Bạn hãy login lại để check-in concert"
    );
    signOut({ redirect: true, callbackUrl: "/signin" });
  });
};

export default Invalid;
