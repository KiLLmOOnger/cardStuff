const array = [1, 1, 2, 3, 5, 8, 13]

function forEach(arr, callbackFn) {

    for (let i = 0; i < arr.length; i++) {
        callbackFn(arr[i], i, arr)
    }
    
}

forEach(array, function(item, index, arr){
    console.log(`item: ${item}, index: ${index}, arr: ${arr}`)
    
})



/* function iterator(item,index,arr) {

    console.log(`item: ${item}, index: ${index}`);

} */


/* array.forEach(function(item, index,arr) {
    console.log(`item: ${item}, index: ${index}, arr: ${arr}`)
})  */

/* array.forEach((item, index,arr) => {
    console.log(`item: ${item}, index: ${index}, arr: ${arr}`)
})  */

/* array.forEach(item =>
    
    console.log(`item: ${item}`))


    array.forEach(index =>
    
        console.log(`index: ${index}`))
     */