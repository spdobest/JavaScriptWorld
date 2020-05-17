# JavaScript DataStructure   
## List of Important Datastructure in Javascript
- Array
  - JavaScript arrays are used to store multiple values in a single variable.
  - Array can contain different datatype values like String, numbers, floating
  ```
      var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];  
  ```
  - Array can contains list of Javascript objects
  ```
      var arr1 = ["satya","satya"];
      var arr2 = new Array("satya","satya");
      var arr3 = ['satya','satya']; 
  ```
  - We can add custom objects to Javascript Array
  ```
     class Person{
            constructor(name,age,address){
                this.name = name;
                this.age = age;
                this.address = address;
            }
        }

      var personArray = new Array();
      personArray.push(new Person('Satya',33,"Odisha"));  
  ```
  - Javascript Array Methods
    - **toString()** - to convert the array object to to string. it will print like this([object Object],[object Object]]
    - **join()** - it will also convert the array to string, but it have more functionality
    ```
      var fruits = ["Banana", "Orange", "Apple", "Mango"];
      document.getElementById("demo").innerHTML = fruits.join(" * ");
      o/p = "Banana * Orange * Apple * Mango"
    ```
    - **split()** - is used to convert a string to array
    ```
        var name = "Siba prasad Mohanty";
        var arr = name.split(' ');  // it will split the string by space
        // output = ['siba','prasad','MOhanty']
    ```
    - **pop()** -  method removes the last element from an array
    - **push()** - method push one item to the  end of the array.
    - **shift()** - method removes the first array element and "shifts" all other elements to a lower index.
    ```
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.shift();            // Removes the first element "Banana" from fruits
    ```
    - The shift() method returns the string that was "shifted out".
    - **unshift()** method adds a new element to an array (at the beginning), and "unshifts" older elements
    - ```
        var fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
        output = ["Lemon","Banana", "Orange", "Apple", "Mango"]
      ```
    - The unshift() method returns the new array length.
    - **delete()** Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete
    - ```
        var fruits = ["Banana", "Orange", "Apple", "Mango"];
        delete fruits[0];           // Changes the first element in fruits to undefined
        O/P = [undefined,"Orange", "Apple", "Mango"];
      ```  
    - **splice()** - The splice() method can be used to add new items to an array
    - ```
        var fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.splice(2, 0, "Lemon", "Kiwi");
        O/P = [Banana,Orange,Lemon,Kiwi,Apple,Mango];
      ```
    - splice() - used to remove array element.
    - ```
        var fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.splice(0, 1);        // Removes the first element of fruits
      ```     
    - **concat()** - It is used to merge 2 arrays.
    - ```
        var myGirls = ["Cecilie", "Lone"];
        var myBoys = ["Emil", "Tobias", "Linus"];
        var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys
      ```  
    - Concat 3 arrays
    - ```
        var resArray = arr1.concat(arr2,arr3);
      ```  
    - **slice()** method slices out a piece of an array into a new array  
    - ```
        var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        var citrus = fruits.slice(1);
        O/P = Orange,Lemon,Apple,Mango
        var fr1 = fruits.slice(3); // it will remove first 3 elements
      ```
    - **slice()** method can take two arguments like slice(1, 3).
    - The method then selects elements from the start argument, and up to (but not including) the end argument.  
    - ```
        var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        var citrus = fruits.slice(1, 3);
        O/P = Orange,Lemon
      ``` 
## Sorting of Array
- **sort()** - it will sort the elements 
- **reverse()** - it will reverse the elements
- another sorting logic
- ```
  var points = [40, 100, 1, 5, 25, 10];
  points.sort(function(a, b){return a - b});
  ```
- To sort from higher to lower just use b-a in above function
- If the result is negative a is sorted before b.
- If the result is positive b is sorted before a.
- If the result is 0 no changes are done with the sort order of the two values.  
  
- **return Math.max.apply(null, arr);** - used to find the max number in array.
- **return Math.min.apply(null, arr);** - Used to find the min numver in array. 
## sorting custom array object
- ```var cars = [
      {type:"Volvo", year:2016},
      {type:"Saab", year:2001},
      {type:"BMW", year:2010}
  ];
  ```
- cars.sort(function(a, b){return a.year - b.year}); - use this function to sort cars by manufacturing year
  
## ARRAY iteration
- forEach
    - ```
        arr.forEach(element =>{
            // do the operatin you want
        });
      ```
    -  ```
        arr.forEach((element,index) =>{
          // do the operation here
        });
      ```
- for loop
  - using in
    ```
        for(let i in array){
          // here i is the index of each item
        }
    ```  
  - using of
    ```
        for(let item of array){
          // here item is the each item of array
        }
    ```  
- **Array.map()**
    - map() method creates a new array by performing a function on each array element
    - map() method does not execute the function for array elements without values.
    - map() method does not change the original array
    - ```
          var numbers1 = [45, 4, 9, 16, 25];
          var numbers2 = numbers1.map(myFunction);

          function myFunction(value, index, array) {
            return value * 2;
          }
      ```
