"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Valid = () => {
  useEffect(() => {
    localStorage.setItem(
      "loginStatus",
      "Hãy quay lại check-in concert bằng website này vào lúc 19:30 nếu bạn có vé concert!"
    );
    redirect("/signout");
  });
};

export default Valid;
