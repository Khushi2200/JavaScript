let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2026, 5, 22, 12, 0)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("06-22-2026")
// let myCreatedDate = new Date(22-6-2026)          // Invalid Declaration
// console.log(myCreatedDate.toLocaleDateString());


let myTimeStamp =  Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
let tot=myCreatedDate - myTimeStamp
// console.log(tot)

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date(6, 22, 2023)
newDate.toLocaleString('default' , {
    weekday: "long",
})
console.log(newDate);


