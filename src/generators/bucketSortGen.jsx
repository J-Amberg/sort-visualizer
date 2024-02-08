export default function* bucketSort(array, bucketSize) {
    let numBuckets = Math.ceil(array.length/bucketSize);
    let buckets = Array.from({length: numBuckets}, () => 0);

    //bucket sort
    for(let i = 0; i < array.length; i++){
        array[i].active = true;
        if(i % bucketSize === 0){
            array[i].selected = true;
        }
        let bucket = Math.floor((array[i].val - 1) / bucketSize);
        let index = (bucket * bucketSize) + buckets[bucket];
        //console.log('index: ' + index);
        //console.log('bucket: ' + bucket);
        if(i % (bucket * bucketSize) < buckets[bucket]){
            yield array;
            array[i].active = false;
            continue;
        }
        if(i === index){
            ++buckets[bucket];
            yield array;
            array[i].active = false;
            continue;
        }
        array[index].active = true;
        [array[i], array[index]] = [array[index], array[i]];
        if(array[i].solved){
            array[i].solved = false;
            array[index].solved = true;
        }
        yield array;
        array[index].active = false;
        array[i].active = false;
        i--;
        ++buckets[bucket];
    }

    //bubble sort on subarrays
    for(let i = 0; i < numBuckets; i++){
        for(let x = buckets[i] - 1; x > 0; x--){
            for(let j = 0; j < x; j++){
                let index = (i * bucketSize) + j;
                array[index].active = true;
                if(array[index].val > array[index + 1].val){
                    [array[index], array[index + 1]] = [array[index + 1], array[index]];
                    array[index + 1].active = true;
                }
                yield array;
                array[index].active = false;
                array[index + 1].active = false;
                array[index].selected = false;
                array[index + 1].selected = false;
            }
        }
        
    }

    for(let i = 0; i < array.length; i++){
        array[i].solved = true;
        yield array;
    }  
}