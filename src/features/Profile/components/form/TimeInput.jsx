/* eslint-disable react/prop-types */

import { convertTimeFormat } from "../../../../utils/convertTime";
import {AiFillDelete,AiFillPlusSquare} from 'react-icons/ai'
import { useState } from "react";

const getCurrentTime = () => {
    var currentDate = new Date();

    // Get the current time in hours, minutes
    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');

    // Format the time as a string in the "hh:mm:ss" format
    var timeString = `${hours}:${minutes}`;

    return timeString // Output the current time string
}

function TimeInput({ label, 
    index,
    inputFields,
    setInputFields,
    data =[],
     }) {

        const [startTime, setStartTime] = useState(getCurrentTime());
        const [endTime, setEndTime] = useState(getCurrentTime());

        const onStartTimeChange = (e) => {
            setStartTime(e.target.value)
        }
        
        const onEndTimeChange = (e) => {
            setEndTime(e.target.value)
        }

        const addTime = (e) => {
            e.preventDefault()
            const clonedInputFields = [...inputFields]

            clonedInputFields[index].data.push({start: startTime, end: endTime});

            setInputFields(clonedInputFields)
            setStartTime(getCurrentTime())
            setEndTime(getCurrentTime())
        }
        
        const removeTime = (e, startTime, endTime) => {
            e.preventDefault()

            const clonedInputFields = [...inputFields]
            const newData = data.filter(({start, end}) => !(start === startTime && end === endTime) )

            clonedInputFields[index].data = newData;

            setInputFields(clonedInputFields)
        }
        
    return (
      <>
        <p className='font-bold mt-4 mb-1'>{label}</p>
        
        <div className="flex flex-col gap-2">
            {data.map(({start, end}, index)=> <div key={index} className='px-3 py-2 bg-light rounded-lg flex justify-between items-center'>
                <span>{`${convertTimeFormat(start)} থেকে ${convertTimeFormat(end)} পর্যন্ত`}</span>
                <button onClick={(e)=> removeTime(e, start, end)} className="p-3 rounded-lg bg-neutral">{<AiFillDelete />}</button>
            </div>)}
        </div>

        <div className="flex my-6 justify-between items-center">
            <label className="bg-light p-2 rounded-lg flex gap-1 items-center">
                শুরু
                <input className="bg-inherit rounded-lg border border-accent p-1" type="time" value={startTime} onChange={onStartTimeChange} />
            </label>
            <label className="bg-light p-2 rounded-lg flex gap-1 items-center">
                শেষ
                <input className="bg-inherit rounded-lg border border-accent p-1" type="time" value={endTime} onChange={onEndTimeChange} />
            </label>
            
            <button onClick={addTime} className="bg-blue-400 px-2 py-4 text-white rounded-md" ><AiFillPlusSquare /></button>
        </div>
        
      </>
    );
  }
  
  export default TimeInput;
  