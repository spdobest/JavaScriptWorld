# ES 6 Tutorial  
  
## Feature List  
1. Default Parameters
2. Rest and Spread Parameters
3. Template Literals
4. Multi-line Strings
5. Enhanced Object Literals
6. Arrow Functions  
7. Promises  
8. Block-Scoped Constructs: Let and Const  
9. Classes  
10. Modules  
11. For Of Comprehensions  
12. Set and Map  
13. Closure  
14.


## 1.DEFAULT PARAMETER  
```  
function greet(name = "Prasad") {
  console.log("Welcome mr." + name);
}
  
greet("siba"); // It will print Welcome mr. siba
greet(); // It will print Welcome mr. Prasad 
```  


## 2.Rest and Spread Parameters

### Rest Parameter [ …rest]  
Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input   
as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
  
```
function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
  // error
}
```
**Rest parameter must be at the end**  

## SPREAD OPERATOR  
```
function addFourAges(a,b,c,d){
    return a+b+c+d;
}

var sum = addFourAges(12,23,34,45);
console.log(sum);


// ES5
var ages = [18,19,20,25]

var sum2 = addFourAges.apply(null,ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3)  
ONE MORE EXAMPLE
const familySiba = ['Siba','Prasad','Mohanty'];
const familySatya = ['Satya','Narayan','Mohanty'];

const bigFamily = [...familySiba, ...familySatya];
```  
## 4.Multi-line String
```
var html = `
  <div>
    <span>Some HTML here</span>
  </div>
`;
```
## ARROW FUNCTION  
```
const x = (x, y) => x * y;
document.getElementById("demo").innerHTML = x(5, 5); // It will print 25  
```  
## Map  
  
**Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
Methods and properties are:**    
1.new Map() – creates the map.  
2.map.set(key, value) – stores the value by the key.  
3.map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.  
4.map.has(key) – returns true if the key exists, false otherwise.  
5.map.delete(key) – removes the value by the key.  
6.map.clear() – removes everything from the map.  
7.map.size – returns the current element count.  
```
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}
```  
## Set  
  
**A Set is a special type collection – “set of values” (without keys), where each value may occur only once.**    
**Its main methods are:**
  
1. **new Set(iterable)** – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
2. **set.add(value)** – adds a value, returns the set itself.    
3. **set.delete(value)** – removes the value, returns true if value existed at the moment of the call, otherwise false.    
4. **set.has(value)** – returns true if the value exists in the set, otherwise false.    
5. **set.clear()** – removes everything from the set.    
6. **set.size** – is the elements count.    
**EXAMPLES**  
```
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}
```  

```
// ES5 code
var
  a = 1, b = 2, c = 3;
  obj = {
    a: a,
    b: b,
    c: c
  };

// obj.a = 1, obj.b = 2, obj.c = 3
```  
**Equivelent ES6 Code**  
```
// ES6 code
const
  a = 1, b = 2, c = 3;
  obj = {
    a
    b
    c
  };

// obj.a = 1, obj.b = 2, obj.c = 3
```  
**Another Example**  
```
// ES6 code
const lib = (() => {

  function sum(a, b)  { return a + b; }
  function mult(a, b) { return a * b; }

  return {
    sum,
    mult
  };

}());

console.log( lib.sum(2, 3) );  // 5
console.log( lib.mult(2, 3) ); // 6
```  
  
