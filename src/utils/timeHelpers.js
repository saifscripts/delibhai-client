export const calculateTimeInMinutes = (time) => {
  const timeArray = time.split(":");

  const hour = Number(timeArray[0]);
  const minute = Number(timeArray[1]);

  return hour * 60 + minute;
};

export const isValidTimeSlot = (slot) => {
  const startTimeInMinutes = calculateTimeInMinutes(slot.start);
  const endTimeInMinutes = calculateTimeInMinutes(slot.end);

  return endTimeInMinutes >= startTimeInMinutes;
};

export const hasMinimumTimeGap = (slot) => {
  const startTimeInMinutes = calculateTimeInMinutes(slot.start);
  const endTimeInMinutes = calculateTimeInMinutes(slot.end);

  const durationInMinutes = endTimeInMinutes - startTimeInMinutes;

  return durationInMinutes >= 30;
};

export const isSlotOverlapping = (newSlot, existingSlots) => {
  const newSlotStartMinutes = calculateTimeInMinutes(newSlot.start);
  const newSlotEndMinutes = calculateTimeInMinutes(newSlot.end);

  for (const slot of existingSlots) {
    const existingSlotStartMinutes = calculateTimeInMinutes(slot.start);
    const existingSlotEndMinutes = calculateTimeInMinutes(slot.end);

    if (
      (newSlotStartMinutes <= existingSlotStartMinutes &&
        newSlotEndMinutes >= existingSlotStartMinutes) ||
      (newSlotStartMinutes <= existingSlotEndMinutes &&
        newSlotEndMinutes >= existingSlotEndMinutes)
    ) {
      return true;
    }
  }

  return false;
};

export const isCurrentTimeWithinServiceTimes = (slots = []) => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const currentTimeInMinutes = currentHour * 60 + currentMinute;

  for (const slot of slots) {
    const slotStartMinutes = calculateTimeInMinutes(slot.start);
    const slotEndMinutes = calculateTimeInMinutes(slot.end);

    if (
      currentTimeInMinutes >= slotStartMinutes &&
      currentTimeInMinutes <= slotEndMinutes
    ) {
      return true;
    }
  }

  return false;
};

export const is24Hour = (slots) => {
  for (const slot of slots) {
    const slotStartMinutes = calculateTimeInMinutes(slot.start);
    const slotEndMinutes = calculateTimeInMinutes(slot.end);

    if (slotStartMinutes === 0 && slotEndMinutes === 23 * 60 + 59) {
      return true;
    }
  }

  return false;
};

export const remove24HourSlot = (slots) => {
  const filtered = slots.filter((slot) => {
    const slotStartMinutes = calculateTimeInMinutes(slot.start);
    const slotEndMinutes = calculateTimeInMinutes(slot.end);

    return !(slotStartMinutes === 0 && slotEndMinutes === 23 * 60 + 59);
  });

  return filtered;
};
