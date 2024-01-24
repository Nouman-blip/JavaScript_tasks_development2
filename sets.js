//a. create two sets each with uniques set1 and set2

const set1=new Set([1,2,3]);

const set2=new Set([4,5,6]);

// b.Calculate the union of set1 and set2.
const unionSet = new Set( [...set1, ...set2] );
console.log(unionSet);


//c. Check if set1 is a subset of set2.

function isSubset (setA , setB){
    return  [...setA].every((value) => setB.has(value));
    }
console.log(isSubset(set1, set2)) ;

//d. Remove an element from set2.

const ele=set2.delete(4);

console.log(ele)
console.log(set2);

//e. convert set1 into array

const array1=Array.from(set1);

console.log(array1)