const flower = ['Rose', 'Lotus', 'Lilly', 'Tulip']
const animal = ["cat", "dog", "Rabbit", "elephant", "cow"]

// flower.push(animal)                      //push()
// console.log(flower);

// const flowmal=flower.concat(animal)      //Concat()
// console.log(flowmal);

// const flowmal=[...flower, ...animal]     //spread operator
// console.log(flowmal)

// const another_array = [1,2,3,4,5, [5,6,7], 8, 9 , [1, 2, 5, [7, 6, 4, [6, 4, 2], 5, 8, ], 9, 0], 1, 2, 3, 4, 5]

// const real_another_array=another_array.flat(1)           //flat method  *flat method has argument in num or Infinity
// console.log(real_another_array)

console.log(Array.isArray("Khsuhi"));
console.log(Array.from("Khsuhi"));
console.log(Array.from({name: "Khushi"}));          //interesting this will return empty array

