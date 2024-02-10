export default function* shakerSortGen(array){
    let leftPointer = 0;
    let rightPointer = array.length - 1;

    const swap = (a, b) => {[array[a], array[b]] = [array[b], array[a]];}

    let i = 0;
    let direction = 'right';

    while(leftPointer !== rightPointer){
        if(i === rightPointer && direction === 'right'){
            direction = 'left';
            rightPointer--;
        }
        else if(i === leftPointer && direction === 'left'){
            direction = 'right'
            leftPointer++;
        }
        if(direction === 'right' && array[i].val > array[i + 1].val){
            array[i + 1].active = true;
            swap(i, i + 1);
            yield array;
            array[i].active = false;
            array[i + 1].active = false;
        }
        else if(direction === 'left' && array[i].val < array[i - 1].val){
            array[i - 1].active = true;
            swap(i, i - 1);
            yield array;
            array[i].active = false;
            array[i - 1].active = false;
        }
        if(direction === 'left'){
            i--;
        }
        else{
            i++;
        }
    }

    for(let i = 0; i < array.length; i++){
        array[i].solved = true;
        yield array;
    }
}