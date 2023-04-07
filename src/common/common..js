export const createData = (id, code, name, amount, date_created, expires) => {
  return { id, code, name, amount, date_created, expires };
};

export const compareStartDates = (d1, d2) => {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  if (date1 < date2) {
    return false;
  } else if (date1 > date2) {
    return true;
  } else {
    return false;
  }
};

export const compareExpiredDates = (d1, d2) => {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  if (date1 < date2) {
    return true;
  } else if (date1 > date2) {
    return false;
  } else {
    return false;
  }
};
