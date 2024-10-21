"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Invalid = () => {
  useEffect(() => {
    localStorage.setItem(
      "loginStatus",
      "Xin lỗi, nhưng vé của bạn không có concert!"
    );
    redirect("/signout");
  });
};

export default Invalid;
