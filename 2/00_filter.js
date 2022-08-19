/* const cards = [

    { name: 'Первая 1', Number: 1 },
    { name: 'Вторая 2', Number: 2 },
    { name: 'Третья 3', Number: 3 },
    { name: 'Четвертая 4', Number: 4 },
    { name: 'Пятая 5', Number: 5 }

] */

/* const people = []

for(let i = 0; i < cards.length;i++) {
  if (cards[i].Number >= 3) {
      people.push(cards[i])
  }

}
console.log(people); */


/* 
const people = cards.filter(person => person.Number >= 3) 
console.log(people);

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

 */

  /*   if (person.Number >= 3) {
return true
    }
})
 */


const array = [1, 2, 3, 4, 5, 6, 7]

console.log(array.filter(item => item % 2 === 0 ));

const values = [42, 1, null, undefined, 'a', 0, 1, 'qwqe', false, true, '' ]

console.log(values.filter(item => item));


const text = `qqweqw qweqw qweqwe adsads zxcxz мат1 , uquewr uqru
iqweqiwe jdksj мат2 , asdasda cxvc cv dfedw asddwd мат3 .`


const restricted = ['мат1', 'мат2' ,'мат3']

function clear (word) {
  return !restricted.includes(word.toLowerCase())

}


const clean = text
.split(' ')
.filter(clear)
.join(' ')


console.log(clean);