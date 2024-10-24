/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { getSheetData, updateSheetData } from "@/lib/GoogleSpreadsheet";

export async function AutoLogOut(session, data, csrf) {
  {
    if (session) {
      let sheetData;
      if (data) {
        sheetData = data;
      } else {
        sheetData = await getSheetData(session?.user?.email);
      }
      if (
        sheetData[6] == "TRUE" &&
        sheetData[7] == "FALSE" &&
        sheetData[8] == "FALSE"
      ) {
        await updateSheetData(sheetData, "check-in", csrf);
        return true;
      }
    }
    return false;
  }
}
