// loops, struct mode, console types , array method

// while , do while , for
// let count = 1;
// while(count <= 10){
//     console.log(count);
//     count++;
    
// }

// do{
//     console.log(count);
//     count++;
    
// }while(count <= 10);

// for(let i = 0;i<=10;i++){
//     console.log(i);
    
// }

// for(let i = 0; i <= 10; i++){
//     if(i == 6){
//         continue; // break;
//     }
//     console.log(i);   
// }

// let arr = (1,2,3,4,5,6);
// for(let element of arr){

// }
// types of conso;
console.log("hello world");
console.error("This is error msg");
console.warn();
console.assert(5>10,"5 is not > than 10");
console.assert(5<10,"5 is < than 10");

console.group("group1");
console.log("message 1");
console.log("message 2");
console.groupEnd();

console.log("hello techno");

console.count("counter");
console.count("counter");
console.count("counter");

// Array Methords

// let arr = [10,20,30,40,50,60];

// // push pop shift unshift

// let result = arr.push(1000);
// console.log(result);//return size of array
// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

// Shift && unshift :>

// let arr = [10,20,30,40,50,60];
// arr.unshift(1000);
// console.log(arr);

// arr.shift();
// console.log(arr);


// concat : join arry in single
// let arr1 = [1,3,4,5,5];
// let arr2 = [0,9,8,6];
// let result = arr1.concat(arr2);
// console.log(result);
// console.log(arr1);
// console.log(arr2);


// slice && splice

// let arr = [10,20,30,40,50,60];
// let sliceArr = arr.slice(2);
// console.log(sliceArr);
// console.log(arr);

// let result = arr.splice(2 , 0 , "roshan" , "sharma"); // number of count
// console.log(arr);
// console.log(result);

// include , reverse , join , flat

// console.log(arr.includes(40));
// console.log(arr.includes(400));
// console.log(arr.reverse());
// console.log(arr.join("%"));
// console.log(typeof(arr.join("")));

// flat use
// let arr = [10,20,[30,[40]]];
// console.log(arr.flat(2));

// map , filter , reduce , forEach
let arr = [10,20,30,40,50,60];
// arr.map(()=>{});
    // callback function
    // high order function >important

// let mapArr = arr.map((item , i)=>{
//     return item*10;
// })
// console.log(mapArr);
// console.log(arr);
// map return new arry with the same lenghth as original

// forEach
let forArr = arr.forEach((item)=>{
    // console.log(item);
    return item*10;
    
})
console.log(forArr);
