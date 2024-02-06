export default function generateArray(length) {
    let array = [];
    for (let i = 1; i <= length; i++) {
        array.push(
            {
                val: i,
                active: false
            }
        );
    }
    return array;
}
