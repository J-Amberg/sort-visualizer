export default function* selectionSort(array) {
    let i = 0;
    while(i < array.length){
        array[i].active = true;
        let j = i;
        let min = i;

        while(j < array.length){
            array[j].active = true;
            if(array[j].val < array[min].val){
                array[min].active = false;
                min = j;
                array[min].active = true;
            }
            yield array;
            if(j !== min){
                array[j].active = false;
            }
            j++;
        }
        [array[i], array[min]] = [array[min], array[i]];
        yield array;
        array[i].active = false;
        i++;
    }
    for(let i = 0; i < array.length; i++){
        array[i].solved = true;
        yield array;
    }
}