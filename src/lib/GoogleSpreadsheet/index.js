import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_SERVICE_ACOUNT_PRIVATE_KEY,
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

export const updateSheetData = async (data) => {
  const sheets = google.sheets({ version: "v4", auth: await auth.getClient() });
  const range = `'SHEET CHECK IN'!H${parseInt(data[0]) + 2}`;

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[true]],
      },
    });
  } catch (error) {
    console.log(error);
  }
};
