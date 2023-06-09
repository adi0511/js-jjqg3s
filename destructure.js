const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Destructring of array

// let a = [1, 2, 3, 4, 5];
// [b, , c, d] = a;
// console.log(b, c, d);

// //reversing the  value

// [b, c] = [c, b];
// console.log(b, c, d);

// //destructuring nested array

// const arr1 = [1, 2, [3, 4]];
// [e, f, g] = arr1;
// console.log(e, f, g);
// [e, f, [g, h]] = arr1;
// console.log(e, f, g, h);

// //Destructuring objects
// // use curly braces with exact key name which you need

// var { name, location } = restaurant;
// console.log(name, location);

// //giving names and default to variables while destructuring objects

// var { categories: categoriesTest, mainMenu: menu = [], test = [] } = restaurant;
// console.log(categoriesTest, menu, test);

//mutating variables

// let a = 10;
// let b = 20;

// let obj = { a: 30, b: 40 };
// ({ a, b } = obj); //parenthesis is important as JS expects a code block

// console.log(a, b);

// //nested objects

// let { openingHours } = restaurant;
// console.log(restaurant);

// // let {
// //   fri: { open, close },
// // } = openingHours;
// // console.log(open, close);

// // //Spread operator (...)

// // let arr = [1, 2, 3, 4, 5, 6];
// // let arr1 = [22, 33, ...arr];
// // console.log(arr1);

// // //spread operator works with all the iterables(set,array,string)

// // var str="aditya";
// // var arr2 =[...str,"s","i"]
// // console.log(arr2)

// // //after ES2018 we can use spread operator on objects

// // var obj1 ={...restaurant,test:'testing'};
// // console.log(restaurant);
// // console.log(obj1)

// //rest operator is used to pack the elements into an array(opposite of spread,both have the same syntax).
// //if ... is used on right of assignment operator then its as spread operator if on left then its a rest operator

// var [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a, b, c);

// //example for REST operator
// var sum=function(...number){
//   var sum=0;
//   for(var i=0;i<number.length;i++){
//     sum=sum + number[i]
//   }

//   console.log(sum)

// }

// sum(1,2,3,4)
// //short circuting
// var test = 0 && null &&''&&null;
// console.log(test)

//  ... spread operator rest operator

// var a=10;
// var b=20;

// [a,b] =[b,a]
// console.log(a,b)

//The problem with short circuting is it will consider the 0 as null
//to overcome this use nullish coalesching

//??

//FOR OF LOOP

// var a=[1,2,3,4,5,6]
// for(var i of a){
//   console.log(i)
// }

// OBJECTS LOOPING FOR OF LOOPING

const obj = {
  name: 'aditya',
  title: 'sinha',
  city: 'bangalore',
};
//looping over keys

// var key = Object.keys(obj);
// console.log(key) // returns array of key
// for(var i of key)
// {
//   console.log(i)
// }
// for(var [a,b,c,d,e] of key)
// {
//   console.log(a,b,c,d,e)
// }

//looping over values

// var val = Object.values(obj);
// console.log(val); //will give array of values
// //looping over entire object

// var obj1 = Object.entries(obj);
// console.log(obj1); //returns array of array

// for ([a, b] of obj1) {
//   console.log(`key is ${a} and value is ${b}`);
// }
