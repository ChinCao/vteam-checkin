"use server";
import {
  ISCONCERT,
  SpreadsheetData,
  STUDENTID_INDEX,
} from "@/constants/constants";
import { updateSheetData } from "@/lib/GoogleSpreadsheet";

export async function Checkin(data: SpreadsheetData, password: string) {
  {
    if (password == data[STUDENTID_INDEX].slice(-3) && !ISCONCERT()) {
      await updateSheetData(data, "check-in");
      return true;
    } else if (password == data[STUDENTID_INDEX].slice(-3) && ISCONCERT()) {
      await updateSheetData(data, "check-in-concert");
      return true;
    }
    return false;
  }
}
