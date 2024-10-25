import {
  CHECK_IN_COLUMN,
  CONCERT_CHECKIN_COLUMN,
  CONCERT_LOGIN_COLUMN,
  CONCERT_LOGIN_INDEX,
  CSRF_CONCERT_COLUMN,
  CSRF_SILENCIO_COLUMN,
  EMAIL_INDEX,
  LOGIN_COLUMN,
  ROW_SHIFT,
  STT_INDEX,
} from "@/constants/constants";
import { google } from "googleapis";
import { NextResponse } from "next/server";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: atob(process.env.GOOGLE_SERVICE_ACOUNT_PRIVATE_KEY),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
export const getSheetData = async (authenticated_email) => {
  const sheets = google.sheets({ version: "v4", auth: await auth.getClient() });
  const range = `'SHEET CHECK IN'!A:Z`;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
    });

    let data = response.data.values;
    for (let i = ROW_SHIFT; i < data.length; i++) {
      if (data[i][EMAIL_INDEX] == authenticated_email) {
        return data[i];
      }
    }
    return null;
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const updateSheetData = async (data, eventType, csrfToken = "") => {
  let cell = null;
  if (eventType == "login") {
    cell = LOGIN_COLUMN;
  } else if (eventType == "check-in") {
    cell = CHECK_IN_COLUMN;
  } else if (eventType == "login-concert") {
    cell = CONCERT_LOGIN_COLUMN;
  } else if (eventType == "check-in-concert") {
    cell = CONCERT_CHECKIN_COLUMN;
  }
  const sheets = google.sheets({ version: "v4", auth: await auth.getClient() });
  const range = `'SHEET CHECK IN'!${cell}${
    parseInt(data[STT_INDEX]) + ROW_SHIFT
  }`;

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[true]],
      },
    });
    let token_range = null;
    if (eventType == "login" && csrfToken && data[6] == "FALSE") {
      token_range = `'SHEET CHECK IN'!${CSRF_SILENCIO_COLUMN}${
        parseInt(data[STT_INDEX]) + ROW_SHIFT
      }`;
    } else if (
      eventType == "login-concert" &&
      csrfToken &&
      data[CONCERT_LOGIN_INDEX] == "FALSE"
    ) {
      token_range = `'SHEET CHECK IN'!${CSRF_CONCERT_COLUMN}${
        parseInt(data[STT_INDEX]) + ROW_SHIFT
      }`;
    }
    try {
      await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: token_range,
        valueInputOption: "RAW",
        requestBody: {
          values: [[csrfToken]],
        },
      });
    } catch (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
