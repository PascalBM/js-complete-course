/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function bgColor() {

    // your code here
    //code id html

    document.getElementById("red").addEventListener("click", bgColorRed);
    document.getElementById("green").addEventListener("click", bgColorGreen);
    document.getElementById("yellow").addEventListener("click", bgColorYellow);
    document.getElementById("blue").addEventListener("click", bgColorBlue);

    //code function background color change

    function bgColorRed(){
        document.body.style.backgroundColor = "red";
    }

    function bgColorGreen(){
        document.body.style.backgroundColor = "Green";
    }

    function bgColorYellow(){
        document.body.style.backgroundColor = "Yellow";
    }

    function bgColorBlue(){
        document.body.style.backgroundColor = "Blue";
    }
})();
