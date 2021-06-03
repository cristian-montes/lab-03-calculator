// import functions
import { add, subtract, multiply, devide, modulo, } from '../calculations.js';

// reference needed DOM elements
// ADD
const addXInput = document.getElementById('add-x-input');
const addYInput = document.getElementById('add-y-input');
const addBtn = document.getElementById('add-btn');
const addResult = document.getElementById('add-result');

//SUBTRACT
const subtractXInput = document.getElementById('subtract-x-input');
const subtractYInput = document.getElementById('subtract-y-input');
const subtractBtn = document.getElementById('subtract-btn');
const subtractResult = document.getElementById('subtract-result');

//MULTIPLY
const multiplyXInput = document.getElementById('multiply-x-input');
const multiplyYInput = document.getElementById('multiply-y-input');
const multiplyBtn = document.getElementById('multiply-btn');
const multiplyResult = document.getElementById('multiply-result');

//DEVIDE
const devideXInput = document.getElementById('devide-x-input');
const devideYInput = document.getElementById('devide-y-input');
const devideBtn = document.getElementById('devide-btn');
const devideResult = document.getElementById('devide-result');

//MODULO
const moduloXInput = document.getElementById('modulo-x-input');
const moduloYInput = document.getElementById('modulo-y-input');
const moduloBtn = document.getElementById('modulo-btn');
const moduloResult = document.getElementById('modulo-result');

// ADD + EVENT LISTENER
addBtn.addEventListener('click', () => {
    const x = Number(addXInput.value);
    const y = Number(addYInput.value);
    const sum = add(x, y);
    addResult.textContent = sum;
});

//SUBTRACT - EVENT LISTENER
subtractBtn.addEventListener('click', () =>{
    const x = Number(subtractXInput.value);
    const y = Number(subtractYInput.value);
    const subtraction = subtract(x, y);
    subtractResult.textContent = subtraction;
});

//MULTIPLY - EVENT LISTENER
multiplyBtn.addEventListener('click', () =>{
    const x = Number(multiplyXInput.value);
    const y = Number(multiplyYInput.value);
    const multiplication = multiply(x, y);
    multiplyResult.textContent = multiplication;
});

//DEVIDE - EVENT LISTERNER
devideBtn.addEventListener('click', () => {
    const x = Number(devideXInput.value);
    const y = Number(devideYInput.value);
    const division = devide(x, y);
    devideResult.textContent = division;
});

 // MODULO - EVENT LISTERNER 
 moduloBtn.addEventListener('click', () => {
    const x = Number(moduloXInput.value);
    const y = Number(moduloYInput.value);
    const reminder = modulo(x, y);
    moduloResult.textContent = reminder;
 });