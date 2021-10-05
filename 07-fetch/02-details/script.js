/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    //When you click on the button, get the id from the form, then get the corresponding X-Men from the API and display it in the tag whose id is "target". Use the tag template to reproduce a suitable html structure
    let target = document.getElementById("target")
    document.getElementById("hero-id")
    document.getElementById("run").addEventListener("click", function () {
        fetch('http://localhost:63342/js-complete-course/_shared/api.json')
            .then(response => response.json())
            .then(data => console.log(data));


    } )




})();
