# JavaScript
Javascript documentation and programs  
  
### Links    
https://github.com/jonasschmedtmann/complete-javascript-course/tree/master/3-how-JS-works  
  
## Introduction to javascript   

* JavaScript is a programming language, which is used to create functionality in the web page
Functionality means, receiving inputs from the user and providing output to the user"  
  
* It can perform tasks such as calculations, decision making, repetitive tasks, dynamically displaying
the output, reading inputs from the user dynamically, updating content on the web page based on
the inputs, interacting with server, validations etc.  

* It's operators and control statements are similar to C Language 

* JavaScript is client-side (browser-side) language. That means it executes on the browser. It can also  be used in server by using Node JS.  

* JavaScript is a case sensitive language  

* It is Interpreter based language. That means the code will be converted to machine language line by line  
* It is developed by Netscape Corporation in 1996.  
* It is implementation of Ecmascript. Ecmascript is the specication of Javascript.  
* Initially it was called as Live Script before named as Javascript.  

## Syntax of Javascript  
<script type "text/javascript">  
// Your Javascript codes are here  
</script>  
  
** NOTE : You can write <script> </script> inside <head> or <body>, But its Recomended to write inside <body>  </body> . You can write multiple  <Script> </script>. **  
  
### console.log()  
console.log() is used to print message/log in the browser console.  
console.log("Message type here")  
  
### OPERATORS In JAVASCRIPT   
* Arithmatic Operator **( + , - , * , / , % )**  
* Assignment Operator **( = , += , -= , *= , /= , %= )**  
* Increment Decrement Operator **( ++ , -- )** 
* Logical Operator **( && , || , ! )**  
* Concat Operator **( + )**  

***ALL THE OPERATOR EXAMPLES ARE WRITTEN IN OPERATOR PACKAGE IN SOURCE CODE***  

### CONTROL STATEMENT  
* **IF ELSE**  
* **SWITCH STATEMENT**  
* **WHILE LOOP**  
* **DO WHILE LOOP**  
* **FOR LOOP**   
  
#### IF ELSE  
Its same as other programming language like java, python etc.  
type of If  
1. If  
2. if else    
3. else if  


           ```
            var name = document.getElementById('name').value;  
            var ageStr = document.getElementById('age').value;
            var age = parseInt(ageStr);

            if(age<=20){
                document.getElementById("details").innerHTML = name+" Have ENERGY AND TIME BUT NO MONEY";
            }
            else if(age>20 || age<40){
                document.getElementById("details").innerHTML = name+" Have ENERGY AND MONEY BUT NO TIME";
            }
            else{
                document.getElementById("details").innerHTML = name+" Have MONEY AND TIME BUT NO ENERGY";
            }```
#### SWITCH CASE  
its take one value as input and check if it matches with other values in the case inside the switch statement  
  
  
    ```
    <script language="javascript">
        function getDetails(){
            var name = document.getElementById('name').value;
            var standard = document.getElementById('standard').value;

            var sub1 = parseInt(document.getElementById('sub1').value);
            var sub2 = parseInt(document.getElementById('sub2').value);
            var sub3 = parseInt(document.getElementById('sub3').value);
            var sub4 = parseInt(document.getElementById('sub4').value);

            var percentage = sub1+sub2+sub3+sub4;

            document.getElementById("pName").innerHTML = "Name : "+name
    document.getElementById("pStandard").innerHTML = "Name : "+standard

            switch (true) {
    case (total >= 90):
    
    document.getElementById("grade").innerHTML = "GRADE  : OUTSTANDING"
        break;
    case (total >= 80): 
    document.getElementById("grade").innerHTML = "GRADE  : EXCELENT"
        break;
    case (total >= 70):
    document.getElementById("grade").innerHTML = "GRADE  : AVERAGE"
        break;
        case (total >= 60):
    document.getElementById("grade").innerHTML = "GRADE  : BELOW AVERAGE"
        break;
        default :
        document.getElementById("grade").innerHTML = "GRADE  : PASS"
            }
        }
    </script>```  

#### WHILE LOOP  
In while loop it first check the condition then execute the code inside the while loop.  
    
    
    ```
         <script language="javascript">
        function getDetails(){
            var num = document.getElementById('factorial').value; 
            var result = 1;
            while(num>=1){
                result*=num;
                num--;
            }
            document.getElementById('txtFact').innerHTML = "Factorial of the Above Number is "+result;
        }
    </script>```
       
   
