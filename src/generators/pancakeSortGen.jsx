export default function* pancakeSort(array) {
    //reverses the array from idx A to idx B 
    const flip = (idxA, idxB) => {
        for(let i = 0; i < Math.ceil((idxB-idxA) / 2); i++){
            [array[idxA], array[idxB]] = [array[idxB], array[idxA]];
            idxB--;
            idxA++;
        }
    }

    for(let i = array.length - 1; i >= 0; i--){
        let max = i;
        for(let j = 0; j <= i; j++){
            array[j].active = true;
            if(array[j].val > array[max].val){
                max = j;
            }
            yield array;
            array[j].active = false;
        }
        flip(0, max);
        yield array;
        flip(0, i);
        yield array;
    }
    for(let i = 0; i < array.length; i++){
        array[i].solved = true;
        yield array;
    }
}