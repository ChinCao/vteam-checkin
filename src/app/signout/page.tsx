"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";

const LogoutPage = () => {
  useEffect(() => {
    signOut({ redirect: true, callbackUrl: "/signin" });
  });
};

export default LogoutPage;
