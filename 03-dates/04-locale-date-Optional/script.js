/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const text = document.getElementById('target');
    const week = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    let date = new Date();
    let time = week[date.getDay()] + " "
        + date.getDate() + " "
        + months[date.getMonth()]  + " "
        + date.getFullYear() + ", "
        + date.getHours() + ":"
        + ((date.getMinutes() < 10 ? '0' : '') + date.getMinutes());

    text.innerHTML = `${time}`
})();
