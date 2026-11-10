const add = require('./app');

const result = add(5, 9);

if (result === 14) {
    console.log("Test Passed");
} else {
    console.log("Test Failed");
}