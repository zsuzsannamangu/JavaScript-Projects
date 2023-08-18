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