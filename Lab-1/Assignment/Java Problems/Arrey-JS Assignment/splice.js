let arr5 = [1, 2, 3, 4, 5]; // Initial array

// Removing 1 element at index 2 and adding a new element (6)
let removedElements = arr5.splice(2, 1, 6); // 3 is removed and 6 is inserted at index 2

console.log(arr5); // Output: [1, 2, 6, 4, 5]
console.log(removedElements); // Output: [3], which is the removed element

// Removing 2 elements starting from index 1
let removed = arr5.splice(1, 2); // Removes 2 and 6
console.log(arr5); // Output: [1, 4, 5]
console.log(removed); // Output: [2, 6], the removed elements
