import Sort from "../../components/Sort";
import bozoSortGen from '../../generators/bozoSortGen';

export default function BogoSort(){
    document.title += " | BOGO Sort";

    return <Sort
        numElements={6}
        min={4}
        max={20}
        sortGen={bozoSortGen}
        title={'bozo sort'}
    />
}