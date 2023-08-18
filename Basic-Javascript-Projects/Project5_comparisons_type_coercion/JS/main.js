document.write(typeof "Word"); //typeof operator displays data type, here output is string
document.write("<br>"); //new line
document.write(typeof 5.5);
document.write("<br>");
document.write("10" + 2); //type coercion
document.write("<br>");
document.write(0/0); //returns NaN because zero can't be divided by zero
document.write("<br>");
document.write(isNaN("Hello")); //returns true, because Hello is indeed not a number
document.write("<br>");
document.write(isNaN(5)); //returns false, because 5 is a number
document.write("<br>");
document.write(2E310); //displays Infinity
document.write("<br>");
document.write(-3E310); //displays negative Infinity
document.write("<br>");
document.write(10 > 2); //Boolean logic - true since 10 is greater than 2
document.write("<br>");
document.write(2 > 10); //Boolean logic - false since 2 is not greater than 10
document.write("<br>");

function displayInfinity() {
    var a = 2E322;
    var b = -2E345;
    document.getElementById("infinity").innerHTML = a; //too large numbers, it displays Infinity
    document.getElementById("infinity2").innerHTML = b; //displays negative Infinityxs
}

console.log(2+2);