#### DO WHILE LOOP  
Its do same as while loop but , first it execute the code and then check the condition  


    ```

    <script language="javascript">
        function getDetails(){
            var num = document.getElementById('factorial').value; 
            var result = 1;
            while(num>=1){
                result*=num;
                num--;
            }
            document.getElementById('txtFact').innerHTML = "Factorial of the Above Number is "+result;
        }
    </script>```  
 
####  FOR LOOP  
->For Loop mostly same as while loop.  
->The difference is, while loop have initialization, condition, and increment and decrement in different places. But in for loop initialization, condition check and increment decrement in one line  
  
  
    ```
    <script language="javascript">
        function getDetails(){
            var num = document.getElementById('factorial').value; 

            var result = 1;
            for(var i = 1;i<=num;i++){
                result*=i; 
            } 
            document.getElementById('txtFact').innerHTML = "Factorial of the Above Number is "+result;
        }
    </script>```

### FUNCTION  
* Function is a reusable block in the program which is a set of statements with a name  
* A larger program can be devided into too many parts, all individual parts is known as functions  
* Functions are reusable that means we can call a function any number time and anywhere in the program.  
      
      ```
      <script language="javascript">
        function printMyName(name){
            conole.log('My name is '+name);
        }
        function printMyCountry(){
           document.getElementById('txtFact').innerHTML = "My Country Name is INDIA";
        }
        function printMyCity(){
           document.getElementById('txtFact').innerHTML = "My City  Name is BHUBANESWAR";
        }
      </script>```

#### Recursion  
It is a techniques to call the function itself in  loop  

    ```
        <script language="javascript"> 
        function factorial(num){ 
            if(num == 0)
            return 1;
            else{ 
                return num*factorial(num-1);
            }
        } 
        document.getElementById('txtFact').innerHTML = "Factorial of the Above Number is "+factorial(5);
    </script>```

#### ARRAY Example  
* Array is a collection of multiple values  
* The number of element present in the array is known as Size of the Array  
* We can retrieve the values from the array using the index of the array which is starts with 0 and ends at size-1  
* For example you can store the list of friends in an array  
* In javascript there is no rule to maintain "SAME TYPE " value in an array.You can store any type of values in array. You can differ the values 

Create an array : var arrayName = ["Siba",123,123.23];    
set the values : arrayName[0] = 6;  
Get the values : arrayName[1];  
Add the new element to the Array : arrayName.push(111);  
Removing the existing Element : arrayName.splice(index, No. of element to remove);  

### Object Oriented Programming in javascript  
* In this Object oriented programming, everything considered as Object.  
* Object represent as a Object/ real time object in real world.  
* Object is a collection of 2 types of parameters 
**1. Properties/ Fields -** Details about the object which is stored  variables inside object.  
**2. Methods** Manupalation on the variables. Each object have functionality. Like, Dog have some Function like barking.  
Example  
Lets Consider Car as an Object  
It have properties like  
1. Name Of the Car  
2. Model Number.  
3. Company Name  
4. Model Number  

It also have some Methods  
1. Start()  
2. Stop()  
3. ChangeGear()  
  
There are 2 types of Object oriented Programming   
1. Class Based Object oriented Programming  
2. Prototype Based Programming  
  
We can create Object by 2 methods  
1. Object Literals - You cn see the Example In objectOriented package  
2. Constructor Based - You cn see the Example In objectOriented package  

#### Object Literals  
    ```
    
    var stu = {studentId:12,StudentName:"Siba",TotalMark:80};  
    console.log(stu);  
    console.log("Name of Student is "+stu.StudentName)```
    
#### Object Creation Using Constructor  
Its old concept. Now in ECMASCRIPT , we use class to create object   

    ```
      function Student(a,b,c){
        this.studentId = a;
        this.studentName = b;
        this.studentMark = c;
        this.result = function(){
            if(this.studentMark>40){
                return "Pass";
            }
            else{
                return "Fail";
            }
        };
    } 

    var student1 = new Student(12,"Sibaprasad",99);

    console.log("Name of the Student is "+student1.studentName);
    console.log("ID of the Student is "+student1.studentId);
    console.log("Result of the Student is "+student1.result());
    ```  
 #### Object KEY  
 Object.key is used to access different Properties of an object  . In the above example, there are few object keys like studentname,studentMark etc.  
 
### JSON  
It stands for JAVASCRIPT OBJECT NOTATION  
Its similar to Object Literals  Except the below differences  
1. Object Literals Double quotes are optional for the keys , but in JSON double quotes are complosury for Keys  
2. In Object Literals, we can write Functions() , but in JSON, functions are not allowed.  
  
