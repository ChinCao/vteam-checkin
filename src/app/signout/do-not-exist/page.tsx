"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Invalid = () => {
  useEffect(() => {
    localStorage.setItem("loginStatus", "Email liên kết không tồn tại");
    redirect("/signout");
  });
};

export default Invalid;
