"use server";
import { updateSheetData } from "@/lib/GoogleSpreadsheet";

export async function Checkin(
  data: [
    string, // '16'
    string, // 'Tía (9-10-11-12, có concert)'
    string, // 'Cao Cự Chính'
    string, // '11B4'
    string, // 'VS054678'
    string, // 'chinh054678@stu.vinschool.edu.vn'
    string, // 'TRUE'
    string // 'FALSE'
  ],
  password: string
) {
  {
    if (password == data[2][0] + data[4].slice(-2)) {
      await updateSheetData(data, "normal");
      return true;
    }
    return false;
  }
}