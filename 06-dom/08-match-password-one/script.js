/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //When you click the button, check whether the two passwords entered in the input fields are the same.
    //If they are not, change the border color of the input boxes to be red.
    let pass1 = document.getElementById("pass-one");
    let pass2 = document.getElementById("pass-two");
    let run = document.getElementById("run");

    run.addEventListener("click", function () {
        if (pass1.value !== pass2.value) {
            pass1.style.border = 'solid red';
            pass2.style.border = 'solid red';
            run.innerHTML = "Mismatch";
        } else {
            pass1.style.border = '';
            pass2.style.border = '';
            run.innerHTML = "Matching"
        }
    })


})();
