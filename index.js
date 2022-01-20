// Global variables & initializing display
let display = "";
let a = 0;
let b = "";
let oper = "";
updateDisplay();

// Operate function that accepts each basic operator and two variables
function operate(a, oper, b) {
    b = +b;
    console.log("operate: " + a + oper + b);
    switch (oper) {
        case '+':
            console.log(a + b);
            display = a + b;
            break;
        case '-':
            console.log(a - b);
            display = a - b;
            break;
        case '*':
            console.log(a * b);
            display = a * b;
            break;
        case '/':
            console.log(a / b);
            display = a / b;
            break;
    }
    updateDisplay();
}

// Update display value
function updateDisplay() {
    if(display !== "") {
        document.getElementById('aDisplay').innerText = display;
        document.getElementById('operDisplay').innerText = oper;
        document.getElementById('bDisplay').innerText = b;
    }
}

// Clear display and values
function clearCalc() {
    console.log("clear pressed");
    display = "";
    a = 0;
    b = "";
    oper = "";
    document.getElementById('aDisplay').innerText = "0";
    document.getElementById('operDisplay').innerText = oper;
    document.getElementById('bDisplay').innerText = b;
}

// Input values
function input(n) {
    console.log("user: " + n);
    if(a !== "" && oper !== "") {
        inputB(n);
        return;
    }
    if(display === oper) {
        display = "";
    }
    if(n === "." && +display - Math.floor(+display) !== 0) {
        console.log("number is already a float");
        return;
    }
    if(display === "0" && oper === "" && b === "") {
        console.log('running');
        display = "";
        document.getElementById('aDisplay').innerText = "";
    }
    display = display.toString();
    display = display + n.toString();
    updateDisplay();
}
function inputB(n) {
    if(n === "." && +b - Math.floor(+b) !== 0) {
        console.log("number is already a float");
        return;
    }
    if(b !== "") {
        b = b.toString();
        b = b + n.toString();
        updateDisplay();
        return;
    }
    b = n;
    updateDisplay();
    return;
}

// Input operators
function newOper(x) {
    if(a === "") {
        return;
    }
    if(oper !== "") {
        console.log("continuing previous operation");
        equalFunc();
    }
    oper = x;
    console.log("user: " + oper);
    a = +display;
    display = a;
    updateDisplay();
}

// Equal button
function equalFunc() {
    operate(a, oper, b);
    a = +display;
    b = "";
    oper = "";
    display = a;
    a = 0;
    document.getElementById('operDisplay').innerText = oper;
    document.getElementById('bDisplay').innerText = b;
}

// Functions and event handler for keys
function keyPress(event) {
    if(event.key.includes("1") || 
        event.key.includes("2") || 
        event.key.includes("3") || 
        event.key.includes("4") || 
        event.key.includes("5") || 
        event.key.includes("6") || 
        event.key.includes("7") || 
        event.key.includes("8") || 
        event.key.includes("9") || 
        event.key.includes("0") || 
        event.code.includes('Period')) {
        event.preventDefault();
        if(event.key.includes('1')) {
            btn1.classList.add('hover');
        } else if(event.key.includes('2')) {
            btn2.classList.add('hover');
        } else if(event.key.includes('2')) {
            btn2.classList.add('hover');
        } else if(event.key.includes('3')) {
            btn3.classList.add('hover');
        } else if(event.key.includes('4')) {
            btn4.classList.add('hover');
        } else if(event.key.includes('5')) {
            btn5.classList.add('hover');
        } else if(event.key.includes('6')) {
            btn6.classList.add('hover');
        } else if(event.key.includes('7')) {
            btn7.classList.add('hover');
        } else if(event.key.includes('8')) {
            btn8.classList.add('hover');
        } else if(event.key.includes('9')) {
            btn9.classList.add('hover');
        } else if(event.key.includes('0')) {
            btn0.classList.add('hover');
        } else if(event.key.includes('.')) {
            btnPeriod.classList.add('hover');
        }
        input(event.key);
    };
    if(event.key.includes('+') || 
        event.key.includes('-') || 
        event.code.includes('KeyX') || 
        event.key.includes('*') || 
        event.key.includes('/')) {
        event.preventDefault();
        if(event.key.includes('+')) {
            btnPlus.classList.add('hover');
        } else if(event.key.includes('-')) {
            btnMinus.classList.add('hover');
        } else if(event.code.includes('KeyX') || 
            event.key.includes('*')) {
            btnMultiply.classList.add('hover');
            newOper("*");
            return;
        } else if(event.key.includes('/')) {
            btnDivide.classList.add('hover');
        }
        newOper(event.key);
    };
    if(event.key.includes('=') || 
        event.key.includes('Enter')) {
        event.preventDefault();
        if(event.key.includes('=')) {
            btnEqual.classList.add('hover');
        }
        equalFunc(event.key);
    };
    if(event.code.includes('KeyC')) {
        event.preventDefault();
        if(event.code.includes('KeyC')) {
            btnClear.classList.add('hover');
        }
        clearCalc();
    };
}

// Event listeners for keypress hover animation
window.addEventListener('keydown', keyPress);
document.body.addEventListener('keyup', (e) => {
    btn1.classList.remove('hover');
    btn2.classList.remove('hover');
    btn3.classList.remove('hover');
    btn4.classList.remove('hover');
    btn5.classList.remove('hover');
    btn6.classList.remove('hover');
    btn7.classList.remove('hover');
    btn8.classList.remove('hover');
    btn9.classList.remove('hover');
    btn0.classList.remove('hover');
    btnPeriod.classList.remove('hover');
    btnPlus.classList.remove('hover');
    btnMinus.classList.remove('hover');
    btnMultiply.classList.remove('hover');
    btnDivide.classList.remove('hover');
    btnEqual.classList.remove('hover');
    btnClear.classList.remove('hover');
})

// Declaring buttons
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btnPeriod = document.getElementById("btnPeriod");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnMultiply = document.getElementById("btnMultiply");
const btnDivide = document.getElementById("btnDivide");
const btnEqual = document.getElementById("btnEqual");
const btnClear = document.getElementById("btnClear");