**ES5 to ES6**   
'''
// ES5 code
var lib = {
  sum:  function(a, b) { return a + b; },
  mult: function(a, b) { return a * b; }
};

console.log( lib.sum(2, 3) );  // 5
console.log( lib.mult(2, 3) ); // 6
```  
  
```
// ES6 code
const lib = {
  sum(a, b)  { return a + b; },
  mult(a, b) { return a * b; }
};

console.log( lib.sum(2, 3) );  // 5
console.log( lib.mult(2, 3) ); // 6
```  
**More shortcut using Arrow Function**  
```
// ES6 code
const lib = {
  sum:  (a, b) => a + b,
  mult: (a, b) => a * b
};

console.log( lib.sum(2, 3) );  // 5
console.log( lib.mult(2, 3) ); // 6
``  
**FOR MORE DETAILS followthe below Link**  
https://www.sitepoint.com/es6-enhanced-object-literals/   
  
## Closure  
**https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures**  

```
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```  

## Promises  
https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a0   
http://ccoenraets.github.io/es6-tutorial/promises/   (PROGRAMS)    
**Promises are a pattern that greatly simplifies asynchronous programming by making the code look synchronous and   
avoid problems associated with callbacks.**  
1. Promises are one of the most exciting additions to JavaScript ES6. For supporting asynchronous programming. Before **promise**  
javascipt uses callback and its little problmatic to handle the response.  
2. Promises are a pattern that greatly simplifies asynchronous programming by making the code look synchronous and   
avoid problems associated with callbacks.  
  
**Making Promises**    
```
const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 <= 90) {
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
});
```  
  
**Using Promises**   
```
onst myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 < 90) {
        console.log('resolving the promise ...');
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
});

// Two functions 
const onResolved = (resolvedValue) => console.log(resolvedValue);
const onRejected = (error) => console.log(error);

myPromise.then(onResolved, onRejected);

// Same as above, written concisely
myPromise.then((resolvedValue) => {
    console.log(resolvedValue);
}, (error) => {
    console.log(error);
});

// Output (in 90% of the cases)

// resolving the promise ...
// Hello, Promises!
// Hello, Promises!
```  
**Catching Promises**  
```
const myProimse = new Promise((resolve, reject) => {
  if (Math.random() * 100 < 90) {
    reject(new Error('The promise was rejected by using reject function.'));
  }
  throw new Error('The promise was rejected by throwing an error');
});

myProimse.then(
  () => console.log('resolved'), 
  (error) => console.log(error.message)
);
```  
# JS6
we can re-declare a variable in javascript.
var is used as whole javascript file where it declated. That means, we can access a var from anywhere in the javascript file where it declared.  
But let have only block scope. If we define a variable using let, we can not access it outside that function.  
const is same as let but the value can not be changed in javasctipt6.  
  
var counter = 123;
var counter = 123;
it will works fine.  
let name = 'siba';
let name = 'satya'; // it will show error,SyntaxError: redeclaration of var name  
  
 // the below code is in javascript 5  
``` 
    function getBook(title,auther){
        return {
        'title':title,
        'author': auther
        }
    }  

    var book = getBook('Heripoter','hk');
    console.log(book);
```   

**now we will convert this above code to js6 format. 
  the below code is in javascript 5** 
    
    
```      
    function getBook6(title,auther){
        return {
        title,
        auther
        }
    }  

    var book6 = getBook6('Heripoter','hk');
    console.log(book6);
```  
  
**Defined function in javascript 6 and js5**  
```  
    function printName(){
      console.log('`MY name is Siba');
    }
    or
    var nameFun = function(){
      console.log('`MY name is Siba');
    }
    printName()
    nameFun();
```  
**In javascript we can do this using ARROW function**  
``` 
    const myNameinJs6 = () =>{
      console.log('`MY name is Siba');
    }
    myNameinJs6();  
    // with Parameter
    const myLocation = (name,location) =>{
      console.log('MY name is ${name} and my location is ${location}');
    }
    // if there is only one parameter you can skip the brackets
     const myLocation = name =>{
      console.log('MY name is ${name}');
    }  
   
   
   const myLocation = () =>console.log('MY location is INDIA');
   myLocation();

    const myLocation1 = loc =>console.log('MY second location is '+loc);
    myLocation1('Mumbai');
``` 
 **USE OF FUNCTION in JS5 and JS6**  
 ```  
    var user = {
        fName:'Siba',
        lName:'Mohanty',
        showName  = function(){
            console.log('My name is '+fName);

            var that = this;
            var fullName = function() {
                console.log('My full name is '+that.fName+' '+that.lName);
            }
            fullName();
        }
    }
    user,showName();
```      
**NOTE - in the above code we declared function inside another function. To access the variable fName and lName, we used that. Because if we use this.fname ther, it will be undefined**.  
  
**Lets explain how we will define in JS6**  
 ```  
    var user1 = {
        fName:'Siba',
        lName:'Mohanty',
        showName  = function(){
            console.log('My name is '+fName); 
            var fullName = () =>  console.log('My full name is '+this.fName+' '+this.lName);
            fullName();
        }
    }
    user1,showName();
```      
**Use of FOREACH, MAP and FILTER**  
 ``` 
 const shoppingList = ['Milk','Cow','Eggs','Bananas','Choco']

forEach
 
     shoppingList.forEach( element =>{
      // write your operation here
     });

     shoppingList.forEach( (element,index) =>{
      // write your operation here
     });  
 
 Use of Map. 
 
     const newList = shoppingList.map(item => item +" new");
     
 Use of filter  
 
     const newList = shoppingList.filter(item =>{
      return item === 'Eggs';
     })
 ``` 
   
 **CLASSES AND OBJECTS**  
 
 ``` 
   function Person(name,age,haircolor){
     this.name = name;
     this.age = age;
     this.haircolor = haircolor;
     showName(){
        console.log('My name is '+this.name);
     }
   }
 
   Person.prototype.sayName = function(){
      console.log('My name is '+this.name);
   };
 
   var sp = new Person('siba','23','black');
   sp.showName();
   sp.sayName();
 
   function Siba(occupation,hobby,name,age,haircolor){
       Person.call(this,name,age,haircolor)
       this.occupation = occupation;
       this.hobby = hobby;
   }
  
  How to use all the function of Person inside Siba class.  
  Siba.prototype = Object.create(Person.prototype);  
  ``` 
  
 **Above is using JS5, now lets use JS6 for**  
``` 
 class  ShoppingList{
    constructor(items,price){
      this.items = items;
      this.price = price;
    }
    sayList(){
      console.log(this.items);
    }
 }
 
 const myList = new SHoppingList(['milk','rice','egg']);  
   
 class Product extends ShoppingList{
    constructor(items,price,amount,cost){
        super(items,proice);
        this.amount = amount;
        this.cost = cost;
    }
 }  
``` 
**PROMISE,ASYNC,CALLBACK**  
// es5.  
``` 
console.log('start');
  
  function getData(data,callback){
    setTimeout( () =>{
        console.log('Reading from database');
        calback({data: data});
    },2000);
  }
  
  getData(5,function(data)){
    console.log(data);
  });
  
  console.log('finish');
 ```  
**Now using ES6**  
 ``` 
  const prom = new Promise( (resolve, reject) =>{
      setTimeout( () =>{
        console.log('Reading from database');
        resolve(200);
    },2000);
  }  
  
  prom.then(data =>{
    console.log(data);
  })
  .catch(err => console.log(err));
 ```   
 
