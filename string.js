var a = 'learning string';
console.log(a.length);
console.log(a.indexOf('a'));
console.log(a.lastIndexOf('n'));

//slice
console.log(a.slice(1, 4));
console.log(a.slice(-1)); // starts from the end
console.log(a.slice(-1));
var b = ' adit ya ';
console.log(b.trim()); //it will remove the white space from beginning and the end

var c = 'learning javascript from javascript online course';

console.log(c.replace('javascript', 'JS'));
console.log(c.replaceAll('javascript', 'JS'));

console.log(c.replace(/javascript/g, 'JS')); //regular expression

//here we are  using the primitive data type of string to how come we are able to access the methods?? This is called "boxing" JS internally converts it to the string object

//Booleans

console.log(c.includes('JS'));
console.log(c.startsWith('lear'));

//split is used to break the string and store it an array

console.log(c.split(' '));

//join is used to make an array into string
console.log(['aditya', 'sinha'].join(' '));

//padding
var message = 'testing ';
console.log(message.padStart(20, '+'));
console.log(message.padEnd(20, '+'));
//repeat
console.log(message.repeat(3));
