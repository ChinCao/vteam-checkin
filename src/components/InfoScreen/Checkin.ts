"use server";
import { isConcert, SpreadsheetData } from "@/constants/constants";
import { updateSheetData } from "@/lib/GoogleSpreadsheet";

export async function Checkin(data: SpreadsheetData, password: string) {
  {
    if (password == data[4].slice(-3) && !isConcert()) {
      await updateSheetData(data, "check-in");
      return true;
    } else if (password == data[4].slice(-3) && isConcert()) {
      await updateSheetData(data, "check-in-concert");
      return true;
    }
    return false;
  }
}
