/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { getSheetData } from "@/lib/GoogleSpreadsheet";

export async function AutoLogOut(session: any) {
  {
    if (session) {
      const sheetData: any = await getSheetData(session?.user?.email);
      if (
        sheetData[6] == "TRUE" &&
        sheetData[7] == "FALSE" &&
        sheetData[8] == "FALSE"
      ) {
        return true;
      }
    }
    return false;
  }
}
