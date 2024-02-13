import Sort from "../../components/Sort";
import quickSortGen from '../../generators/quickSortGen';

export default function QuickSort(){
    document.title += " | Quick Sort";
    return <Sort
        numElements={1000}
        min={10}
        max={2000}
        sortGen={quickSortGen}
        title={'quick sort'}
    />
}