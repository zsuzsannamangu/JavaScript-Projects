function concat_Function() { //The .concat() method adds strings together, concatenates them
    var a = "The console.log is a function in JavaScript "
    var b = "that is used to print any kind of "
    var c = "variables defined before in it."
    var sentence = a.concat(b, c);
    document.getElementById("concat").innerHTML = sentence;
}

function slice_Function() { //The .slice() method cuts a piece out of a string and returns it
    var a = "Successfully execute the index.html file in the browser."
    var full = a.slice(13, 20);
    document.getElementById("slice").innerHTML = full;
}

function uppercase_Function () { //The .toUpperCase() method makes your string all uppercase letters
    var a = "New Seasons Market";
    var b = a.toUpperCase();
    document.getElementById("uppercase").innerHTML = b;
}

function search_Function () { //The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.
    var a = "This is a not that long sentence."
    var b = a.search("not");
    document.getElementById("search").innerHTML = b;
}

function string_Function() { //The .toString() method converts a number to a string
    var a = 2344;
    document.getElementById("string").innerHTML = a.toString();
}

function precision_Function() { //The .toPrecision() method is used to format a number to a specific precision or length
    var a = 1234688.2372927393;
    document.getElementById("precision").innerHTML = a.toPrecision(13);
}

function fixed_Function() { //The .toFixed() method converts number into a string, and it rounds it to a specific number of decimals
    var a = 23.14443;
    document.getElementById("fixed").innerHTML = a.toFixed(2);
}

function valueof_Function() { //The valueOf() method returns the primitive value of a string.
    var a = 10 > 5;
    document.getElementById("value").innerHTML = a.valueOf();
}

