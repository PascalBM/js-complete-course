/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function bgColor() {

    // your code here

    document.getElementById("run").addEventListener("click",changeColor);

    // click
    function changeColor() {
        document.body.style.backgroundColor = randomColor();

// string plakken met + teken
    }
    function randomColor(){
    return "rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+")";

    }
    function getRandomInt(min, max) {
        min = Math.ceil(0);
        max = Math.floor(255);
        return Math.floor(Math.random() * (max - min) + min);
        //The maximum is exclusive and the minimum is inclusive
    }
    console.log(getRandomInt(0,255))
})();
