/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click",getAge)

  var a =  document.getElementById("dob-day")
   var b =  document.getElementById("dob-month")
    var c = document.getElementById("dob-year")

    function getAge(){
        var date = Date.now() - c.value;
        var age = new date;

            return getAge(math.abs(age.getUTCFullYear() - date);


    }

})();
