const array = [1, 1, 2, 3, 5, 8, 13]


function find(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        const doesExists = callback(arr[i])
        if (doesExists) {
            return arr[i]
        }
    }


}


const people = [
    { name: 'vlad', age: 123 },
    { name: 'lkat', age: 1212313 },
    { name: 'dqad', age: 121323 }
]


const res2 = find(people, person => person.name === 'vlad')

console.log(res2);

const res = find(array, item => item === 8)
/* const res = array.find(item => item === 13) */

console.log(res);

