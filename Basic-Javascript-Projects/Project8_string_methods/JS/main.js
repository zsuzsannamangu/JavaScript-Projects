function concat_Function() {
    var a = "The console.log is a function in JavaScript "
    var b = "that is used to print any kind of "
    var c = "variables defined before in it."
    var sentence = a.concat(b, c);
    document.getElementById("concat").innerHTML = sentence;
}

function slice_Function() {
    var a = "Successfully execute the index.html file in the browser."
    var full = a.slice(13, 20);
    document.getElementById("slice").innerHTML = full;
}

