export default function* doubleSelectionSort(array) {
    let i = 0;
    let j = array.length - 1;

    while(i !== j){
        let max = i;
        let min = i;
        let y = i;

        while(y <= j){
            array[y].active = true;
            if(array[y].val < array[min].val){
                array[min].active = false;
                min = y;
                array[min].active = true;
            }
            else if(array[y].val > array[max].val){
                array[max].active = false;
                max = y;
                array[max].active = true;
            }
            yield array;
            if(y !== min && y !== max){
                array[y].active = false;
            }
            y++;
        }
        [array[i], array[min]] = [array[min], array[i]];

        if(i === max){
            [array[j], array[min]] = [array[min], array[j]];
        }
        else{
            [array[j], array[max]] = [array[max], array[j]];
        }

        yield array;
        array[i].active = false;
        array[j].active = false;
        i++;
        if(i ===j){
            break;
        }
        j--;
        if(i === j){
            break;
        }
    }

    for(let i = 0; i < array.length; i++){
        array[i].solved = true;
        yield array;
    }
}