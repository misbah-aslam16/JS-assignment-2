
//-------------------------- Question no 01 ------------------------//

var a = 10;

document.writeln("<br>Result:  <br>");
document.writeln("The value of a is:" + a +"<br>");
document.writeln(".....................................<br><br>")

a = ++a;
document.writeln("The value of ++a is:" + a +"<br>");
document.writeln("Now the value of a is:" + a +"<br><br><br>");

a = a++;
document.writeln("The value of a++ is:" + a++ + "<br>");
document.writeln("Now the value of a is:" + a + "<br><br><br>");

a = --a;
document.writeln("The value of --a is:" + a + "<br>" );
document.writeln("Now the value of a is:" + a + "<br><br><br>");

a = a--;
document.writeln("The value of a-- is:" + a-- +"<br>" );
document.writeln("Now the value of a is:" + a +"<br><br><br>");


//-------------------------Question no 02----------------------------//


var b = 2
var c = 1

document.writeln("The value of b is:" + b + "<br>");
document.writeln("The value of c is:" + c + "<br>");
document.writeln("Caculate  --b - --c + ++c + c--  =   ? <br><br>");


var stepOne = --b;
var stepTwo = stepOne - --c;
var stepThree = stepTwo + ++c;
var stepFour = stepThree +c--;

document.writeln(" --b is:" + stepOne + "<br>");
document.writeln(" --b - --c is:" + stepTwo + "<br>");
document.writeln("--b - --c + ++c is:" + stepThree + "<br>");
document.writeln(" --b - --c + ++c + c-- is:" + stepFour + "<br>");

var b = 2
var c = 1


var result = --b - --c + ++c +c--;
document.writeln("Result =" + result);

//-----------------------------Question no 03------------------------------//

var userName = prompt("Please enter your name:");
var greetingMessage = "Hello, " + userName;
alert(greetingMessage);

//------------------------------Question no 05--------------------------------//

var num = + prompt("Enter any number to display a Table : ");
var i;

for (i = 1; i <= 10; i++) {
    document.write(num, "  X ", i, " = ", num * i, "<br>");
}


//--------------------------Question no 06------------------------------------//

// Define marks for each subject
var mathematics = 98;
var computerScience = 94;
var english = 90;

// Calculate total marks
var totalMarks = mathematics + english + computerScience;

// Calculate percentage
var totalSubjects = 3;
var percentage = (totalMarks / (totalSubjects * 100)) * 100;

// Assign grade
let grade = "Fail";
if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
}

// Display marksheet
document.writeln("---------------------<br>");
document.writeln("--Student Marksheet--<br>");
document.writeln("---------------------<br>");
document.writeln("Mathematics:" + mathematics + "<br>");
document.writeln("English:" + english + "<br>");
document.writeln("Computer Science:" + computerScience + "<br>");
document.writeln("---------------------<br>");
document.writeln("Total Marks:" + totalMarks + "<br>");
document.writeln("Percentage is :" + percentage + "%<br>");
document.writeln("Your Grade is:" + grade + "<br>");
document.writeln("Congratulation! your percentage is " + percentage + " and your grade is " + grade + "<br>");
