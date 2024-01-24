const message="Hello World";

// Extract and log the substring 'Hello'

const hello=message.substr(0,5);

console.log(hello);

// convert the entire string to uppercase

const str=message.toUpperCase();

//Check if the string contains the word "World" (case-insensitive).
const word='word'

if (message.toLowerCase().includes('World')) {
    console.log("word contains World (case-insensitive)")
}else {
    console.log("word does not contains World (case-insensitive)")
}

// Replace the word 'World'with your name string

const name='Nouman Khan'

const str2=message.replace('World',name);

console.log(str2)


// Use the map function to create an array of characters from the string



const array = Array.prototype.map.call(message, char => char);


console.log(charArray);











