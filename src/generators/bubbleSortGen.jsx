export default function* bubbleSort(array){

    for(let i = array.length - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            array[j].active = true;
            if(array[j].val > array[j + 1].val){
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
            yield array;
            array[j].active = false;
            array[j + 1].active = false;
        }
    }
    
    //sorted
    for(let i = 0; i < array.length; i++){
        array[i].solved = true;
        yield array;
    }
}