"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Invalid = () => {
  useEffect(() => {
    localStorage.setItem(
      "loginStatus",
      "Xin lỗi, nhưng bạn đã checked-in rồi!"
    );
    redirect("/signout");
  });
};

export default Invalid;
