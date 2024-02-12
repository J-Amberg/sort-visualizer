import Sort from "../components/Sort";
import radixSortGen from '../generators/radixSortGen';

export default function RadixSort(){
    return <Sort
        numElements={1000}
        min={10}
        max={2000}
        sortGen={radixSortGen}
        title={'radix sort'}
    />
}