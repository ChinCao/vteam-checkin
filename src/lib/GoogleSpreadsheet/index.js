import { google } from "googleapis";

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
    for (let i = 2; i < data.length; i++) {
      if (data[i][5] == authenticated_email) {
        return data[i];
      }
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const updateSheetData = async (data, eventType, csrfToken = "") => {
  let cell = null;
  if (eventType == "login") {
    cell = "G";
  } else if (eventType == "check-in") {
    cell = "H";
  } else if (eventType == "login-concert") {
    cell = "I";
  } else if (eventType == "check-in-concert") {
    cell = "J";
  }
  const sheets = google.sheets({ version: "v4", auth: await auth.getClient() });
  const range = `'SHEET CHECK IN'!${cell}${parseInt(data[0]) + 2}`;

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
      token_range = `'SHEET CHECK IN'!K${parseInt(data[0]) + 2}`;
    } else if (
      eventType == "login-concert" &&
      csrfToken &&
      data[8] == "FALSE"
    ) {
      token_range = `'SHEET CHECK IN'!L${parseInt(data[0]) + 2}`;
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
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
