"use server";
import { ISCONCERT, SpreadsheetData } from "@/constants/constants";
import { updateSheetData } from "@/lib/GoogleSpreadsheet";

export async function Checkin(data: SpreadsheetData) {
  {
    if (!ISCONCERT()) {
      await updateSheetData(data, "check-in");
      return true;
    } else if (ISCONCERT()) {
      await updateSheetData(data, "check-in-concert");
      return true;
    }
    return false;
  }
}
