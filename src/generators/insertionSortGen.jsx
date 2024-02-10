export default function* insertionSort(array){
    const swap = (a, b) => [array[a], array[b]] = [array[b], array[a]];
    let max = 0;

    for(let i = 1; i < array.length; i++){
        array[i].active = true;
        if(i === 0){
            array[i].active = false;
            continue;
        }
        if(array[i].val < array[i - 1].val){
            array[i - 1].active = false;
            swap(i, i - 1);
            yield array;
            i -= 2;
        }
        else{
            max++;
            array[i].active = false;
            i = max;
            yield array;
        }
    }

    for(let i = 0; i < array.length; i++){
        array[i].solved = true;
        yield array;
    }
}