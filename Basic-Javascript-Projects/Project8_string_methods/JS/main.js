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

function uppercase_Function () {
    var a = "New Seasons Market";
    var b = a.toUpperCase();
    document.getElementById("uppercase").innerHTML = b;
}

function search_Function () {
    var a = "This is a not that long sentence."
    var b = a.search("not");
    document.getElementById("search").innerHTML = b;
}

function string_Function() {
    var a = 2344;
    document.getElementById("string").innerHTML = a.toString();
}

function precision_Function() {
    var a = 1234688.2372927393;
    document.getElementById("precision").innerHTML = a.toPrecision(13);
}

function fixed_Function() {
    var a = 23.14443;
    document.getElementById("fixed").innerHTML = a.toFixed(2);
}

function valueof_Function() {
    var a = 10 > 5;
    document.getElementById("value").innerHTML = a.valueOf();
}

