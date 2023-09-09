/*This function gets the task from input*/
function get_todos() {
    /*This creates an array of tasks that are inputed*/
    var todos= new Array;
    /*this pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*If the input is not null then JSON.parse will communicate with the browser to make the task
    a JavaScript object.*/
    /*The null value represents the intentional absence of any object value (false)*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/*This function adds the inputed task to the get_todos function array*/
function add() {
    /*this takes the inputed task and creates a variable of it*/
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*This adds a new task at the end of the array */
    todos.push(task);
    /*This converts the task input to a JSON string*/
    //localStorage is a property that allows JavaScript sites and apps to save key-value 
    //pairs in a web browser with no expiration date. 
    //This means the data stored persists even after the user closes the browser or 
    //restarts the computer.
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    /*return false; statements are used to skip the currently executing function and return to the caller function*/
    return false;
}

/*this function keeps the tasks permanently displayed on the screen*/
function show() {
    /*this sets the task that was retrieved as a variable*/
    var todos = get_todos();

    /*This sets up each task as an unordered list*/
    var html = '<ul>';
    /*This displays a task to the list in the order that it is inputed */
    for (var i = 0; i < todos.length; i++) {
        /*this also displays the task as a list and creates the button with the "x"*/
        html += '<button class="remove" id="' + i + '">x</button>' + '<li>' + todos[i] + '</li>';
    };
    html += '<ul>';
    /*This displays the task as a list*/
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', removeItem);
    }
}

/*This displays the inputed task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*this will keep the inputs displayed permanently on the screen */
show();

//remove todo item from the list
function removeItem() {
    //Get the value of the id attribute of "this"
    //This references a global object
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    //setItem to store data in the brower
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}