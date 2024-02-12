import Sort from "../components/Sort";
import pancakeSortGen from '../generators/pancakeSortGen';

export default function PancakeSort(){
    document.title += " | Pancake Sort";
    return <Sort
        numElements={120}
        min={10}
        max={1000}
        sortGen={pancakeSortGen}
        title={'pancake sort'}
    />
}