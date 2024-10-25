export const CONCERT_DATE = new Date("2024-11-01T19:35:00+07:00");

export type SpreadsheetData = [
  string, // 'Index 16 STT'
  string, // 'Bầu (9-10-11-12, có concert)'
  string, // 'Cao Cự Chính'
  string, // '11B4'
  string, // 'VS054678'
  string, // 'chinh054678@stu.vinschool.edu.vn'
  string, // 'TRUE' Đã đăng nhập lần 1
  string, // 'FALSE' Đã checked-in lần 1
  string, // 'FALSE' Đã đăng nhập concert
  string, // 'FALSE' Đã checked-concert
  string, // csrf lần 1
  string //  csrf concert
];

export const ROW_SHIFT = 2;
export const STT_INDEX = 0;
export const TICKET_TYPE_INDEX = 1;
export const NAME_INDEX = 2;
export const CLASS_INDEX = 3;
export const STUDENTID_INDEX = 4;
export const EMAIL_INDEX = 5;
export const LOGIN_INDEX = 6;
export const CHECKIN_INDEX = 7;
export const CONCERT_LOGIN_INDEX = 8;
export const CONCERT_CHECKIN_INDEX = 9;
export const CSRF_SILENCIO = 10;
export const CSRF_CONCERT = 11;

export const LOGIN_COLUMN = "G";
export const CHECK_IN_COLUMN = "H";
export const CONCERT_LOGIN_COLUMN = "I";
export const CONCERT_CHECKIN_COLUMN = "J";
export const CSRF_SILENCIO_COLUMN = "K";
export const CSRF_CONCERT_COLUMN = "L";

export const ISCONCERT = () => {
  const currentTime = new Date();
  return currentTime > CONCERT_DATE;
};

export const RED_MAIN = "#980000";

export const TICKET_WITH_CONCERT = "Bầu";
