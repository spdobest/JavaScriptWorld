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

  
  
