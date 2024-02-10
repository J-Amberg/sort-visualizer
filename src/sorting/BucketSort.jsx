import { useState, useEffect } from 'react';
import bucketSortGen from '../generators/bucketSortGen';
import SortingTable from "../components/SortingTable";
import BlackCard from '../components/BlackCard';
import TimeDisplay from '../components/TimeDisplay';
import IncreaserDecreaser from '../components/IncreaserDecreaser';
import useTimeString from '../custom_hooks/useTimeString';
import generateArray from "../utility/generateArray";
import shuffleArray from '../utility/shuffleArray';

export default function BucketSort() {
    const [numDataPoints, setNumDataPoints] = useState(500);
    const [elements, setElements] = useState(shuffleArray(generateArray(numDataPoints)));
    const [bucketSize, setBucketSize] = useState(20);
    const [generator, setGenerator] = useState(bucketSortGen(elements, bucketSize));
    const [reset, setReset] = useState(false);
    const [timeString] = useTimeString(elements, reset);

    useEffect(() => {
        setGenerator(bucketSortGen(shuffleArray(generateArray(numDataPoints)), bucketSize));
        setReset(r => !r);
    }, [numDataPoints, bucketSize])

    useEffect(() => {
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
            <BlackCard content={'BUCKET SORT'} />
            <IncreaserDecreaser
                callback={setBucketSize}
                value={bucketSize}
                increment={1}
                max={50}
                min={1}
            />
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