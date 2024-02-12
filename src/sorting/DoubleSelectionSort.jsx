import Sort from "../components/Sort";
import doubleSelectionSortGen from '../generators/doubleSelectionSortGen';

export default function DoubleSelectionSort(){
    document.title += " | 2Selection Sort";
    return <Sort
        numElements={120}
        min={10}
        max={1000}
        sortGen={doubleSelectionSortGen}
        title={'2selection sort'}
    />
}