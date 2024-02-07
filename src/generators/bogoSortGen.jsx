import shuffleArray from '../utility/shuffleArray';

function isSorted(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i].val < array[i - 1].val) {
            return false;
        }
    }
    return true;
}

export default function* bogoSort(array) {
    while(!isSorted(array)){
        yield shuffleArray(array);
    }

    for(let i = 0; i < array.length; i++){
        array[i].solved = true;
        yield array;
    }
}