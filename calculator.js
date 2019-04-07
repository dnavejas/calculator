let x = []

let y = []

$(":button").click(function() {
    let main_input = $("#display");

    let fired_button = $(this).val();

    if (fired_button === "AC") {
        
        main_input.val(0);

    }
    else if (fired_button !== "=") {

        main_input.val(main_input.val() + fired_button);

    } 
    else {

        cal(main_input.val())
    }
});

function add(x, y){

    return parseInt(x) + parseInt(y);
}

function subtract(x, y){
    return parseInt(x) - parseInt(y);
}

function divide(x, y){
    return parseInt(x) / parseInt(y);
}

function multiply(x, y) {
    return parseInt(x) * parseInt(y);
}

$("button").click(function() {
    var fired_button = $(this).val();
    alert(fired_button);
});

function splitValue(value, index) {
    return value.substring(0, index) + "," + value.substring(index);
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function divide (x,y) {
    return parseInt(x) / parseInt(y);
}

function subtract (x,y) {
    return parseInt(x) - parseInt(y);
}

function multiply(x,y) {
    return parseInt(x) * parseInt(y);
}

function add(x, y) {
    return parseInt(x) + parseInt(y);
}


function cal (expression) {

    const regex = /[0-9]/g;

    let operator;

    let operators = expression.replace(regex,' ').split(' ').filter((val) => !!val);

    let pushToXorY = true; 

    if (operators.length !== 0 && operators.length === 1) {
        let returnedValue;

        let values = expression.split(operators[0]);
    
        if (operators[0] === "+") {

            returnedValue = add(values[0], values[1])
        } else if (operators[0] === "-") {

            returnedValue = subtract(values[0], values[1])
        } else if (operators[0] === "*") {

            returnedValue = multiply(values[0], values[1])
        } else if (operators[0] === "/") {

            returnedValue = divide(values[0], values[1])
        }

        $("#display").val(returnedValue)
    } else {
        for(let i = 0; i < expression.length; i++) {

            if (expression[i] !== "*" && expression[i] !== "+" && expression[i] !== "-" && expression[i] !== "/") {

                if (pushToXorY === true) {

                    x_value.push(expression[i]);

                } 
                else {

                    y_value.push(expression[i])

                }
            } 
            else {

                if (x_value.length !== 0 && y_value.length !== 0) {

                    let returnedValue;
    
                    if (operator === "+") {
    
                        returnedValue = add(x_value.reduce(reducer), y_value.reduce(reducer)) + expression.substring(i);

                    }
                    else if (operator === "-") {
    
                        returnedValue = subtract(x_value.reduce(reducer), y_value.reduce(reducer)) + expression.substring(i);
                    } 
                    else if (operator === "*") {
    
                        returnedValue = multiply(x_value.reduce(reducer), y_value.reduce(reducer)) + expression.substring(i);
                    } 
                    else if (operator === "/") {
    
                        returnedValue = divide(x_value.reduce(reducer), y_value.reduce(reducer)) + expression.substring(i);
                    }
    
                    if (!!returnedValue) {
                        cal(returnedValue)
                    }
                }
    
                operator = expression[i]

                pushToXorY = false;
            }
        }
    }
}