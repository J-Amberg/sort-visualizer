export default function* oddEvenSortGen(array){
    let isSorted = false;

    const swap = (a, b) => {[array[a], array[b]] = [array[b], array[a]];}

    while(!isSorted){
        isSorted = true;
        
        for(let i = 1; i < array.length - 1; i+= 2){
            array[i].active = true;
            if(array[i].val > array[i + 1].val){
                array[i + 1].active = true;
                swap(i, i + 1);
                yield array;
                array[i + 1].active = false;
                isSorted = false;
            }
            yield array;
            array[i].active = false;
        }

        for(let i = 0; i < array.length - 1; i+= 2){
            array[i].active = true;
            if(array[i].val > array[i + 1].val){
                array[i + 1].active = true;
                swap(i, i + 1);
                yield array;
                array[i + 1].active = false;
                isSorted = false;
            }
            yield array;
            array[i].active = false;
        }
    }

    for(let i = 0; i < array.length; i++){
        array[i].solved = true;
        yield array;
    }
}