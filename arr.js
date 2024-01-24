let numbers= [1,2,3,4,5];

//adding number 6 to the end of array numbers

numbers.push(6);

//removing the first element of array

numbers.shift();

//Reverse the array elements

numbers.reverse();

// Join the array elements into a string with a comma as the separator.

numbers.toString();

// use map function to create new element of squarenumbered

var squareNumbers=numbers.map(function (x){
    return Math.pow(x,2);
})

console.log(numbers)
console.log(squareNumbers);