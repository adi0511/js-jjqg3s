//Set will not contain duplicate value

var setObj1 = new Set(['apple', 'banana', 'apple', 'orange']); //set is a function and will take an iterable as an argument.
console.log(setObj1);

var a = new Set([1, 2, 4]);
console.log(a.size, setObj1.size); //length of set

console.log(setObj1.has('apple')); //checking if set set contains some value

a.add(34); //ADD A NEW element
console.log(a);
// a.delete(34); //remove an element

//You can't retreive any  value from a set

// a.clear() // clears the set

//sets are also iterables so we can iterate over them

for (const i of a) {
  console.log(i);
}
