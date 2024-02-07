import {useState, useEffect} from 'react';
import getTimeString from '../utility/getTimeString';

export default function useTimeString(update, reset){
    const [startTime, setStartTime] = useState(Date.now());
    const [timeString, setTimeString] = useState('00:00:00');

    useEffect(() => {
        setStartTime(Date.now());
    }, [reset])

    useEffect(() => {
        let msElapsed = Date.now() - startTime;
        let string = getTimeString(msElapsed);
        setTimeString(string);
    }, [update])

    return [timeString, setTimeString];
}