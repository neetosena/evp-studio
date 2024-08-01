const dateConversion = (date) => {
  const newDate = new Date(date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "October",
    "December",
  ];
  const getMonth =
    months.filter((_, index) => index === newDate.getMonth()) +
    ", " +
    newDate.getFullYear();
  return getMonth;
};

export { dateConversion };
