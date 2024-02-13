import Sort from "../../components/Sort";
import bubbleSortGen from '../../generators/bubbleSortGen';

export default function BubbleSort(){
    document.title += " | Bubble Sort";
    return <Sort
        numElements={120}
        min={10}
        max={1000}
        sortGen={bubbleSortGen}
        title={'bubble sort'}
    />
}