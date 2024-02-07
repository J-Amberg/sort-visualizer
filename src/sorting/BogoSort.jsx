import { useState, useEffect } from 'react';
import bogoSortGen from '../generators/bogoSortGen';
import SortingTable from '../components/SortingTable';
import IncreaserDecreaser from "../components/IncreaserDecreaser";
import TimeDisplay from "../components/TimeDisplay";
import BlackCard from '../components/BlackCard';
import useTimeString from '../custom_hooks/useTimeString';
import shuffleArray from '../utility/shuffleArray';
import getTimeString from '../utility/getTimeString';
import generateArray from '../utility/generateArray';

export default function BogoSort() {
    const [numDataPoints, setNumDataPoints] = useState(6);
    const [elements, setElements] = useState(shuffleArray(generateArray(numDataPoints)));
    const [numShuffles, setNumShuffles] = useState(0);
    const [timeString] = useTimeString(numShuffles, numDataPoints);
    const [generator, setGenerator] = useState(bogoSortGen(elements));

    useEffect(() => {
        setNumShuffles(0);
        setGenerator(bogoSortGen(shuffleArray(generateArray(numDataPoints))));
    }, [numDataPoints])

    useEffect(() => {
        if(!generator){
            setGenerator(bogoSortGen(elements));
            return;
        }
        const interval = setInterval(() => {
            const result = generator.next(elements);
            if(!result.done){
                let copy = JSON.parse(JSON.stringify(result.value));
                setElements(copy);
                setNumShuffles(ns => ns + 1);
            }
            else{
                clearInterval(interval);
            }
        }, [0])
        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    }, [generator])

    return (
        <div>
            <SortingTable elements={elements} heightMultiplier={5}/>
            <div style={{display:'flex', justifyContent: 'flex-end', marginTop:'15px' }}>
                <BlackCard content={'BOGO SORT'}/>
                <div className='card flexCenter smallHeading' style={{width:'180px', marginRight:'15px'}}>
                    {numShuffles}
                </div>
                <IncreaserDecreaser 
                    callback={setNumDataPoints}
                    value={numDataPoints}
                    increment={1}
                    max={20}
                    min={5}
                />
                <TimeDisplay timeString={timeString}/>
            </div>
        </div>
    )
}