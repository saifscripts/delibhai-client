import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import cloneDeep from 'lodash/cloneDeep';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { AiFillPlusSquare } from 'react-icons/ai';
import { MdDelete, MdEdit } from 'react-icons/md';
import { toast } from 'sonner';
import { convertTimeFormat } from '../../../../utils/convertTime';
import {
  hasMinimumTimeGap,
  is24Hour,
  isSlotOverlapping,
  isValidTimeSlot,
  remove24HourSlot,
} from '../../../../utils/timeHelpers';

const getCurrentTime = () => {
  const currentDate = new Date();

  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
};

export default function ServiceTimes({
  is24HourServiceTime,
  setIs24HourServiceTime,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { watch, setValue } = useFormContext();

  const serviceTimeSlots = Object.values(watch('serviceTimeSlots')) || [];

  const [newTimeSlot, setNewTimeSlot] = useState({
    start: getCurrentTime(),
    end: getCurrentTime(),
  });

  useEffect(() => {
    is24Hour(serviceTimeSlots) && setIs24HourServiceTime(true);
  }, [serviceTimeSlots]);

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
      setValue('serviceTimeSlots', remove24HourSlot(serviceTimeSlots));
      setIs24HourServiceTime(false);
    } else {
      setIs24HourServiceTime(true);
    }
  };

  const addTime = (e) => {
    e.preventDefault();

    if (!isValidTimeSlot(newTimeSlot)) {
      return toast.error('সঠিক সময় প্রদান করুন');
    }

    if (!hasMinimumTimeGap(newTimeSlot)) {
      return toast.error('ন্যূনতম ৩০ মিনিট ব্যবধান থাকা বাধ্যতামূলক');
    }

    if (isSlotOverlapping(newTimeSlot, serviceTimeSlots)) {
      return toast.error('উক্ত সময় ইতিমধ্যে প্রদান করা হয়েছে');
    }

    const _serviceTimes = cloneDeep(serviceTimeSlots);
    _serviceTimes.push(newTimeSlot);
    setValue('serviceTimeSlots', _serviceTimes);
    setIsOpen(false);
  };

  const removeTime = (e, startTime, endTime) => {
    e.preventDefault();

    let _serviceTimes = cloneDeep(serviceTimeSlots);
    _serviceTimes = _serviceTimes.filter(
      ({ start, end }) => !(start === startTime && end === endTime)
    );

    setValue('serviceTimeSlots', _serviceTimes);
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
          />{' '}
          দিনরাত ২৪ ঘণ্টা
        </label>
      </div>

      {!is24HourServiceTime && (
        <>
          <div className="flex flex-col gap-2">
            {serviceTimeSlots?.map(({ start, end }, index) => (
              <div
                key={index}
                className="bg-tone/30 flex items-center justify-between rounded-lg  px-3 py-2 "
              >
                <span>{`${convertTimeFormat(start)} থেকে ${convertTimeFormat(
                  end
                )} পর্যন্ত`}</span>

                <div>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    variant="ghost"
                    size="icon"
                    className="text-blue-400"
                  >
                    {<MdEdit />}
                  </Button>
                  <Button
                    onClick={(e) => removeTime(e, start, end)}
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                  >
                    {<MdDelete />}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button>
                <AiFillPlusSquare />
                <span>যোগ করুন</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <div className="bg-tone/10 my-6 flex flex-col gap-2 rounded-lg p-3">
                <label className="bg-light flex items-center justify-between rounded-lg p-2">
                  শুরুর সময়
                  <input
                    className="rounded-lg border bg-inherit p-1"
                    type="time"
                    value={newTimeSlot.start}
                    onChange={onStartTimeChange}
                  />
                </label>
                <label className="bg-light flex items-center justify-between rounded-lg p-2">
                  শেষের সময়
                  <input
                    className="rounded-lg border bg-inherit p-1"
                    type="time"
                    value={newTimeSlot.end}
                    onChange={onEndTimeChange}
                  />
                </label>

                <Button onClick={addTime}>
                  <AiFillPlusSquare />
                  <span>যোগ করুন</span>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </>
      )}
    </>
  );
}
