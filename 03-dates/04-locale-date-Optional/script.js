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
    //declared a const with with the element id target and created a new const week with an array
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
    // created an array const months
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

    // declared let date to new date and let time with a week array of date+ getDay func
    let date = new Date();
    let time = week[date.getDay()] + " "
        + date.getDate() + " "
        + months[date.getMonth()]  + " "
        + date.getFullYear() + ", "
        + date.getHours() + ":"
        + ((date.getMinutes() < 10 ? '0' : '') + date.getMinutes());

    //write it in html
    text.innerHTML = `${time}`
})();
