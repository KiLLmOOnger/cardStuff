const array = [1, 1, 2, 3, 5, 8, 13]

function pop(arr) {
    const lastItem = arr[arr.length -1]
    arr.length -=1
    console.log(arr.length)
    return lastItem
}


// const res = arrary.pop()
const res = pop(array);

console.log(array);
console.log(res);
