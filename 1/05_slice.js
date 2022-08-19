const array = [1, 1, 2, 3, 5, 8, 13]

/* function slice(arr,start) {
    const result = []
for (let i = start; i < arr.length; i++) {
    result.push(arr[i])
}

    return result;
}


const res = slice(array,2)
//const res = array.slice(2)


console.log('res', res);
console.log('array',array); */



function slice(arr,start, end = arr.length ) {
    const result = []

    let lastIndex = arr.length

    if (end) {
        lastIndex -= Math.abs(end)
    }


    for (let i = start; i < lastIndex; i++) {
        result.push(arr[i])
        
    }


    return result

}

const res = slice(array,2)
const res2 = slice(array, 2,4)

/* const res = array.slice(2) */

console.log('res', res);
console.log('res', res2);
console.log('array', array);

