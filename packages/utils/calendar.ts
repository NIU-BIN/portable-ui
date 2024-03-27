const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDate();

export const today = `${currentYear}-${currentMonth
  .toString()
  .padStart(2, "0")}-${currentDay.toString().padStart(2, "0")}`;

const getCurrentMonthDateNum = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

const getCurrentMonthFirstDateWeek = (year: number, month: number) => {
  return new Date(`${year}-${month}-01`).getDay();
};

export const getCellDate = (year = currentYear, month = currentMonth) => {
  const currentMonthDateNum = getCurrentMonthDateNum(year, month);
  const cellDateList = [...Array(currentMonthDateNum)].map((_, index) => {
    const DD = (index + 1).toString().padStart(2, "0");
    const MM = month.toString().padStart(2, "0");
    return {
      type: "current",
      date: `${year}-${MM}-${DD}`,
      day: Number(DD),
      month: month,
      year: year,
    };
  });
  const currentMonthFirstDateWeek = getCurrentMonthFirstDateWeek(year, month);
  if (currentMonthFirstDateWeek > 0) {
    const lastMonth = month - 1 === 0 ? 12 : month - 1;
    const lastMonthYear = month - 1 === 0 ? year - 1 : year;
    const lastMonthDateNum = getCurrentMonthDateNum(lastMonthYear, lastMonth);
    for (let i = 0; i < currentMonthFirstDateWeek; i++) {
      const lastMonthDate = (lastMonthDateNum - i).toString().padStart(2, "0");
      cellDateList.unshift({
        type: "pre",
        date: `${lastMonthYear}-${lastMonth
          .toString()
          .padStart(2, "0")}-${lastMonthDate}`,
        day: lastMonthDateNum - i,
        month: lastMonth,
        year: lastMonthYear,
      });
    }
  }
  let nextMonthDay = 1;
  while (!!(cellDateList.length % 7)) {
    const nextMonth = month + 1 > 12 ? 1 : month + 1;
    const nextMonthYear = month + 1 > 12 ? year + 1 : year;
    const nextMonthDate = nextMonthDay.toString().padStart(2, "0");
    cellDateList.push({
      type: "next",
      date: `${nextMonthYear}-${nextMonth
        .toString()
        .padStart(2, "0")}-${nextMonthDate}`,
      day: nextMonthDay,
      month: nextMonth,
      year: nextMonthYear,
    });
    nextMonthDay += 1;
  }
  return cellDateList;
};
