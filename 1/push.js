const array = [1, 1, 2, 3, 5, 8, 13]; // pop add element massive

function push(arr, num) {

    arr[arr.length] = num;// not clear enough
    console.log(arr[6]);
    return arr.length;
    

}

/* const res = array.push(21) */
/* console.log(res); */


const res = push(array, 42)

console.log(res);
console.log(array);
