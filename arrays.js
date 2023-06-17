//ARRAYS

//methods in array

var a = ['a', 'b', 'c', 'd'];
//slice-it will return a new array without mutationg the original
//splice-it will mutate the original
//reverse-it will reverse and mutate the original
//concat-combine two array and will not muatate
//join-returns a string
console.log(typeof a.join('-'), a.join('-'));

//at-same as the bracket notation,only difference is it can take negative index
console.log(a.at(-1)); //it also works on string

//looping using forEach
//it is a higher order function which takes three argument
//1.current index array value
//2.index
//3.array
//the only issue with this is that break end don't work here

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach((a, b, c) => {
  console.log(a, b, c);
});
console.log(movements.lastIndexOf(450));

//we can use forEach on map and set as well
//in case for map
//parameter are as follows..(value,key,map)
//for set (value,key,set)

//find-it also similar like filter but the there are two difference
//it will not return an array infact will return an element and will alwasys return the first element

console.log(movements.find((a) => a === 3000));

//findIndex-same as find but will return index

console.log(movements.findIndex((a) => a === 3000));

//some and every method are like includes only the only difference is in includeds we can check only the equality but in here we can have a condition

//flat and flatmap
//flat method doesn't take any callback,it is used to remove nesting in an array,you can select the level of nesting
//flat map is not nothing but flat+map

console.log(new Array(7, 1));
