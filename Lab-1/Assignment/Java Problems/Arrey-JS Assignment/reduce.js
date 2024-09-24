let arr10 = [1, 2, 3, 4, 5]; // Initial array

// Calculating the sum of all elements
let sum = arr10.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // Output: 15

// Finding the product of all elements
let product = arr10.reduce((acc, curr) => acc * curr, 1);
console.log(product); 