- **Array.filter()**
    - The filter() method creates a new array with array elements that passes a test 
    - ```
          var numbers = [45, 4, 9, 16, 25];
          var over18 = numbers.filter(myFunction);
          
          function myFunction(value, index, array) {
            return value > 18;
          }
      ```
- **Array.reduce()**
  - The reduce() method runs a function on each array element to produce (reduce it to) a single value.
  - The reduce() method works from left-to-right in the array. See also reduceRight().
  - The reduce() method does not reduce the original array.
  - ```
      var numbers1 = [10, 10, 10, 10, 10];
      var sum = numbers1.reduce(myFunction);

      function myFunction(total, value, index, array) {
        return total + value;
      }
      now sum = 50;
    ```
- **Array.every()**
  - The every() method check if all array values pass a test.
  - It return true or false
  - ```
      var numbers = [45, 4, 9, 16, 25];
      var allOver18 = numbers.every(myFunction);

      function myFunction(value, index, array) {
        return value > 18;
      }
    ```
- **Array.some()**
  - The some() method check if some array values pass a test.   
- **indexOf()**
- **lastIndexOf()** - 
- **Array.find()**
  - The find() method returns the value of the first array element that passes a test function.
  - ```
      var numbers = [4, 9, 16, 25, 29];
      var first = numbers.find(myFunction);

      function myFunction(value, index, array) {
        return value > 18;
      }
    ```  
- **Array.findIndex()**
  
## JSON
- JSON data types
  - a string
  - a number
  - an object (JSON object)
  - an array
  - a boolean
  - null
- **JSON.parse()** - it convert the JSON string to json Object.
- **JSON.stringify()** - Use the JavaScript function JSON.stringify() to convert it into a string.
  - You can stringify an array also
  - ```
      var arr = [ "John", "Peter", "Sally", "Jane" ]
      var myJSON = JSON.stringify(arr);
    ```    
- **How to Iterate JSON object in Javascript**
  - ```
      var p = {
      "p1": "value1",
      "p2": "value2",
      "p3": "value3"
    };

    for (var key in p) {
        if (p.hasOwnProperty(key)) {
            console.log(key + " -> " + p[key]);
        }
    }
    ```
  - Another way
    ```
      for (const key of Object.keys(obj)) {
          console.log(key, obj[key]);
      }
    ```

Global Code — arrayWithCustomObject.html:28)

- Set
  - A set is a collection of items which are unique i.e no element can be repeated. 
  - Set in ES6 are ordered: elements of the set can be iterated in the insertion order. 
  - Set can store any types of values whether primitive or objects.
  - **How To initialize Set**
    - ```
        var set1 = new Set(["sumit","sumit","amit","anil","anish"]); 
  
        // it contains 'f', 'o', 'd' 
        var set2 = new Set("fooooooood"); 
          
        // it contains [10, 20, 30, 40] 
        var set3 = new Set([10, 20, 30, 30, 40, 40]); 
          
        // it is an  empty set 
        var set4 = new Set(); 
      ```  
  - **METHODS**
    - **add()** - It adds the new element with a specified value at the end of the Set object.
    - **delete()** - It deletes an element with the specified value from the Set object.
    - **clear()** - It removes all the element from the set.
    - **size()** - 
    - **entries()** - It returns an iterator object which contains an array having the entries of the set, in the insertion order.
    - **has()** - It returns true if the specified value is present in the Set object.
    - **values()** - It returns all the values from the Set in the same insertion order.
    - **keys()** – It also returns all the values from the Set in the insertion order.
    - **forEach()** – It executes the given function once for every element in the Set, in the insertion order.
    - 
- **Map**
  - The Map object holds key-value pairs and remembers the original insertion order of the keys. 
  - Any value (both objects and primitive values) may be used as either a key or a value.
  - **clear()** - 
  - **delete()** -
  - **entries()** -
  - **get()** -
  - **has()** -
  - **keys()** -
  - **values()** -
  - **set()** - 
  - ```
      let myMap = new Map();
      myMap.set(keyString, "value associated with 'a string'")
      myMap.set(keyObj, 'value associated with keyObj')
      myMap.set(keyFunc, 'value associated with keyFunc')

    ```  
  - Iteration
    ```
      for (let key of myMap.keys()) {
        console.log(key)
      }
    ```  

   ```
      for (let value of myMap.values()) {
        console.log(value)
      }
    ```

    ```
      for (let [key, value] of myMap.entries()) {
        console.log(key + ' = ' + value)
      }
    ```   
- Stack
  - Push → Add an element to the stack.
  - Pop → Delete an element from the stack.
  - Peek → Get the top element of the stack.
  - Length → Return the length of the stack.
  - Search → Search for the element in the stack.
  - IsEmpty → Check if the stack is empty.
  - Print → Print the elements of the stack.
  - ```
        class Stack {
            constructor(){
                this.data = [];
                this.top = 0;
            }
        }
    ```
  - data → Is an array in which we store the value.
  - top → Points to the top element index.
