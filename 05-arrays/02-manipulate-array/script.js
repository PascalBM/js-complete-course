/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    //remove the first and the last element, add an element "banana" at the start of the array,
    //               and add an element "kiwi" at the end.
document.getElementById("run").addEventListener("click",function () {
    fruits.shift("pomme");
    fruits.splice(9);
    fruits.unshift("bannana");
    fruits.push("kiwi");
    console.log(fruits)



})
})();
