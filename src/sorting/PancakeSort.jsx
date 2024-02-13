import Sort from "../components/Sort";
import pancakeSortGen from '../generators/pancakeSortGen';

export default function PancakeSort(){
    document.title += " | Pancake Sort";
    return <Sort
        numElements={1000}
        min={10}
        max={2000}
        sortGen={pancakeSortGen}
        title={'pancake sort'}
    />
}