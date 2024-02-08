import { useState, useEffect } from 'react';
import quickSortGen from '../generators/quickSortGen';
import SortingTable from "../components/SortingTable";
import BlackCard from '../components/BlackCard';
import TimeDisplay from '../components/TimeDisplay';
import IncreaserDecreaser from '../components/IncreaserDecreaser';
import useTimeString from '../custom_hooks/useTimeString';
import generateArray from "../utility/generateArray";
import shuffleArray from '../utility/shuffleArray';

export default function QuickSort() {
    const [numDataPoints, setNumDataPoints] = useState(500);
    const [elements, setElements] = useState(shuffleArray(generateArray(numDataPoints)));
    const [generator, setGenerator] = useState(quickSortGen(elements));
    const [reset, setReset] = useState(false);
    const [timeString] = useTimeString(elements, reset);

    useEffect(() => {
        setGenerator(quickSortGen(shuffleArray(generateArray(numDataPoints))));
        setReset(r => !r);
    }, [numDataPoints])

    useEffect(() => {
        if (!generator) {

        }

        const interval = setInterval(() => {
            const result = generator.next(elements);
            if (!result.done) {
                let copy = JSON.parse(JSON.stringify(result.value));
                setElements(copy);
            }
            else {
                clearInterval(interval);
            }
        }, [0])

        return () => clearInterval(interval);
    }, [generator])

    return <div>
        <SortingTable elements={elements} />
        <div style={{ display: 'flex', marginTop: '15px', justifyContent: 'flex-end', gap: '15px' }}>
            <BlackCard content={'QUICK SORT'} />
            <IncreaserDecreaser
                callback={setNumDataPoints}
                value={numDataPoints}
                increment={20}
                max={2000}
                min={100}
            />
            <TimeDisplay timeString={timeString} />
        </div>
    </div>
}