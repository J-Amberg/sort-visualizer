import Sort from "../components/Sort";
import bogoSortGen from '../generators/bogoSortGen';

export default function BogoSort(){
    return <Sort
        numElements={10}
        min={4}
        max={20}
        sortGen={bogoSortGen}
        title={'bogo sort'}
    />
}