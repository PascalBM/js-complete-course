/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // for loop, else if statement %3, 5% and 15%,


    for (let i = 1; i <= 100; i++) {
        // some code
        if (i % 15 === 0) {
            //  modulo of number 3
            console.log("fizzbuzz")
        } else if (i % 3 === 0) {
            //  modulo of number 5
            console.log("fizz")
        } else if (i % 5 === 0) {
            //  modulo of number 5
            console.log("buzz")
        }
        else
            console.log(i)


    }



})();
