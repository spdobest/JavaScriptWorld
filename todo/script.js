<script>

var list = document.getElementById("todo-list");

function changeText2() {
    var firstname = document.getElementById('todo-entry-box').value; 
    console.log(firstname);
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(firstname));
    list.appendChild(entry);
}

</script>