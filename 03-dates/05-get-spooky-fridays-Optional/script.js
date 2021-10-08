/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    // made an event listener with function fridays month when the button is cliked
    document.getElementById("run").addEventListener("click", fridaysMonth());
    // in the function
    function fridaysMonth(year) {
        var count = 0;  // declared a variable count to 0
        for (var month=0; month<12; month++) {  //variable month=0; month is smaller than 12 and icremment
            var d = new Date(year,month,13); //variable year
            if(d.getDay() == 5){
                count++;
            }
        }
        return count;
    }
    console.log()

})();
