export const convertTimeFormat = (timeString) => {
  const splitted = timeString.split(":");

  let hour = splitted[0];
  let meridiem;

  if (hour === 0) {
    splitted[0] = "12";
    meridiem = "AM";
  } else if (hour < 12) {
    splitted[0] = hour;
    meridiem = "AM";
  } else if (hour == 12) {
    splitted[0] = "12";
    meridiem = "PM";
  } else if (hour > 12 && hour < 24) {
    splitted[0] = (hour - 12).toString().padStart(2, "0");
    meridiem = "PM";
  } else {
    return "Invalid";
  }

  return splitted.join(":") + meridiem;
};

export const getServiceTime = (timeArray = []) => {
  let outputArray = [];
  timeArray.forEach(({ start, end }) => {
    outputArray.push(`${convertTimeFormat(start)}-${convertTimeFormat(end)}`);
  });

  return outputArray.length && outputArray;
};
