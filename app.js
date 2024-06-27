// ES5 code
function double(arr) {
	return arr.map(function(val) {
		return val * 2;
	});
}

//ES2015
// let double = (arr) => arr.map((val) => val * 2);

//ES5 Code

// function squareAndFindEvens(numbers) {
// 	var squares = numbers.map(function(num) {
// 		return num ** 2;
// 	});
// 	var evens = squares.filter(function(square) {
// 		return square % 2 === 0;
// 	});
// 	return evens;
// }

//What is this code doing?

//Accepts numbers and creates a variable squares that contains an array of numbers multiplied by 2.

//Filters through each number in the squares array and returns an array of only the even numbers.

//ES2015
let squareAndFindEvens = (numbers) => {
	let squares = numbers.map((num) => num ** 2);
	return squares.filter((square) => square % 2 === 0);
};
