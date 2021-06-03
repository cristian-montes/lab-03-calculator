// import functions
import { add } from '../calculations.js';

// reference needed DOM elements
const addXInput = document.getElementById('add-x-input');
const addYInput = document.getElementById('add-y-input');
const addBtn = document.getElementById('add-btn');
const addResult = document.getElementById('add-result');



// set event listeners 
addBtn.addEventListener('click', () => {

    const x = Number(addXInput.value);
    const y = Number(addYInput.value);
    const sum = add(x, y);
    addResult.textContent = sum;

  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
  // get user input(s)
});
  