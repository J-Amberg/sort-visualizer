import Sort from "../components/Sort";
import oddEvenSortGen from '../generators/oddEvenSortGen';

export default function OddEvenSort(){
    return <Sort
        numElements={120}
        min={10}
        max={1000}
        sortGen={oddEvenSortGen}
        title={'odd even sort'}
    />
}