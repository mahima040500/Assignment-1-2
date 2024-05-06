function checkSorted(arr) { 
	const sortArr = [...arr].sort((a, b) => a - b); 
	return JSON.stringify(arr) === JSON.stringify(sortArr); 

} 

// Example usage 
const arr1 = [32, 39, 48, 56]; 
const arr2 = [22, 65, 1, 39]; 

console.log(checkSorted(arr1)); 
console.log(checkSorted(arr2));
