"use client";

import { CONCERT_TIME } from "@/constants/constants";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

const Valid = () => {
  useEffect(() => {
    localStorage.setItem(
      "loginStatus",
      `Hãy quay lại check-in concert bằng website này vào lúc ${CONCERT_TIME} nếu bạn đã mua hạng vé Bầu!`
    );
    signOut({ redirect: true, callbackUrl: "/signin" });
  });
};

export default Valid;
