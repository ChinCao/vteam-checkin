"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Invalid = () => {
  useEffect(() => {
    localStorage.setItem(
      "loginStatus",
      "Xin lỗi, nhưng bạn đã đăng nhập ở thiết bị khác rồi!"
    );
    redirect("/signout");
  });
};

export default Invalid;
