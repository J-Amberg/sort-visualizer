import {useState, useEffect} from 'react';
import selectionSortGen from "../generators/selectionSortGen";
import SortingTable from "../components/SortingTable";
import BlackCard from '../components/BlackCard';
import generateArray  from "../utility/generateArray";
import shuffleArray from '../utility/shuffleArray';

export default function SelectionSort() {
    const [numDataPoints, setNumDataPoints] = useState(100);
    const [generator, setGenerator] = useState(null);
    const [elements, setElements] = useState(shuffleArray(generateArray(numDataPoints)));
    

    useEffect(() => {
        setGenerator(selectionSortGen(elements));
    }, [])

    useEffect(() => {
        if(!generator){

        }

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
    }, [generator])
    
    return <div>
        <SortingTable elements={elements} />
        <div style={{display:'flex', justifyContent: 'flex-end', marginTop:'15px' }}>
                <BlackCard content={'SELECTION SORT'}/>
                {/*
                <IncreaserDecreaser 
                    increaseCallback={() => increaseDataPoints()}
                    decreaseCallback={() => decreaseDataPoints()}
                    value={numDataPoints}
                />
                <TimeDisplay timeString={timeString}/>*/}
            </div>
    </div>
}