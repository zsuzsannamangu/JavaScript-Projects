//The switch statement is a type of conditional statement. It checks whether any of the cases exist. If there is no case to match, the default keyword is used.

function dessert_Function() {
    let Dessert_output;
    let Desserts = document.getElementById("dessert_choice").value;
    let Dessert_string = " is delicious.";
    switch(Desserts) { //same name as variable above with the user input
        case "Cheesecake": //this is the first case the program check for, is the user input equals Cheesecake?
            Dessert_output = "Cheesecake" + Dessert_string; //using the defined variable from above that has no value, and the string that will finish the sentence.
        break;
        case "Chocolate":
            Dessert_output = "Chocolate" + Dessert_string;
        break;
        case "Ice cream":
            Dessert_output = "Ice cream" + Dessert_string;
        break;
        case "Brownie":
            Dessert_output = "Brownie" + Dessert_string;
        break;
        case "Bread pudding":
            Dessert_output = "Bread pudding" + Dessert_string;
        break;
        default: //if user input is none of the above, do this:
        Dessert_output = "Please write your response exactly as written above.";
    } 
    document.getElementById("Output").innerHTML = Dessert_output;
}

function classPractice_function() {
    var a = document.getElementsByClassName("Class_practice");
    a[1].innerHTML = "This is some text.";
}

function my_Canvas() {
    const myCanvas = document.getElementById("canvas_Id");
    const ctx = myCanvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 200);
    ctx.lineTo(450, 200);
   

    const gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0.25", "coral");
    gradient.addColorStop("0.5", "DarkRed");
    gradient.addColorStop("0.75", "DarkKhaki");

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 5;
    ctx.strokeRect(20, 20, 150, 100);
    ctx.stroke();

    ctx.font = "50px Helvetica";
    ctx.strokeText("Hello", 38, 85);
}

function my_Picture() {
    const myCanvas = document.getElementById("picture_id");
    const ctx = myCanvas.getContext("2d");

    var img = document.getElementById("pictureimg");
    ctx.drawImage(img, 50, 20);
}