**JSON mainly used to exchange data over the network, server to browser and vice versa.ALso it can store local storage and session storage**  
**SYNTAX**  
{"name":"Siba","age":29,"city":"Bhubaneswar"};  
  
### stringify  
The JSON.stringify() is used to convert Object Literals to JSON format.JSON is a text format which follows Javascript Object Literals Syntax. JSON is mainly used to store or exchange data between Browser and Server  
**SYNTAX**    
JSON.stringify(object Reference);  
**EXAMPLE**  
JSON.stringify(student);  
  
### JSON.Parse  
parse method is used to convert JSON to Object literals  
**parse SYNTAX**  
JSON.parse(json String);  

### Undefined Vs Null  
"undefined" represents "empty value", which is by default to assigned to every uninitial  
  
variables. The developer is not supposed to assign "undefined" manually.   
null" represents "empty value", which can be assigned by the developer  
The datatype of undefined" is "undefined"  
The datatype of "null" is "object".  

Syntax of undefined: undefined  
Syntax of null:  
null  
  
### Parse Functions  
**1. ParseInt(String) -** It converts String to integer  
**2. ParseFloat(String) -** It converts String to float.  
var intNum = parseInt('123');
var floatNum = parseFloat('123.123');  
  
### toFixed()  
It is used to convert a number to String with defined number of decimal places  
var abs = 123.toFIxed(2); // output is - 123.00  
  
### String Functions  
There are number of string functions used in javascript. Here are the list and their use  
**1. string.length -** It will print the length of the string  
**2. string.indexOf('name') -** It will print the length of the string  
Example  
var str = "Please locate where 'locate' occurs!";  
var pos = str.indexOf("locate");  
**3. string.lastIndexOf('name') -** Same as above, but it will print the last position in the string  
***NOTE: Both indexOf(), and lastIndexOf() return -1 if the text is not found.***  
**4. string.search('string') -** search() method searches a string for a specified value and returns the position of the match:  
// Extracting String Parts  
**5. slice(start, end) -** 
**6. substring(start, end) -**  
**7. substr(start, length) -**  
**8. replace** The replace() method replaces a specified value with another value in a string  
**9. toLowerCase()*** A string is converted to lower case  
**10. toUpperCase()*** A string is converted to lower case  
**11. concat()** joins two or more strings  
**12. trim()** removes space after and before string  
**13. charAt(int position)**   
**14. charCodeAt(int position)**  
**15. split('')** It will convert string to array of strings  

### Number Functions  
**1. toString()** - It convert number to string  
**2. toExponential() -** returns a string, with a number rounded and written using exponential notation.  
**3. toFixed() -**  returns a string, with the number written with a specified number of decimals.  
**4. toPrecision() -**  returns a string, with a number written with a specified length  
**5. valueOf() -**  returns a number as a number.
**6. Number() -**	Returns a number, converted from its argument.
**7. parseFloat() -**	Parses its argument and returns a floating point number
**8. parseInt() -**	Parses its argument and returns an integer
**9. toString** - It convert number to string   
  
***There few Properties in Number.***  
  
***MAX_VALUE***	Returns the largest number possible in JavaScript
***MIN_VALUE***	Returns the smallest number possible in JavaScript
***POSITIVE_INFINITY***	Represents infinity (returned on overflow)
***NEGATIVE_INFINITY***	Represents negative infinity (returned on overflow)
***NaN***	Represents a "Not-a-Number" value  
  
### Array Functions  
**1.toString() -** converts an array to a string of (comma separated) array values.  
**2. join() -** method also joins all array elements into a string.  
**3. pop() -** method removes the last element from an array.  
**4. push() -** method adds a new element to an array (at the end).  
**5. shift() -** method removes the first array element and "shifts" all other elements to a lower index.  
**6. unshift() -** method adds a new element to an array (at the beginning), and "unshifts" older elements.  
**7. length -** property provides an easy way to append a new element to an array.  
**8. splice() -** method can be used to add new items to an array.  
var fruits = ["Banana", "Orange", "Apple", "Mango"];  
fruits.splice(0, 1);        // Removes the first element of fruits  
**9. concat() -** method creates a new array by merging (concatenating) existing arrays.  
**10. slice() -** method slices out a piece of an array into a new array.  
**11.**  
### Array Iteration   
**Array.forEach()** method calls a function (a callback function) once for each array element.  
var numbers = [45, 4, 9, 16, 25];  
numbers.forEach(myFunction);  
  
