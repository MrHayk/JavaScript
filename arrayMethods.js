let people = [
    { name: "Hayk1", age: 21, location: "Earth1", budget: 20000, },
    { name: "Hayk2", age: 17, location: "Earth2", budget: 25000, },
    { name: "Hayk3", age: 23, location: "Earth3", budget: 30000, },
    { name: "Hayk4", age: 15, location: "Earth4", budget: 35000, },
    { name: "Hayk5", age: 18, location: "Earth5", budget: 40000  }
]

//  * ForEach
// people.forEach((element, index, array) => console.log(element, index, true))
//  * myForEach
// function myForEach(callback, array) {
//     for (let i = 0; i < array.length; i++)
//         callback(array[i], i, array);
// }
// myForEach((element, index, array) => {
//     console.log(element.age)
// }, people);

// ==========================================================================

//  * Map
    // let newPeople = people.map((item, index, array) => {
    //     // console.log(`${item.name} is ${item.age+20} years old, lives in --> ${item.location} and have arround ${item.budget}$ budget `);
    //     return item.budget + 100000
    // }) 
    // console.log(newPeople);
//  * myMap   
//     function myMap (callback, array){
//         let arr = [];
//         for (let i = 0; i < array.length; i++) {
//            arr.push(callback(array[i], i, array))  
//         }
//         return arr
//     }
// let newArray = myMap((element, index, array) => {
//         return element
// }, people);
// console.log(newArray[0], "this is about myMap ");

// ==========================================================================

//  * Filter
    // const adults = people.filter((element, index, array) => element.age >= 18)
    // console.log(adults);
// * myFilter
    // function myFilter (callback, array){
    //     let arr = [];
    //     for (let i = 0; i < array.length; i++) {
    //             if(callback(array[i], i, array))
    //                 arr.push(array[i])
    //     }
    //     return arr
    // }
    // let filteredArr = myFilter((element, index, array) => element.age >= 18, people)
    // console.log(filteredArr, "this is about myFilter");

// ==========================================================================

//  * reduce
    // let budgetLeft = people.reduce((currentBudget, eachPerson) => {
    //     return currentBudget - eachPerson.budget
    // }, 200001)
    // console.log(budgetLeft);
// //  * myReduce
//     function myReduce (callback, array, variable){
//         for (let i = 0; i < array.length; i++) 
//             variable = callback(variable, array[i])
//         return variable
//     }
//     let x = myReduce((currentBudget, eachElement) => currentBudget - eachElement.budget,people, 200002)
//     console.log(x);

// //  * find 
// let haygo1 = people.find((item) => {
//     return item.name === "Hayk1"
// })
// console.log(haygo1);


//  * findIndex
// let haygo1Index = people.findIndex((item) => {
//     return item.name === "Hayk1"
// })
// console.log(haygo1Index);

// Some of array methods toghether
let amount = people
    .filter(item => item.budget >= 30000)
    .map(item => {
        return {
            info: `${item.name} (${item.age})`,
            budget: 2*item.budget
        }
    })
    .reduce ((total , item) => total + item.budget, 0)
console.log(amount);