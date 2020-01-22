# Advance Javascript . 
  
## Arrow Function 
The syntax of **Arrow** function is  

``` 
// without parameter
const myFun = () =>{

}  
// Arrow function with parameteres 
const myFunParameter = (name,age) =>{

} 
//you can write arrow function in one line when you dont have any parameter and only one line of code  
const exp = () => console.log("My Expresion");

```   
-> No more issues with this keyword inside the old function  
  
Check the below Example . 
``` 
const printmyName = (name) =>{
  console.log('My Name is '+name);
} 
```  
printmyName("Sibaprasad");
In the console log you will see My Name is Sibaprasad  
  
## Export and Import (Modules)  
Here is person.js file in javascript  
``` 
const person = {
name = 'Sibarasad';
}
export default person  
```   
  
```  
utility.js
Another example  
export const clean = (){...}
export const baseData = 10
```  
Now you can import the person class in other javascript file like below  
```  
import person from './person.js'  
import prs from './person.js'
import {clean} from './utility.js'
import {baseData} from './utility.js'
```  
  
  
## Classes  
Classes can have properties and methods. we can intitialize class using new keyword. It support inheritance. By using prototype   
```  
class Human{
constructor(){
this.gender = "male";
}
printGender(){
console.log(this.gender);
}
}

class person extends Human{
constructor(){
super();
this.name = "Sibaprasad";
this.gender = "male";
}
printMyName(){
console.log(this.name);
}
}

const perosn = new Person();
person.printMyName();
person.printGender();
```   
## Properties and methods  
Properties are like variable attached to classes.  
**ES6**  
``` 
constructor(){
this.propertyName = value
}
```  
**ES7**  
``` 
constructor(){
propertyName = value
}
```   
**Methods are like functions which are attached to classes**  
**ES6**  
``` 
myMethods(){...}
```  
**ES7**  
``` 
myMethods = () =>{...}
```  
## Spread and Rest Operator  
  
**SPREAD Operator** used to split u aray elements or object properties  
const newArray = [...oldArray,2,4]  
const newObject = {...oldObject,newProps:5}  
  
**SPLIT Operator** used to  merge a list function arguments into an array.  
function sortArgs(...args){
returns args.sort();
}   
  
**Use of Spread Operator**  
```  
var number = [1,2,3];
var newNumber = [...number,4];
sonsole.log(mewNumber);// it will print 1,2,3,4 
```  
**Use of Split Operator**  
```  
const person {
name = "Sibaprasad";
} 

const newPerson{
...person;
age:28;
} 

// it is written using ES7 syntax.
```  
```  
const filter = (...args) => {
return args.filter(e1 => e1 ==1)
}
console.log(filter(1,2,3)); // it will print [1]  
```  
## Destructuring  
Destructuring means easily extract array elements or object properties and store them in variable.  
**Array Destructuring  
```  
[a,b] = ['Sibaprasad','mohanty']
console.log(a);  // It will print Sibaprasad
console.log(b); // it will print Mohanty
```  
**Object Destructuring  
```  
{name} = {name : "Siba", Age : 30}
console.log(name);  // It will print Siba
console.log(Age); // it will print 30
```  
  
**Example of Array Destructuring  
```  
[num1,num2] = [1,2,3]
console.log(num1,num2);  // It will print 1,2
[num1, ,num3] = [1,2,3]
console.log(num1,num3);  // It will print 1,3  
```  
  
**Example of Object Destructuring  
```  
[num1,num2] = [1,2,3]
console.log(num1,num2);  // It will print 1,2
[num1, ,num3] = [1,2,3]
console.log(num1,num3);  // It will print 1,3  
```    
## Reference and Primitive type reference

Number, boolean, float, integer are primitive types  
Objects and arrays are reference type   
  
const age =31;  
var value1 = age;  
here the value 31 is reassigned to value1  
  
const person {
 name = "Sibaprasad";
}  
