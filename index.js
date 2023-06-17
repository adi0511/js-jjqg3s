// //Function

// //PASSING PRIMITIVE AND OBJECT IN FUNCTION

// var a = 'aditya';
// var b = {
//   name: 'aditya',
//   title: 'sinha',
// };

// function test(c, d) {
//   (c = 'sinha'), (d.name = 'sinha');
// }
// test(a, b);
// console.log(a, b);

// //In javascript function are simply other object
// //First class function is nothing but a theoretical term given to functions in javascript as it be used as a value.

// var a =function(){
//   console.log("First class function");
// }

// //Higher order function is nothing but if some function is acceptiong or returning a function

// var a = (a,b)=>{

// }

//CALL and APPLY function
//In javascript we can use function as a variable
//call function is a method provided to the function as it acts as other object also
//which is used to explicitly allow the "this" keyword to point to a specific object

const callObj = {
  name: 'aditya',
  title: 'sinha',
  callTest(check) {
    console.log(`${this.name} ${this.title} ${check}`);
  },
};
callObj.callTest('works');

//in above code we have an obj which has a fuction inside this,if we are calling the function directly from obj its working fine
//lets try assinging that funnction to variable as its a first class citizen
var b = callObj.callTest;
b('sinha'); //here in this case we can see undefined because the this keyword is pointing to the object but we are using the function in the outer scope

//So now we will use the call function

b.call(callObj, 'works'); //so it will takes arguments,where first argument is the object to which you want to point and the rest are the argument to the function.

//Apply function is also the same, the only difference is it will take the argument to function as an array.

var arr = [1, 2, 3, 4];

//Bind method is also like the call and aplly but only difference is that it will return a ew function with the this keyword pointing to specific obj.

var c = b.bind(callObj);
c('workss');

//IIFE immediately inviked  function expression-The function that is called just once

(function () {
  console.log('IIFE');
})();
