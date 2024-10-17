// Regular function declaration
function addNumbers(a, b, huh) {
    const sum = a + b; // Perform the addition
    huh(sum); 
}

const result = function(total) {
    console.log('The result is:', total);
};

// Using the addNumbers function
addNumbers(20, 3, result);

/************************************************************************************* */
// Using the addNumbers function
//addNumbers1(10, 3);

const addNumbers1 = function(a, b) {
    return a + b; // Directly returning the result
};

const result1 = addNumbers1(10, 3);
console.log('The result is:', result1);

