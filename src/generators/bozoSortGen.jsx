function isSorted(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i].val < array[i - 1].val) {
            return false;
        }
    }
    return true;
}

export default function* bozoSort(array){
    while(!isSorted(array)){
        const randomInt1 = Math.floor(Math.random() * array.length);
        let randomInt2 = Math.floor(Math.random() * array.length);
        while(randomInt1 === randomInt2){
            randomInt2 = Math.floor(Math.random() * array.length);
        }
        [array[randomInt1], array[randomInt2]] = [array[randomInt2], array[randomInt1]];
        yield array;
    }
    for(let i = 0; i < array.length; i++){
        array[i].solved = true;
        yield array;
    }
}