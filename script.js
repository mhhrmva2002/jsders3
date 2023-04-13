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

