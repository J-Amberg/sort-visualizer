import Sort from "../components/Sort";
import insertionSortGen from '../generators/insertionSortGen';

export default function InsertionSort(){
    return <Sort
        numElements={120}
        min={10}
        max={1000}
        sortGen={insertionSortGen}
        title={'insertion sort'}
    />
}