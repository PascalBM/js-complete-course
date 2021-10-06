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
    //declared the button and input
    var button = document.getElementById('run');
    var input = document.getElementById('hero-id');

    //used the async function
    var getData = async () => {
        //took the api with the fetch
        await fetch('../../_shared/api.json')
            .then(result => result.json())
            .then(data => {
                //made an event listener with the declared button to start a function when the button is clicked.
                button.addEventListener('click', () => {
                    data.heroes.map(obj => {
                        if (input.value == obj.id) {
                            //declared a template clone inside a let
                            let myHero = document.getElementById('tpl-hero').content.cloneNode(true);
                            //used the template with a querySelector.
                            myHero.querySelector('.name').innerText = obj.name;
                            myHero.querySelector('.alter-ego').innerText = obj.alterEgo;
                            myHero.querySelector('.powers').innerText = obj.abilities;
                            //put the content inside the target
                            document.getElementById("target").appendChild(myHero);

                            //Asked for little for the help template
                        }
                    })
                })
            })
    }
    getData();
})();



