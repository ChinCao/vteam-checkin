"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";

const Valid = () => {
  useEffect(() => {
    localStorage.setItem(
      "loginStatus",
      "Hãy quay lại check-in concert bằng website này vào lúc 19:30 nếu bạn đã mua hạng vé Bầu!"
    );
    signOut({ redirect: true, callbackUrl: "/signin" });
  });
};

export default Valid;
