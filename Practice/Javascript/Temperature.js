// Fahrenheit Converter for the American Traveler
// Easy
// Rick, an American citizen found himself in a foreign land with a temperature scale he was not familiar with as Americans used Imperial scale to measure things. He needed to know the temperature in Fahrenheit, but all he had was the Celsius reading. He knew he needed a way to convert Celsius to Fahrenheit, but he didn't know how to do it.

// Can you help the traveler by creating a function that will convert input in celsius to Fahrenheit?

// Note: Fahrenheit = (Celsius * 9/5) + 32

// Example 1:
// Input:
// 0

// Output:
// 32

// Example 2:
// Input:
// 100

// Output:
// 212

// Example 3:
// Input:
// -40

// Output:
// -40

function main() {
    const prompt = require('prompt-sync')();
    var celsius = parseInt(prompt ("Enter the temperature in Cenlcius : "));
    console.log(temperature(celsius));
}
function temperature(celsius) {
	let  i = celsius;
    let f = (i*(9/5)) + 32;
    return f;
    }
    main();