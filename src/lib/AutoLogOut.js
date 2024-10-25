/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import {
  CHECKIN_INDEX,
  CONCERT_LOGIN_INDEX,
  LOGIN_INDEX,
} from "@/constants/constants";
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
        sheetData[LOGIN_INDEX] == "TRUE" &&
        sheetData[CHECKIN_INDEX] == "FALSE" &&
        sheetData[CONCERT_LOGIN_INDEX] == "FALSE"
      ) {
        await updateSheetData(sheetData, "check-in", csrf);
        return true;
      }
    }
    return false;
  }
}
