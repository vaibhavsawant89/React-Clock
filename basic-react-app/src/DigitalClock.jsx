import React,{useState, useEffect} from "react";

function DigitalCLock(){

    const[time,seTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            seTime(new Date())
        },1000)
        
        return() => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime(){

        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridem = hours >= 12 ? "PM" : "AM"

        return(
            `${padZero(hours)}: ${padZero(minutes)}: ${padZero(seconds)} ${meridem}`
        )
    }

    function padZero(number){
        return(number < 10 ? "0" : "") +number;
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default DigitalCLock