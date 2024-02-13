import Sort from "../../components/Sort";
import shakerSortGen from '../../generators/shakerSortGen';

export default function ShakerSort(){
    document.title += " | Shaker Sort";
    return <Sort
        numElements={120}
        min={10}
        max={1000}
        sortGen={shakerSortGen}
        title={'shaker sort'}
    />
}