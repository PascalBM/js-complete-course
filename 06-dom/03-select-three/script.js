/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // get the value of class in html and make the class a const
    const p = document.getElementsByClassName("target");

    //use the for(let..) to change all classes values
    for (let i = 0; i < p.length; i++) {
        p[i].innerHTML = "Owned.";
    }




})();
