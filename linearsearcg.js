function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if the element is not found in the array
}

// Example usage:
const array = [5, 10, 15, 20, 25];
const targetElement = 15;
const index = linearSearch(array, targetElement);
if (index !== -1) {
    console.log(The element ${targetElement} is found at index ${index}.);
} else {
    console.log(The element ${targetElement} is not found in the array.);
}