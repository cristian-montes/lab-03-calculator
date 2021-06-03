// import functions
import { add, subtract, } from '../calculations.js';

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
  