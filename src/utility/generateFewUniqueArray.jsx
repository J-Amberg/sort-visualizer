export default function generateFewUniqueArray(length) {
    let array = [];

    for (let i = 1; i <= length; i++) {
        array.push(
            {
                val: Math.max(Math.floor((i % 5 * length)/4), 10),
                active: false
            }
        );
    }
    return array;
}
