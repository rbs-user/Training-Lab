let arr4 = [2, 3, 4]; // Initial array

// Adding an element at the beginning
let newLengthArr4 = arr4.unshift(1); // 1 is added

console.log(arr4); // Output: [1, 2, 3, 4]
console.log(newLengthArr4); // Output: 4, which is the new length of the array

// Adding multiple elements at the beginning
arr4.unshift(0, -1);
console.log(arr4); // Output: [-1, 0, 1, 2, 3, 4]
