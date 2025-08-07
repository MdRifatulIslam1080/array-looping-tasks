// let students = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 },
// ];
// console.log(students[0].name, "scored", students[0].marks);
// console.log(students[1].name, "scored", students[1].marks);

// alternative way

let students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name, "scored", students[i].marks);
}
