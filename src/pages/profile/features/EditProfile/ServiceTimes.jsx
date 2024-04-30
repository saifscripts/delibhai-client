import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { MdDelete, MdEdit } from "react-icons/md";
import { showErrorToast } from "../../../../lib/toast";
import { convertTimeFormat } from "../../../utils/convertTime";
import {
  hasMinimumTimeGap,
  is24Hour,
  isSlotOverlapping,
  isValidTimeSlot,
  remove24HourSlot,
} from "../../../utils/timeHelpers";

const getCurrentTime = () => {
  const currentDate = new Date();

  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};

export default function ServiceTimes({
  serviceTimes,
  setServiceTimes,
  is24HourServiceTime,
  setIs24HourServiceTime,
}) {
  const [newTimeSlot, setNewTimeSlot] = useState({
    start: getCurrentTime(),
    end: getCurrentTime(),
  });

  useEffect(() => {
    setIs24HourServiceTime(is24Hour(serviceTimes));
  }, [serviceTimes, setIs24HourServiceTime]);

  const onStartTimeChange = (e) => {
    setNewTimeSlot((prevSlot) => ({
      ...prevSlot,
      start: e.target.value,
    }));
  };

  const onEndTimeChange = (e) => {
    setNewTimeSlot((prevSlot) => ({
      ...prevSlot,
      end: e.target.value,
    }));
  };

  const toggle24Hour = () => {
    if (is24HourServiceTime) {
      setServiceTimes(remove24HourSlot(serviceTimes));
      setIs24HourServiceTime(false);
    } else {
      setIs24HourServiceTime(true);
    }
  };

  const addTime = (e) => {
    e.preventDefault();

    if (!isValidTimeSlot(newTimeSlot)) {
      return showErrorToast("সঠিক সময় প্রদান করুন");
    }

    if (!hasMinimumTimeGap(newTimeSlot)) {
      return showErrorToast("ন্যূনতম ৩০ মিনিট ব্যবধান থাকা বাধ্যতামূলক");
    }

    if (isSlotOverlapping(newTimeSlot, serviceTimes)) {
      return showErrorToast("উক্ত সময় ইতিমধ্যে প্রদান করা হয়েছে");
    }

    const _serviceTimes = cloneDeep(serviceTimes);
    _serviceTimes.push(newTimeSlot);
    setServiceTimes(_serviceTimes);
  };

  const removeTime = (e, startTime, endTime) => {
    e.preventDefault();

    let _serviceTimes = cloneDeep(serviceTimes);
    _serviceTimes = _serviceTimes.filter(
      ({ start, end }) => !(start === startTime && end === endTime),
    );

    setServiceTimes(_serviceTimes);
  };

  return (
    <>
      {/* Title */}
      <div className="mb-1 mt-4 flex items-center justify-between">
        <p className="font-bold">সার্ভিস প্রদানের সময়</p>

        <label className="my-2 inline-block text-lg">
          <input
            type="checkbox"
            checked={is24HourServiceTime}
            onChange={toggle24Hour}
          />{" "}
          দিনরাত ২৪ ঘণ্টা
        </label>
      </div>

      {!is24HourServiceTime && (
        <>
          <div className="flex flex-col gap-2">
            {serviceTimes.map(({ start, end }, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-secondary bg-opacity-30 px-3 py-2 "
              >
                <span>{`${convertTimeFormat(start)} থেকে ${convertTimeFormat(
                  end,
                )} পর্যন্ত`}</span>

                <div className="space-x-1">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="rounded-lg p-2 text-primary hover:bg-neutral"
                  >
                    {<MdEdit />}
                  </button>
                  <button
                    onClick={(e) => removeTime(e, start, end)}
                    className="rounded-lg p-2 text-red-400 hover:bg-neutral"
                  >
                    {<MdDelete />}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="my-6 flex flex-col gap-2 rounded-lg bg-secondary bg-opacity-10 p-3">
            <label className="bg-light flex items-center justify-between rounded-lg p-2">
              শুরুর সময়
              <input
                className="rounded-lg border border-accent bg-inherit p-1"
                type="time"
                value={newTimeSlot.start}
                onChange={onStartTimeChange}
              />
            </label>
            <label className="bg-light flex items-center justify-between rounded-lg p-2">
              শেষের সময়
              <input
                className="rounded-lg border border-accent bg-inherit p-1"
                type="time"
                value={newTimeSlot.end}
                onChange={onEndTimeChange}
              />
            </label>

            <button
              onClick={addTime}
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-2 py-2 text-xl text-white"
            >
              <AiFillPlusSquare />
              <span>যোগ করুন</span>
            </button>
          </div>
        </>
      )}
    </>
  );
}
