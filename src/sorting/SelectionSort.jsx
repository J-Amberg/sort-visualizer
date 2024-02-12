import Sort from "../components/Sort";
import selectionSortGen from '../generators/selectionSortGen';

export default function SelectionSort(){
    document.title += " | Selection Sort";
    return <Sort
        numElements={120}
        min={10}
        max={1000}
        sortGen={selectionSortGen}
        title={'selection sort'}
    />
}