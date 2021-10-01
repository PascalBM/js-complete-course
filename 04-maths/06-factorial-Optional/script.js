/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        const parent = document.querySelector('.material');
        const resultTag = document.createElement('h2');
        parent.appendChild(resultTag);

        const  num = document.getElementById('number');

        num.addEventListener("keypress", function(event) {
            if (event.keyCode == 13)
                run.click();
        });
        let result = num.value;

        if (result === 0 || result === 1) return 1;

        for (var i = result - 1; i >= 1; i--) result *= i;

        resultTag.innerHTML = `${result}`;
    });

})();
