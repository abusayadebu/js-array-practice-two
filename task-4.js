/*
Task 6
Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected output:
John scored 85
Alice scored 90
*/ 

// let array = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]

// let name = array[0].name;
// let marks = array[0].marks;
// let name2 = array[1].name;
// let marks2 = array[1].marks;

// let output = `${name} scored ${marks}`
// let output2 = `${name2} scored ${marks2}`

// console.log(output, output2);


let array = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

// for(let student of array){
//     const output = `${student.name} scored ${student.marks}`
//     console.log(output)
// }

array.map((student)=> (
    console.log(`${student.name} scored ${student.marks}`)
))