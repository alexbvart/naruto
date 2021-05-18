import React from 'react';
const useDurationTrack = (duration) => {

    const formatWithZeroForwardIfLessThan10 = (value)=>{
        return value < 10 ? `0${value}` : `${value}`;
    }
    const seconds  = (Math.round(duration % 60)).toString();
    const minutes  = (Math.floor(duration / 60 ) % 60).toString();
    const hours    = (Math.floor(duration / 3600)).toString();


    const hoursString = formatWithZeroForwardIfLessThan10(hours);
    const secondsString = formatWithZeroForwardIfLessThan10(seconds);
    const minutesString = formatWithZeroForwardIfLessThan10(minutes);

    return (hoursString>0)? `${hoursString} : ${minutesString} : ${secondsString}`: `${minutesString} : ${secondsString}`;
}
export default useDurationTrack;