**Array.map()**  
* This method creates a new array by performing a function on each array element.    
* This method does not execute the function for array elements without values.  
* This method does not change the original array.  
  
**Array.filter()**
The filter() method creates a new array with array elements that passes a test.   
Example  
var numbers = [45, 4, 9, 16, 25];  
var over18 = numbers.filter(myFunction);  
  
**Array.reduce()**  
The reduce() method runs a function on each array element to produce (reduce it to) a single value.  
The reduce() method works from left-to-right in the array. See also reduceRight().  
  
var numbers1 = [45, 4, 9, 16, 25];  
var sum = numbers1.reduce(myFunction);    
  
**Array.reduceRight()**  
The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.  
The reduceRight() works from right-to-left in the array. See also reduce().    
  
**Array.every()**  
The every() method check if all array values pass a test.   
Example  
var numbers = [45, 4, 9, 16, 25];  
var allOver18 = numbers.every(myFunction);   
  
**Array.some()**  
The some() method check if some array values pass a test.  
  
**Array.indexOf()**  
The indexOf() method searches an array for an element value and returns its position.  
var fruits = ["Apple", "Orange", "Apple", "Mango"];  
var a = fruits.indexOf("Apple");  
  
**Array.lastIndexOf()**  
Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.  
  
Example
Search an array for the item "Apple":  
  
var fruits = ["Apple", "Orange", "Apple", "Mango"];  
var a = fruits.lastIndexOf("Apple");  
  
**Array.find()**  
The find() method returns the value of the first array element that passes a test function.  

This example finds (returns the value of) the first element that is larger than 18:

Example
var numbers = [4, 9, 16, 25, 29];  
var first = numbers.find(myFunction);  
function myFunction(value, index, array) {  
  return value > 18;  
}  
  
**Array.findIndex()**  
The findIndex() method returns the index of the first array element that passes a test function.  
This example finds the index of the first element that is larger than 18:  
Example  
var numbers = [4, 9, 16, 25, 29];  
var first = numbers.findIndex(myFunction);  
  
function myFunction(value, index, array) {  
  return value > 18;  
}  
  
### Date()  
Its used to show dates in different formats. There are lots of date functions in javascript. You can see the methods in the example done the source code  
  
    ```
    var dt = new Date();
        document.getElementById("date").innerHTML = "DATE IS "+dt;
        document.getElementById("date1").innerHTML = "TO LOCALDATE STRING IS "+dt.toLocaleDateString();
        document.getElementById("date2").innerHTML = "TO LOCALTIME STRING IS "+dt.toLocaleTimeString();
        document.getElementById("date3").innerHTML = "DAY IS "+dt.getDay();
        document.getElementById("date4").innerHTML = "getDate() "+dt.getDate();
        document.getElementById("date5").innerHTML = "getMonth() "+dt.getMonth();
        document.getElementById("date6").innerHTML = "getFullYear() "+dt.getFullYear();
        document.getElementById("date7").innerHTML = "getHours() "+dt.getHours();
        document.getElementById("date8").innerHTML = "getMinutes() "+dt.getMinutes();
        document.getElementById("date9").innerHTML = "getSeconds() "+dt.getSeconds();
        document.getElementById("date10").innerHTML = "getMilliSeconds() "+dt.getMilliseconds();
        document.getElementById("date11").innerHTML = "getHours() "+dt.getHours();
        document.getElementById("date12").innerHTML = "getHours() "+dt.getHours();
        ```
  
 ## ADVANCED JAVASCRIPT  
   
### Clousers  
It is used to create private variables which will have access to set of methods only.  
**SYNTAX**  
var functionName = function(){
var variableName = value;  
return
}  
  
method:function(){  
code  
},  
  
method:function(){  
code  
},  

};
};  

  
### DOM  
DOM (Document Object Model) is the tree structure of html elements (tags) that are present the web page  
  
When the web page has been opened in the browser, DOM will be automatically create browser.  
• The changes made to DOM are called as "pol manipulation DOm manipulations are performed using JavaScript.  
The entire browser window is called as "window The webpage running on the browser is "document". It has only one main element called htm it has two children shead and There are many children for both <head> and <body>.  
    
