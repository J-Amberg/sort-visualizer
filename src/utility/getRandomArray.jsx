//returns an array of random numbers of length, from range 0 to max
export default function getRandomArray(length, max) {
    let array = [];
    let numberToAdd;
    while (array.length < length) {
        numberToAdd = Math.floor(Math.random() * max) + 1;
        if (array.indexOf(numberToAdd) === -1) {
            array.push(numberToAdd);
        }
    }
    return array;
}