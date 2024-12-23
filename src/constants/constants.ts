export const CONCERT_TIME = "19:25";
export const LOGIN_TIME = "16:30";

export const CONCERT_DATE = new Date(`2024-11-01T${CONCERT_TIME}:20+07:00`);
export const CHECKIN_DATE = new Date(`2024-11-01T${LOGIN_TIME}:50+07:00`);

export type SpreadsheetData = [
  string, // 'Index 16 STT'
  string, // 'Bầu (9-10-11-12, có concert)'
  string, // 'Cao Cự Chính'
  string, // '11B4'
  string, // 'VS054678'
  string, // 'chinh054678@stu.vinschool.edu.vn'
  string, // 'TRUE' Đã checked-in lần 1
  string, // 'FALSE' Đã checked-in concert
  string, // 'FALSE' Đã đăng nhập lần 1
  string, // 'FALSE' Đã đăng nhập concert
  string, // CSRF lần 1
  string //  CSRF concert
];

export const ROW_SHIFT = 2;
export const STT_INDEX = 0;
export const TICKET_TYPE_INDEX = 1;
export const NAME_INDEX = 2;
export const CLASS_INDEX = 3;
export const STUDENTID_INDEX = 4;
export const EMAIL_INDEX = 5;
export const LOGIN_INDEX = 8;
export const CHECKIN_INDEX = 6;
export const CONCERT_LOGIN_INDEX = 9;
export const CONCERT_CHECKIN_INDEX = 7;
export const CSRF_SILENCIO = 10;
export const CSRF_CONCERT = 11;

export const LOGIN_COLUMN = "I";
export const CHECK_IN_COLUMN = "G";
export const CONCERT_LOGIN_COLUMN = "J";
export const CONCERT_CHECKIN_COLUMN = "H";
export const CSRF_SILENCIO_COLUMN = "K";
export const CSRF_CONCERT_COLUMN = "L";

export const ISCONCERT = () => {
  const currentTime = new Date();
  return currentTime > CONCERT_DATE;
};

export const ISCHECKIN = () => {
  const currentTime = new Date();
  return currentTime > CHECKIN_DATE;
};

export const RED_MAIN = "#980000";
export const GREEN_MAIN = "green";
export const MAGENTA_MAIN = "#e27be0";
export const TICKET_WITH_CONCERT = "Bầu";
export const TICKET_GRADE_6_7_8 = "Nguyệt";
export const TICKET_9_10_11_12 = "Nhị";

export interface Theme {
  color: string;
  name: string;
}

export const GET_THEME = (sheetData: SpreadsheetData) => {
  return sheetData[TICKET_TYPE_INDEX].includes(TICKET_GRADE_6_7_8)
    ? { color: MAGENTA_MAIN, name: TICKET_GRADE_6_7_8 }
    : sheetData[TICKET_TYPE_INDEX].includes(TICKET_WITH_CONCERT)
    ? { color: GREEN_MAIN, name: TICKET_WITH_CONCERT }
    : { color: RED_MAIN, name: TICKET_9_10_11_12 };
};
