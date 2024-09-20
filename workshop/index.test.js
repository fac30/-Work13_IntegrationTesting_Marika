test("Calculates 5 + 3", () => {
    const result = calculate(5, "+", 3);
    equal(result, 8, "5 + 3 should equal 8");
});


test("Calculates 9 - 4", () => {
    const result = calculate(9, "-", 4);
    equal(result, 5, "9 - 4 should equal 5");
});


test("Calculates 7 * 6", () => {
    const result = calculate(7, "*", 6);
    equal(result, 42, "7 * 6 should equal 42");
});


test("Calculates 8 / 2", () => {
    const result = calculate(8, "/", 2);
    equal(result, 4, "8 / 2 should equal 4");
});


test("Handles invalid operator", () => {
    const result = calculate(5, "%", 3);
    equal(result, "Please enter a valid sign (+, -, *, /)", "An invalid operator should return an error message");
});


test("Handles string input instead of numbers", () => {
    const result = calculate("5", "+", "3");
    equal(result, 8, "String input '5' + '3' should still equal 8");
});


// Test Case 1: 5 + 3 = 8
test("Calculates 5 + 3 and updates the page", () => {
    const inputA = document.querySelector('#a');
    const inputB = document.querySelector('#b');
    const sign = document.querySelector('#sign'); 
    const submitButton = document.querySelector("button[type='submit']");
    const result = document.querySelector('#result');

    // Set the input values
    inputA.value = "5";
    inputB.value = "3";
    sign.value = "+"; 

    // Simulate form submission
    submitButton.click();

    // Check the result
    equal(result.textContent, "8", "Form should correctly calculate 5 + 3 as 8");

    // Reset the result content for the next test
    result.textContent = "";
});




