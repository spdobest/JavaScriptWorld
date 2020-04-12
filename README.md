# JavaScript Basics 
JavaScript is the programming language of HTML and the Web.  
https://stackoverflow.com/questions/30039512/how-to-view-my-html-code-in-browser-with-visual-studio-code 
##  JavaScript Course Link 
https://www.youtube.com/watch?v=Qqx_wzMmFeA
##  JAVASCRIPT IDE
- Visual Studio code
- add the below code in task.json file  
```
    {
        "version": "0.1.0",
        "command": "Chrome",
        "osx": {
            "command": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
        },
        "args": ["${file}"]
    }
```
https://www.webucator.com/blog/2016/06/launch-files-browser-visual-studio-code/

## Why yopu need javascript ?
JavaScript is one of the 3 languages all web developers must learn:  
- HTML to define the content of web pages
- CSS to specify the layout of web pages
- JavaScript to program the behavior of web pages 
  
Web pages are not the only place where JavaScript is used. Many desktop and server programs use JavaScript. Node.js is the best known. Some databases, like MongoDB and CouchDB, also use JavaScript as their programming language.  
  
## What can be done using Javascript ?
- JavaScript Can Change HTML Content 
    - document.getElementById("demo").innerHTML = "Hello JavaScript";
- JavaScript Can Change HTML Attribute Values
    ```
    <!DOCTYPE html>
        <html>
        <body>

        <h2>What Can JavaScript Do?</h2>

        <p>JavaScript can change HTML attribute values.</p>

        <p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

        <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

        <img id="myImage" src="pic_bulboff.gif" style="width:100px">

        <button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

        </body>
        </html>
    ```
    - JavaScript Can Change HTML Styles (CSS)
        - document.getElementById("demo").style.fontSize = "35px";
    - JavaScript Can Hide HTML Elements
        - document.getElementById("demo").style.display = "none";
    - JavaScript Can Show HTML Elements
        - document.getElementById("demo").style.display = "block";
            
## The <script> Tag
- In HTML, JavaScript code is inserted between <script> and </script> tags.
    ```
        <script>
        document.getElementById("demo").innerHTML = "My First JavaScript";
        </script>
    ```    

## JavaScript Output
**JavaScript can "display" data in different ways:**  
  
- Writing into an HTML element, using innerHTML.
    ```
        <p id="demo"></p>

        <script>
        document.getElementById("demo").innerHTML = 5 + 6;
        </script>
    ```
- Writing into the HTML output using document.write().
    ```
        <script>
            document.write(5 + 6);
        </script>
    ```
- Writing into an alert box, using window.alert().
    ```
        <script>
            window.alert(5 + 6);
        </script>
    ```
- Writing into the browser console, using console.log().
