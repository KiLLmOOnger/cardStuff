const array = [1, 2, 3, 4, 5, 6, 7]
const next = [8, 9]
const next2 = [10, 11]

function concat(arr, sub = []) {
    const copy = []

const totlaLength = arr.length + sub.length

    for (let i = 1; i < totlaLength ; i++) {
        if (i< arr.length) {
            copy.push(arr[i])

        }
        
    }


    return copy
}









/* for (let i = 1; i < arr.length; i++) {
    copy.push(arr[i])
    }
 */





/* const copy = array.concat()
console.log(array.concat(next, next2));
console.log([0].concat(array,next,next2));
console.log(array); */


console.log(concat(array));

console.log(concat(array, next));
