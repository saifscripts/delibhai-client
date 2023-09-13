/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function Timer({time,  timerRunning, setTimerRunning}) {
    const [remainingTime, setRemainingTime] = useState(time);

    useEffect(() => {
        let timer;

        if ( remainingTime > 0) {
            timer = setInterval(() => {
                setRemainingTime(remainingTime - 1000);
            }, 1000);
        } else {
            setTimerRunning(false)
        }

        return () => clearInterval(timer);
    }, [ remainingTime, setTimerRunning]);

    useEffect(() => {
        if(timerRunning) {
            setRemainingTime(time)
        }
    }, [timerRunning, time])

    const minutes = Math.floor(remainingTime / 60000).toFixed(0).padStart(2, '0');
    const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');

    return (
        <div className="text-primary mx-auto my-5 w-fit">
            {minutes}:{seconds}
        </div>
    )
}

export {Timer}