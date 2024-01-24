//a.  Create an array named originalArray containing at least three numbers.

const originalArray=[50,3,20,90];

console.log(originalArray);

//b. Use the map function to create a new array (doubledArray) containing each number doubled.

var doubledArray=originalArray.map((x)=>{
    return x*x;
});

console.log(doubledArray);
