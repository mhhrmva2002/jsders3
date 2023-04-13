// Task1 
let data = [
    {name: 'daniel', age: 45},
    {name: 'john', age: 34},
    {name: 'robert', age: null},
    {name: 'jen', age: undefined},
    {name: null, age: undefined}];
//  element -in deyeri null ve undefined olmayanlari qaytar
const filteredData = data.filter(item => item.age !== null && item.age !== undefined);
console.log(filteredData);





// Task 2
const students = [
  { name: "Leyla", points: 500 },
  { name: "Akif", points: 500 },
  { name: "Fikret", points: 3000 },
  { name: "Rashad", points: 500 },
  { name: "Turkan", points: 1900 },
  { name: "Sabir", points: 1000 },
  { name: "Idris", points: 340 },
  { name: "Nijat", points: 940 },
  { name: "Ismet", points: 1780 },
];
// her telebenin pointini 30 bal 
let newstudents= students.map((student) =>{
    return{
        name: student.name,
        salary:student.points+30
    }
})
console.log(newstudents);




// Task 3
let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];
// - isharesini / ile deyishin
// output: ['08/14', '10/04', '04/21', 08/14, '10/04', '04/21'];
let newBdays = bdays.map(function(tarix) {
  let monthDay = tarix.replace('-', '/');
  return monthDay;
});
console.log(newBdays);
  




// Task4 
let numbers = [1.5, 2.56, 5.1, 12.33];
// butun regemlerini yuvarlaqlashdirin
    let newnums = numbers.map(function(x) {
           let num = Math.round(x);
           return num;
    })
console.log(newnums);





// Task 5
// Verilmish stringdeki ededleri cemleyin --> reduce 
var b = "5,4,3,2,1";
var array = b.split(",");
var sum = array.reduce(function(total , num) {
      return +total + + num;
});
console.log(sum);