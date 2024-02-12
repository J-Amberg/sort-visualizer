import Sort from "../components/Sort";
import bucketSortGen from '../generators/bucketSortGen';

export default function BucketSort(){
    return <Sort
        numElements={500}
        min={10}
        max={2000}
        sortGen={bucketSortGen}
        title={'bucket sort'}
    />
}