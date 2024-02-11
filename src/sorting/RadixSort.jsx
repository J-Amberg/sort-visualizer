import { useState, useEffect } from 'react';
import radixSortGen from '../generators/radixSortGen';
import SortingTable from "../components/SortingTable";
import useTimeString from '../custom_hooks/useTimeString';
import generateArray from "../utility/generateArray";
import shuffleArray from '../utility/shuffleArray';

export default function RadixSort() {
    const [numDataPoints, setNumDataPoints] = useState(1000);
    const [elements, setElements] = useState(shuffleArray(generateArray(numDataPoints)));
    const [generator, setGenerator] = useState(radixSortGen(elements));
    const [reset, setReset] = useState(false);
    const [timeString] = useTimeString(elements, reset);

    useEffect(() => {
        setGenerator(radixSortGen(shuffleArray(generateArray(numDataPoints))));
        setReset(r => !r);
    }, [numDataPoints])

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

    return <div style={{ margin: 'auto', width: '100%' }}>
        <div style={{ display: 'flex', marginTop: '15px', justifyContent: 'flex-end', gap: '15px' }}>
            <div className='heading' style={{ marginRight: 'auto' }}>
                Radix Sort
            </div>
            <div style={{ marginTop: '10px' }}>
                <div className='flexCenter'>
                    <div className='body' style={{ marginRight: '10px' }}>{numDataPoints}</div>
                    <div className="slidecontainer">
                        <input type="range" min="10" max="2000" value={numDataPoints} className="slider" id="myRange" onChange={(e) => setNumDataPoints(+e.target.value)} />
                    </div>
                </div>
                <div className='body' style={{ textAlign: 'right' }}>
                    {timeString}
                </div>
            </div>
        </div>
        <SortingTable elements={elements} />
    </div>
}