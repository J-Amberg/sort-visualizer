export default function* quickSort(array) {
    let pivot = 0;
    let rightPointer = array.length - 1;
    let leftPointer = 1;
    let indexesToPartition = [[pivot, rightPointer]];
    let isSorted = false;

    let x = 0;
    const swap = ((a, b) => { [array[a], array[b]] = [array[b], array[a]]; });
    while (indexesToPartition.length > 0) {
        rightPointer = indexesToPartition[0][1];
        pivot = indexesToPartition[0][0];
        leftPointer = pivot + 1;
        
        if(rightPointer - pivot === 0){
            array[rightPointer].active = false;
            indexesToPartition.shift();
            continue;
        }

        if(rightPointer - pivot === 1) {
            if(array[pivot].val > array[rightPointer].val){
                swap(pivot, rightPointer);
                array[pivot].active = false;
                array[rightPointer].active = false;
            }
            indexesToPartition.shift();
            continue;
        }
        array[leftPointer].active = true;

        let isPartitioning = true;

        while (isPartitioning) {
            //right pointer moves left until it finds an element smaller than the pivot or meets the left pointer
            if(array[rightPointer].val >= array[pivot].val){
                while (rightPointer > pivot) {
                    array[rightPointer].active = true;
                    yield array;
                    if(array[rightPointer].val < array[pivot].val){
                        break;
                    }
                    array[rightPointer].active = false;
                    rightPointer--;
                }
            }

            if (rightPointer === pivot) {
                array[pivot].active = false;
                let arr = [pivot + 1, indexesToPartition[0][1]];
                indexesToPartition.push(arr);
                indexesToPartition.shift();
                isPartitioning = false;
                break;
            }

            //left pointer moves right until it finds an element larger than the pivot or meets the right pointer
            while (array[leftPointer].val < array[pivot].val) {
                if (leftPointer === rightPointer) {
                    swap(pivot, leftPointer);
                    yield array;
                    array[pivot].active = false;
                    let arr1 = [pivot, leftPointer - 1];
                    let arr2 =  [leftPointer === indexesToPartition[0][1] ? leftPointer : leftPointer + 1, indexesToPartition[0][1]];
                    indexesToPartition.shift();
                    indexesToPartition.push(arr1);
                    indexesToPartition.push(arr2);
                    isPartitioning = false;
                    break;
                }
                array[leftPointer].active = true;
                yield array;
                array[leftPointer].active = false;
                leftPointer++;
            }

            if (array[rightPointer].val <= array[leftPointer].val) {
                swap(rightPointer, leftPointer);
                array[rightPointer].active = true;
                yield array;
                array[rightPointer].active = false;
            }
        }
    }
    
    for(let i = 0; i < array.length; i++){
        array[i].solved = true;
        yield array;
    }

}