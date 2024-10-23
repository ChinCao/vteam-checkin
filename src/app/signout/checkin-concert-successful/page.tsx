"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Valid = () => {
  useEffect(() => {
    localStorage.setItem(
      "loginStatus",
      "Chúc bạn có 1 đêm concert thật nồng cháy 🔥"
    );
    redirect("/signout");
  });
};

export default Valid;
