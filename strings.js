const name="Khushi"
const repoCount = 50

// console.log(name + repoCount + " Value ")

// console.log(`Hello my name is ${name} and My repo count is ${repoCount}`)

const gameName = new String("Khushi")
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,3)
// console.log(newString);

const anotherString = gameName.slice((1,4))
// console.log(anotherString);

const newStringOne = "             Khushi             "
console.log(newStringOne)
console.log(newStringOne.trim())

const url=  "https://khushi.com/khuhsi%20rakholiya";

console.log(url.replace('%20','-'));
console.log(url.includes('sundar'))

console.log(gameName.split('-'))







