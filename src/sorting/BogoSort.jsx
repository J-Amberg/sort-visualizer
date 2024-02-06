import { useState, useEffect } from 'react';
import SortingTable from '../components/SortingTable';
import IncreaserDecreaser from "../components/IncreaserDecreaser";
import TimeDisplay from "../components/TimeDisplay";
import BlackCard from '../components/BlackCard';
import shuffleArray from '../utility/shuffleArray';
import getTimeString from '../utility/getTimeString';
import pauseComp from '../utility/pauseComp';
import getRandomArray from '../utility/getRandomArray';

function isSorted(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            return false;
        }
    }
    return true;
}

export default function BogoSort() {
    const [numDataPoints, setNumDataPoints] = useState(10);
    const [startTime, setStartTime] = useState(Date.now());
    const [msElapsed, setMSElapsed] = useState(0);
    const [arrayToSort, setArrayToSort] = useState(GetRandomArray(numDataPoints));
    const [timeString, setTimeString] = useState('00:00:00');
    const [numShuffles, setNumShuffles] = useState(0);
    const [doneSorting, setDoneSorting] = useState(false);

    useEffect(() => {
        setArrayToSort(GetRandomArray(numDataPoints));
        setMSElapsed(0);
        setStartTime(Date.now());
        setTimeString('00:00:00');
        setNumShuffles(0);
        setSortedDataPoints([]);
        setDoneSorting(false);
    }, [numDataPoints])

    useEffect(() => {
        if (isSorted(arrayToSort)) {
            setDoneSorting(true);
            return;
        }
        else {
            setArrayToSort(prevArray => shuffleArray([...prevArray]));
            setNumShuffles(n => n + 1);
        }
        if (trackTime === 50) {
            trackTime = 0;
            setMSElapsed(Date.now() - startTime);
        }
        trackTime++;
    }, [arrayToSort])

    useEffect(() => {
        let string = getTimeString(msElapsed);
        setTimeString(string);
    }, [msElapsed])

    const increaseDataPoints = () => {
        setNumDataPoints(num => num + 1);
    }
    const decreaseDataPoints = () => {
        setNumDataPoints(num => num - 1);
    }

    return (
        <div>
            <SortingTable elements={arrayToSort} heightMultiplier={5} doneSortingIndexes={sortedDataPoints}/>
            <div style={{display:'flex', justifyContent: 'flex-end', marginTop:'15px' }}>
                <BlackCard content={'BOGO SORT'}/>
                <div className='card flexCenter smallHeading' style={{width:'180px', marginRight:'15px'}}>
                    {numShuffles}
                </div>
                <IncreaserDecreaser 
                    increaseCallback={() => increaseDataPoints()}
                    decreaseCallback={() => decreaseDataPoints()}
                    value={numDataPoints}
                />
                <TimeDisplay timeString={timeString}/>
            </div>
        </div>
    )
}