const array = [1, 1, 2, 3, 5, 8, 13]

function unshift(arr, number) {
    const mergerd = [number, ...arr]

    console.log(mergerd);

    return arr.lenght
}


/* const newLength =  array.unshift(42) */
const newLength = unshift(array, 42)

console.log(array);
console.log(newLength);

