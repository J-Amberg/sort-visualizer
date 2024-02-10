import {useState, useEffect} from 'react';
import insertionSortGen from '../generators/insertionSortGen';
import SortingTable from "../components/SortingTable";
import BlackCard from '../components/BlackCard';
import TimeDisplay from '../components/TimeDisplay';
import IncreaserDecreaser from '../components/IncreaserDecreaser';
import useTimeString from '../custom_hooks/useTimeString';
import generateArray  from "../utility/generateArray";
import shuffleArray from '../utility/shuffleArray';

export default function InsertionSort() {
    const [numDataPoints, setNumDataPoints] = useState(150);
    const [elements, setElements] = useState(shuffleArray(generateArray(numDataPoints)));
    const [generator, setGenerator] = useState(insertionSortGen(elements));
    const [timeString] = useTimeString(elements, numDataPoints);

    useEffect(() => {
        setGenerator(insertionSortGen(shuffleArray(generateArray(numDataPoints))));
    }, [numDataPoints])

    useEffect(() => {
        const interval = setInterval(() => {
            const result = generator.next(elements);
            if(!result.done){
                let copy = JSON.parse(JSON.stringify(result.value));
                setElements(copy);
            }
            else{
                clearInterval(interval);
            }
        }, [0])

        return () => clearInterval(interval);
    }, [generator])
    
    return <div>
        <SortingTable elements={elements} />
        <div style={{display:'flex', justifyContent: 'flex-end', marginTop: '15px', gap: '15px'}}>
                <BlackCard content={'INSERTION SORT'}/>
                <IncreaserDecreaser
                     style={{marginRight: '15px'}}
                    callback={setNumDataPoints}
                    value={numDataPoints}
                    increment={10}
                    max={500}
                    min={20}
                />
                <TimeDisplay timeString={timeString}/>
        </div>
    </div>
}