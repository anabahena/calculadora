const btn1 = document.getElementById('n1');
const btn2 = document.getElementById('n2');
const btn3 = document.getElementById('n3');
const btn4 = document.getElementById('n4');
const btn5 = document.getElementById('n5');
const btn6 = document.getElementById('n6');
const btn7 = document.getElementById('n7');
const btn8 = document.getElementById('n8');
const btn9 = document.getElementById('n9');
const btn0 = document.getElementById('n0');
const suma1 = document.getElementById('suma');
const resta1 = document.getElementById('resta');
const multiplicacion1 = document.getElementById('multiplicacion');
const division1 = document.getElementById('division');
const equal1 = document.getElementById('equal');
const result = document.getElementById('printNumber');


// Números
const n1 = () => {
    const nb1 = document.getElementById('n1').innerHTML;
    const b = document.getElementById('printNumber').innerHTML;
    document.getElementById('printNumber').innerHTML = b + nb1;
}

btn1.addEventListener('click', n1);

const n2 = () => {
    const nb2 = document.getElementById('n2').innerHTML;
    const b = document.getElementById('printNumber').innerHTML;
    document.getElementById('printNumber').innerHTML = b + nb2;
}

btn2.addEventListener('click', n2);

const n3 = () => {
    const nb3 = document.getElementById('n3').innerHTML;
    const b = document.getElementById('printNumber').innerHTML;
    document.getElementById('printNumber').innerHTML = b + nb3;
}

btn3.addEventListener('click', n3);


const n4 = () => {
    const nb4 = document.getElementById('n4').innerHTML;
    const b = document.getElementById('printNumber').innerHTML;
    document.getElementById('printNumber').innerHTML = b + nb4;
}

btn4.addEventListener('click', n4);


const n5 = () => {
    const nb5 = document.getElementById('n5').innerHTML;
    const b = document.getElementById('printNumber').innerHTML;
    document.getElementById('printNumber').innerHTML = b + nb5;
}

btn5.addEventListener('click', n5);


const n6 = () => {
    const nb6 = document.getElementById('n6').innerHTML;
    const b = document.getElementById('printNumber').innerHTML;
    document.getElementById('printNumber').innerHTML = b + nb6;
}

btn6.addEventListener('click', n6);


const n7 = () => {
    const nb7 = document.getElementById('n7').innerHTML;
    const b = document.getElementById('printNumber').innerHTML;
    document.getElementById('printNumber').innerHTML = b + nb7;
}

btn7.addEventListener('click', n7);


const n8 = () => {
    const nb8 = document.getElementById('n8').innerHTML;
    const b = document.getElementById('printNumber').innerHTML;
    document.getElementById('printNumber').innerHTML = b + nb8;
}

btn8.addEventListener('click', n8);


const n9 = () => {
    const nb9 = document.getElementById('n9').innerHTML;
    const b = document.getElementById('printNumber').innerHTML;
    document.getElementById('printNumber').innerHTML = b + nb9;
}

btn9.addEventListener('click', n9);


const n0 = () => {
    const nb0 = document.getElementById('n0').innerHTML;
    const b = document.getElementById('printNumber').innerHTML;
    document.getElementById('printNumber').innerHTML = b + nb0;
}

btn0.addEventListener('click', n0);


// Operaciones
const suma = () => {
    const suma1 = document.getElementById('suma').innerHTML;
    const b = document.getElementById('printNumber').innerHTML;
    document.getElementById('printNumber').innerHTML = b + suma1;
}

suma1.addEventListener('click', suma);


const resta = () => {
    const resta1 = document.getElementById('resta').innerHTML;
    const b = document.getElementById('printNumber').innerHTML;
    document.getElementById('printNumber').innerHTML = b + resta1;
}

resta1.addEventListener('click', resta);

const multiplicacion = () => {
    const multiplicacion1 = document.getElementById('multiplicacion').innerHTML;
    const b = document.getElementById('printNumber').innerHTML;
    document.getElementById('printNumber').innerHTML = b + multiplicacion1;
}

multiplicacion1.addEventListener('click', multiplicacion);

const division = () => {
    const division1 = document.getElementById('division').innerHTML;
    const b = document.getElementById('printNumber').innerHTML;
    document.getElementById('printNumber').innerHTML = b + division1;
}

division1.addEventListener('click', division);


// const equal = () => {
//     const equal1 = document.getElementById('equal').innerHTML;
//     const b = document.getElementById('printNumber').innerHTML;
//     document.getElementById('printNumber').innerHTML = b + " " + equal1 + " ";
// }

// equal1.addEventListener('click', equal);

const total = () => {
    const b = document.getElementById('printNumber').innerHTML;
    const suma = b.indexOf('+');
    const resta = b.indexOf('-');
    const multiplicacion = b.indexOf('x');
    const division = b.indexOf('/');
    if (suma !== -1) {
        arr = b.split("+", 2);
        res = parseInt(arr[0]) + parseInt(arr[1]);
        document.getElementById('printNumber').innerHTML = res;
    } else if (resta !== -1) {
        arr = b.split('-', 2);
        res = parseInt(arr[0]) - parseInt(arr[1]);
        document.getElementById('printNumber').innerHTML = res;
    } else if (multiplicacion !== -1) {
        arr = b.split('x', 2);
        res = parseInt(arr[0]) * parseInt(arr[1]);
        document.getElementById('printNumber').innerHTML = res;
    } else if (division !== -1) {
        arr = b.split('/', 2);
        res = parseInt(arr[0]) / parseInt(arr[1]);
        document.getElementById('printNumber').innerHTML = res;
    }

}

equal1.addEventListener('click', total)