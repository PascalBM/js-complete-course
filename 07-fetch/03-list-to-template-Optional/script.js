/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    var getData = async () => {


        //took the api with the fetch
        var button = document.getElementById('run');
        await fetch('../../_shared/api.json')
            .then(result => result.json())
            .then(data => {
                //made an event listener with the declared button to start a function when the button is clicked.
                button.addEventListener('click', () => {
                    data.heroes.map(obj => {
                            //declared a template clone inside a let
                            let myHero = document.getElementById('tpl-hero').content.cloneNode(true);
                            //used the template with a querySelector.
                            myHero.querySelector('.name').innerText = obj.name;
                            myHero.querySelector('.alter-ego').innerText = obj.alterEgo;
                            myHero.querySelector('.powers').innerText = obj.abilities;
                            //put the content inside the target
                            document.getElementById("target").appendChild(myHero);


                    })
                })
            })
    }
    getData();
})();
