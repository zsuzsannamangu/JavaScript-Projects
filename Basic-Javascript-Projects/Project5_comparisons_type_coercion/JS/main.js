document.write("typeof practice:")
document.write("<br>"); //new line
document.write(typeof "Word"); //typeof operator displays data type, here output is string
document.write("<br>"); //new line
document.write(typeof 5.5);
document.write("<br>");
document.write("<br>");

document.write("10" + 2); //type coercion
document.write("<br>");
document.write("<br>");

document.write(0/0); //returns NaN because zero can't be divided by zero
document.write("<br>");
document.write(isNaN("Hello")); //returns true, because Hello is indeed not a number
document.write("<br>");
document.write(isNaN(5)); //returns false, because 5 is a number
document.write("<br>");
document.write("<br>");

document.write(2E310); //displays Infinity
document.write("<br>");
document.write(-3E310); //displays negative Infinity
document.write("<br>");
document.write("<br>");

document.write("Boolean logic:");
document.write("<br>");
document.write(10 > 2); //Boolean logic - true since 10 is greater than 2
document.write("<br>");
document.write(2 > 10); //Boolean logic - false since 2 is not greater than 10
document.write("<br>");
document.write("<br>");
document.write(10 == 10); //10 equals 10 so that's true
document.write("<br>");
document.write(5 == 3); //5 does not equal 3 so that's false
document.write("<br>");
document.write("<br>");

document.write("Triple Equal Signs Assignment:")
document.write("<br>");
X=82;
Y="12";
Z=82;
A="82";
B=22;
document.write(X===Z); //data type and value are the same, so it's true
document.write("<br>");
document.write(X === Y); //data type and value are both different, so it's false
document.write("<br>");
document.write(X===A); //data type is different, so it's false
document.write("<br>");
document.write(Z===B); //data type is the same, but the value is different, so it's false
document.write("<br>");
document.write("<br>");

document.write("Three Boolean logical operators: AND &&, OR ||, NOT !:");
document.write("<br>");
document.write(10 > 5 && 5 > 3); //when using the AND operator, both need to be true for it to be true
document.write("<br>");
document.write(10 > 5 && 5 > 6);
document.write("<br>");
document.write(!(10>5)); //This is the NOT operator
document.write("<br>");
document.write(!(5>10));
document.write("<br>");
document.write(10>5 || 5>10); //This is the OR operator, one needs to be true for it to be true
document.write("<br>");
document.write(2>4 || 1>5);

function displayInfinity() {
    var a = 2E322;
    var b = -2E345;
    document.getElementById("infinity").innerHTML = a; //too large numbers, it displays Infinity
    document.getElementById("infinity2").innerHTML = b; //displays negative Infinityxs
}

console.log(2+2); //displays in the console
console.log(2>5);