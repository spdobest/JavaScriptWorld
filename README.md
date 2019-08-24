# JavaScript
Javascript documentation and programs  
  
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

    
    
    
    
    
