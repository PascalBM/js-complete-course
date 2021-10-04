/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //Inside the element with id "target", create an HTML table with 1 column and 10 rows.
    const target = document.getElementById("target");
    let tbl = document.createElement("table");
    target.appendChild(tbl)

    for (let i = 1; i <= 10; i++) {
        // creates a table row
        let row = document.createElement("tr");
        tbl.appendChild(row)
        let cell = document.createElement("td");
            let cellText = document.createTextNode("cell in row "+i+", column ");
            cell.appendChild(cellText);
            row.appendChild(cell);
        }





})();