![alt tag](https://github.com/spdobest/JavaScript/blob/master/Images/dom.png)      
  
### WINDOW  
Window Object represent entire browser Window  
It has the following methods and properties  
**1. location.href -**  window.location.href - It represent the current url of the browser window  
**2. navigation.userAgent -** This property represent the name of the current browser     
**3. Screen -** window.navigator.screenX,window.navigator.screeny - It represent the position of x in the browser screen     
**4. alert -** window.alert("Message"); It will show alert dialog in the window  
**5. confirm -** window.confirm("message"); it will show confirm dialog iwth ok and cancel button, It returns true, if the user clicks okay, and return false if the user clicks cancel    
var result = window.confirm("Do you want to delete ?");
if(result){  
// code to delete  
}  
else{  
// dont delete  
}  
**6. print -** window.print(); it will show printer dialog     
**7. setTimeOut -**  This method calls the specified function, after completion of specified no. of millis  
Note: 1000 milli seconds 1 second  
  
***Syntax  
window.setTimeout(function, milliseconds)***    
**8. setInterval -**  
his method calls the specified function repeatedly, for every completion of specified no. of milliseconds.  
***Syntax:
Window.setinterval(function, milliseconds)***
**9. scroll -** It will scroll the window horizontally or vertically.  
Syntax - window.scroll(x,y);  
**10. open -** It will open a child window in browser. It is mainly used for Add.  
  
### DOCUMENTS  
The document object represent the current working webpage  
It has properties and methods to manipulate webpages  
  
***1. Title***  Represent the title   
***2. Head***  Represent the Head  
***3. Body*** Represent the Body  
***4. image*** Represent the Image   
***5. Links*** Represent the Links   
***6. URL*** Represent the URL  
  
***7.document.write("Message")***
***8.document.getElementById("id")***
***9.document.getElementByName("name")***
***10.document.getElementByTagName("tag name")***
***11.document.getElementByClassName("class name")***  
***12.document.querySelector()***  
***13.document.querySelectorAll()***  
***14.document.write("Message")***  
  
### ELEMENTS  
It represents a single tag  
It has properties and methods to manipulate the elements.  
**1.TAG NAME** It represent the name of the TAG.  
document.getElementById('id').tagName;  
**2. id** It represent the id Of the tag.  
document.getElementById('id').id;  
**3. innerHTML*** The property represent the content of the TAG.  
document.getElementById('id').innerHTML;  
***4. innerText** It represent the content of the tag without tags  
document.getElementById('id').innerText;  
  
### style 
The property represents CSS styles of the TAG.  


### THERE ARE SOME OTHER PROPERTIES   
SCROLLTOP
setAttribute
getAttribute  
removeAttribute  
hasAttribute  
focus  
click  
remove  
createElement  
appendChild  
  
### LIST OF EVENTS  
**1. CLICK** 
**2. dbClick**   
**3. mouseOver**  
**4. mouseOut** 
**5. mouseMove** 
**6. keyUp** 
**7. keyPress** 
**8. focus** 
**9. blur** 
**10. change** 
**11. contextMeu** 
**12. cut** 
**13. copy** 
**14. paste** 
**15. CLICK** 
**16. CLICK** 
**17. CLICK** 
  
### VALIDATIONS  
Validation is a process of checking the form input values wheather the provided values are corrent or not  
If all the input values are correct then only we will allow the form to be submitted.  
If any of the input values are not correct then we will stop submitting the form and show some error  
we use event.preventDefault() method to show the error  

### TYPES OF JAVASCRIPT    
**1. Internal Javascript** Its included inside the body tag of html file,  
**2. External Javascript** Its a separate .js file, which included inside the htmlfile by using src tag  
  
<body>  
   <script src="javascriptFile.js"> </script>  
</body>   
  
# Introduction to Javascript 6 (ECMSCRIPT 6) 
In 2015 , javascript 6 was realesed with below new features. Its looks same as java.  
Javascript 6 is the superset of javascript 5  
Below Features are available  
**1.Class, 2.Inheritance  3.MethodOverriding  4.get and set methods  5.default Argument  6.Arrow Function  7.let  8.Const 9.rest  10.destructuring  11.Multiline String  12.String interpolation 13. reading values from Array**  
  
### How Javascript Works in Browser  
  
Every JS code run in an environment known as Execution context. It is a box , a container or a wrapper which stores variables and in which a piece of our code is evaluated and executed.  
**GLOBAL EXECUTION CONTEXT**  
Javascript code that is not inside any function resides inside the GLobal execution context.  
Associated with global object in browser thats known as window object.  
  
var name = "SIba"; same as window.name = "Siba"  
  
  
  


    
