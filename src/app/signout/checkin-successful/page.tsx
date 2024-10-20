"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Valid = () => {
  useEffect(() => {
    localStorage.setItem(
      "loginStatus",
      "Hãy quay lại check-in concert bằng website này vào lúc 07:30!"
    );
    redirect("/signout");
  });
};

export default Valid;
