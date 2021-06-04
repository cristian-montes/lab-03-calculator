// IMPORT MODULES under test here:
import { add, subtract, multiply, devide, modulo, integer, aBC, } from '../calculations.js';

const test = QUnit.test;

// (ADD) TEST
test('add two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(2, 3); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// (SUBTRACT) TEST
test('subtract two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(10, 5); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// MULTIPLY TEST
test('mutiply two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 20;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(4, 5); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// DEVIDE TEST
test('devide two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 20;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = devide(100, 5); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// MODULO TEST
test('reminder of two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = modulo(12, 5); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// INTEGER TEST
test('integer of two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = integer(10, 3); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// P.. THEOREM TEST
test('Hypotenuse Length', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    // eslint-disable-next-line new-cap
    const actual = aBC(3, 4); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});