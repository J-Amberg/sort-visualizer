import { useState, useEffect } from 'react';
import SortingTable from '../components/SortingTable';
import useTimeString from '../custom_hooks/useTimeString';
import shuffleArray from '../utility/shuffleArray';
import generateArray from '../utility/generateArray';

export default function Sort({sortGen, title ='add title', numElements = 100, min=10, max=100}) {
    const [numDataPoints, setNumDataPoints] = useState(numElements);
    const [elements, setElements] = useState(shuffleArray(generateArray(numDataPoints)));
    const [timeString] = useTimeString(elements, numDataPoints);
    const [generator, setGenerator] = useState(sortGen(elements));

    useEffect(() => {
        setGenerator(sortGen(shuffleArray(generateArray(numDataPoints))));
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
        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    }, [generator])

    return <div style={{ margin: 'auto', width: '100%' }}>
        <div style={{ display: 'flex', marginTop: '15px', justifyContent: 'flex-end', gap: '15px' }}>
            <div className='heading' style={{ marginRight: 'auto' }}>
                {title}
            </div>
            <div style={{ marginTop: '10px' }}>
                <div className='flexCenter'>
                    <div className='body' style={{ marginRight: '10px' }}>{numDataPoints}</div>
                    <div className="slidecontainer">
                        <input type="range" min={min} max={max} value={numDataPoints} className="slider" id="myRange" onChange={(e) => setNumDataPoints(+e.target.value)} />
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