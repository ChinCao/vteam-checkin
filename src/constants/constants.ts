// export const concert_date = new Date("2024-11-01T19:35:00+07:00");
export const concert_date = new Date("2024-10-25T10:07:00+07:00");

export type SpreadsheetData = [
  string, // 'Index 16'
  string, // 'Tía (9-10-11-12, có concert)'
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

export const isConcert = () => {
  const currentTime = new Date();
  return currentTime > concert_date;
};

export const red_main = "#980000";
