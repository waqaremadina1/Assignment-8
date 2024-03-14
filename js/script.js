    document.getElementById("name").onclick = function () {
    let fullName = "Waqar Ahmad"
    alert (fullName)
    let statement = "alert ('Waqar Ahmad')"
    document.getElementById("statement").innerHTML = statement;
}

    document.getElementById("number").onclick = function () {
    alert (1324567890)
    let statement = "alert (1234567890)"
    document.getElementById("statement").innerHTML = statement;
}

document.getElementById("variables").onclick = function () {
    let html = "<ul> <li>A variable name can't contain any spaces. </li> <li>A variable name can contain only letters, numbers, collar signs, and underscores.</li> <li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, <code>userAlert</code> and <code>myVar</code> are legal.</li> <li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>, if you assign the string Floribundas to the variable <code>rose</code>, and then ask JavaScript for the value assigned to <code>Rose</code>, you'll come up empty.</li>"
    document.getElementById("statement").innerHTML = ""; 
    document.getElementById("output").innerHTML = html;
}

document.getElementById("camelcase").onclick = function () {
    let html = "<h3>Examples</h3> <ul> <li><code>user</code></li> <li><code>userResponse</code></li> <li><code>userResponseTime</code></li> <li><code>userResponseTimeLimit</code></li> </ul>"
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = html;
}

document.getElementById("sum").onclick = function () {
    let num1 = 30;
    let num2 = 20;
    let sum = num1 + num2;

    document.getElementById("output").innerHTML = "<p class = 'text-center'>" + sum + "</p>";

    let statement = "let num1 = " + num1 + "; <br> let num2 = " + num2 + "; <br> let sum = num1 + num2;"

    document.getElementById("statement").innerHTML = statement;
}

document.getElementById("sub").onclick = function () {
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    let num1 = 30;
    let num2 = 20;
    let subtract = num1 - num2;

    document.getElementById("output").innerHTML = "<p class = 'text-center'>" + subtract + "</p>";

    let statement = "let num1 = " + num1 + "; <br> let num2 = " + num2 + "; <br> let subtract = num1 - num2;"

    document.getElementById("statement").innerHTML = statement;
}

document.getElementById("mul").onclick = function () {
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    let num1 = 20;
    let num2 = 5;
    let multiply = num1 * num2;

    document.getElementById("output").innerHTML = "<p class = 'text-center'>" + multiply + "</p>";

    let statement = "let num1 = " + num1 + "; <br> let num2 = " + num2 + "; <br> let multiply = num1 * num2;"

    document.getElementById("statement").innerHTML = statement;
}

document.getElementById("divide").onclick = function () {
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    let num1 = 40;
    let num2 = 4;
    let divide = num1 / num2;

    document.getElementById("output").innerHTML = "<p class = 'text-center'>" + divide + "</p>";

    let statement = "let num1 = " + num1 + "; <br> let num2 = " + num2 + "; <br> let divide = num1 / num2;"

    document.getElementById("statement").innerHTML = statement;
}

document.getElementById("calculate").onclick = function () {
    
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    let someCalculation = 45 / 5 * 2 + 4 ** 6 - (6 +3 );

    document.getElementById("output").innerHTML = "<p class = 'text-center'>" + someCalculation + "</p>";

    let statement = "let someCalculation = 45 / 5 * 2 + 4 ** 6 - (6 +3 );" 

    document.getElementById("statement").innerHTML = statement;
}

document.getElementById("clearStatementButton").onclick = function () {
    document.getElementById("statemant").innerHTML = "";
}

document.getElementById("clearOutputButton").onclick = function () {
    document.getElementById("output").innerHTML = "";
}