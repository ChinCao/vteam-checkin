"use server";

import { cookies } from "next/headers";

export const GetCSRF = async () => {
  const csrfToken = (await cookies()).get("__Host-next-auth.csrf-token");
  const csrf = csrfToken?.value.split("|")[0];
  return csrf;
};

export const DeleteSession = async () => {
  const cookieStore = cookies();
  cookieStore.set("__Secure-next-auth.session-token", "", {
    maxAge: -1,
  });
};
