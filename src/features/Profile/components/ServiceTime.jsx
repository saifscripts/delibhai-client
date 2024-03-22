import { cloneDeep } from "lodash";
import { useState } from "react";
import { AiFillDelete, AiFillPlusSquare } from "react-icons/ai";
import { convertTimeFormat } from "../../../utils/convertTime";

const getCurrentTime = () => {
  var currentDate = new Date();

  // Get the current time in hours, minutes
  var hours = currentDate.getHours().toString().padStart(2, "0");
  var minutes = currentDate.getMinutes().toString().padStart(2, "0");

  // Format the time as a string in the "hh:mm:ss" format
  var timeString = `${hours}:${minutes}`;

  return timeString; // Output the current time string
};

function ServiceTime({ serviceTime, setServiceTime }) {
  const [startTime, setStartTime] = useState(getCurrentTime());
  const [endTime, setEndTime] = useState(getCurrentTime());

  const onStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const onEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const addTime = (e) => {
    e.preventDefault();
    const _data = cloneDeep(serviceTime);

    _data.push({ start: startTime, end: endTime });

    setServiceTime(_data);
    setStartTime(getCurrentTime());
    setEndTime(getCurrentTime());
  };

  const removeTime = (e, startTime, endTime) => {
    e.preventDefault();

    let _data = cloneDeep(serviceTime);
    _data = serviceTime.filter(
      ({ start, end }) => !(start === startTime && end === endTime),
    );

    setServiceTime(_data);
  };

  return (
    <>
      <p className="mb-1 mt-4 font-bold">সার্ভিস প্রদানের সময়</p>

      <div className="flex flex-col gap-2">
        {serviceTime.map(({ start, end }, index) => (
          <div
            key={index}
            className="bg-light flex items-center justify-between rounded-lg px-3 py-2"
          >
            <span>{`${convertTimeFormat(start)} থেকে ${convertTimeFormat(
              end,
            )} পর্যন্ত`}</span>
            <button
              onClick={(e) => removeTime(e, start, end)}
              className="rounded-lg bg-neutral p-3"
            >
              {<AiFillDelete />}
            </button>
          </div>
        ))}
      </div>

      <div className="my-6 flex flex-col gap-2 rounded-lg bg-accent p-3">
        <label className="bg-light flex items-center justify-between rounded-lg p-2">
          শুরুর সময়
          <input
            className="rounded-lg border border-accent bg-inherit p-1"
            type="time"
            value={startTime}
            onChange={onStartTimeChange}
          />
        </label>
        <label className="bg-light flex items-center justify-between rounded-lg p-2">
          শেষের সময়
          <input
            className="rounded-lg border border-accent bg-inherit p-1"
            type="time"
            value={endTime}
            onChange={onEndTimeChange}
          />
        </label>

        <button
          onClick={addTime}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-400 px-2 py-2 text-xl text-white"
        >
          <AiFillPlusSquare />
          <span>যোগ করুন</span>
        </button>
      </div>
    </>
  );
}

export { ServiceTime };
