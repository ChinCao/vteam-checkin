export const concert_date = new Date("2024-10-21T23:48:00+07:00");

export const isConcert = () => {
  const currentTime = new Date();
  return currentTime > concert_date;
};
