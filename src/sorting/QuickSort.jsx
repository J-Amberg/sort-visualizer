import Sort from "../components/Sort";
import quickSortGen from '../generators/quickSortGen';

export default function QuickSort(){
    return <Sort
        numElements={1000}
        min={10}
        max={2000}
        sortGen={quickSortGen}
        title={'quick sort'}
    />
}