"use server";

import { cookies } from "next/headers";

export const GetCSRF = async () => {
  const csrfToken = (await cookies()).get("__Host-next-auth.csrf-token");
  const csrf = csrfToken?.value.split("|")[0];
  return csrf;
};
