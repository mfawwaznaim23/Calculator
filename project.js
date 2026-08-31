let number = document.querySelectorAll(".number");
let op = document.querySelectorAll(".operator");
let operator2 = "";
let operator1 = "";
let operator4 = "";
let variable = "";
let variable1 = "";
let variable2 = "";
let variable3 = "";
let counter_op = 0;
let counter_num = 0;
let result = 0;
let resbox = document.querySelector(".resultbox");
let restex = document.createElement("div");
let num1 = 0;
let num2 = 0;
restex.classList.add("ben");
resbox.appendChild(restex);


function num(button) {
    let val = document.createElement("div");
    val.classList.add("ben");
    if (operator1 == "") {
        variable1 = variable1 + button.textContent;
        val.textContent = button.textContent;
        resbox.appendChild(val);
        console.log(variable1);
    }
    else {
        variable2 = variable2 + button.textContent;
        val.textContent = button.textContent;
        resbox.appendChild(val);
        console.log(variable2);
    }







};
function operator(button) {
    let op_a = document.createElement("div");
    op_a.classList.add("ben");
    operator4 = button.textContent;
    if (operator4 == "C") {
        let os = document.querySelectorAll(".ben");
        os.forEach(function (but) {
            but.remove();
        })
        operator4 == "";
        variable1 = "";
        variable2 = "";
        operator1 = "";
        operator2 = "";
    }
    else if (variable1 == "") {

    }
    else if (variable1 != "" && variable2 == "") {

        operator1 = button.textContent;
        console.log(operator1);
        if (operator1 != "=") {

            op_a.textContent = button.textContent;
            resbox.appendChild(op_a);
        }

    }
    else if (variable1 != "" && variable2 != "") {
        operator2 = button.textContent;
        if (operator2 == "=") {
            let os = document.querySelectorAll(".ben");
            os.forEach(function (but) {
                but.remove();
            })

            result = operator3(operator1, variable1, variable2);
            console.log(result);
            op_a.textContent = result;
            resbox.appendChild(op_a);

            variable1 = result;
            variable = "";
            variable2 = "";
            operator1 == "";
        }
        else if (operator2 != "=") {

            result = operator3(operator1, variable1, variable2);
            operator1 = operator2;
            operator2 = "";
            console.log(result);
            console.log(operator1);
            op_a.textContent = operator1;
            resbox.appendChild(op_a);
            variable1 = result;
            variable = "";
            variable2 = "";

        }


    }




};
number.forEach(function (button) {
    button.addEventListener("click", function () {
        num(button);

    })
});

op.forEach(function (button) {
    button.addEventListener("click", function () {
        operator(button);
    })
});


function operator3(op, a, b) {
    num1 = Number(a);
    num2 = Number(b);
    switch (op) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num1 / num2;
    }

}

