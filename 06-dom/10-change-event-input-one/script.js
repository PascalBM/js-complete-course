/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Listen for changes in the input field and display the number of characters entered in the counter span.
    // As soon as 10 characters have been entered, don't allow any more characters to be typed.
    let pass1 = document.getElementById("pass-one");
    let counter = document.getElementById("counter");

    pass1.addEventListener("keyup",updateValue);

    function updateValue() {
        if (pass1.value.length >= 10) {
        pass1.value = pass1.value.substr(0,9)
        } else {
        pass1.disabled = false;
        }

    }









})();
