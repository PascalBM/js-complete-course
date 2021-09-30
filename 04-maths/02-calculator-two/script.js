/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    // to get the value of an input: document.getElementById("element-id").value


    var performOperation = function(operation) {
        // perform the operation

        let num1 = Number(document.getElementById("op-one").value);
        let num2 = Number(document.getElementById("op-two").value);

        switch(operation) {
            case "addition":
                // code block
                alert(num1 + num2);
                break;
            case "substraction":
                // code block
                alert(num1 - num2);
                break;
            case "multiplication":
                // code block
                alert(num1 * num2);
                break;
            case "division":
                // code block

                alert(num1 / num2);
                break;

        }
    }

    const buttons = document.getElementsByName("operator")

    for (let i = 0; i < buttons.length; i++) {
        console.log(buttons[i]);
        buttons[i].addEventListener("click", function () {
            operation = this.id;
        });
    }

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    })

