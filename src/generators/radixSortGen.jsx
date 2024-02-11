export default function* radixSortGen(array) {

    
    //finds the max amount of characters (length) that an integer is
    const getMax = () => {
        let max = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].val.toString().length > max) {
                max = array[i].val.toString().length;
            }

        }
        return max;
    }
    let max = getMax();

    
    for(let i = 1; i < max + 1; i++){
        let generator = countingSort(array, i);
        let result = generator.next(array, i);
        while (!result.done) {
            yield result.value;
            result = generator.next(array, i);
        }
    }

    for(let i = 0; i < array.length; i++){
        array[i].solved = true;
        yield array;
    }
}

function* countingSort(array, place) {

    const swap =(a, b) => {[array[a], array[b]] = [array[b], array[a]]}
    //finds the largest value in the array
    let getMax = () => {
        let max = 0;
        for (let i = 0; i < array.length; i++) {
            let val = array[i].val.toString()[array[i].val.toString().length - place];
            if (val > max) {
                max = val;
            }
        }
        return parseInt(max);
    }
    let max = getMax();

    let counts = Array.from({ length: max + 1 }, () => 0);

    let nonNumericCount = 0;
    const getRawCounts = () => {
        for (let i = 0; i < array.length; i++) {
            let val = parseInt(array[i].val.toString()[array[i].val.toString().length - place]);
            if(isNaN(val)){
                counts[0] += 1;
            }
            else{
                counts[val] += 1;
            }
        }
    }
    getRawCounts();

    const getFullCounts = () => {
        let cumulative = 0;
        for (let i = 0; i < counts.length; i++) {
            cumulative += counts[i];
            counts[i] = cumulative;
        }
    }
    getFullCounts();

    let original = JSON.parse(JSON.stringify(array));
    for (let i = array.length - 1; i >= 0; i--) {
        let idx = parseInt(original[i].val.toString()[original[i].val.toString().length - place]);
        let outputIdx = counts[idx] - 1;
        if(isNaN(outputIdx)){
            outputIdx = counts[0] - 1;
            array[outputIdx] = original[i];
            --counts[0];
        }
        else{
            --counts[idx];
            array[outputIdx] = original[i];
        }
        array[outputIdx].active = true;
        yield array;
        array[outputIdx].active = false;
    }
}