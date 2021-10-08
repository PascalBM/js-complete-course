/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let button = document.getElementById('run');
    let newHeroName = document.getElementById('hero-name');
    let newHeroAlterEgo = document.getElementById("hero-alter-ego");
    let newHeroPowers = document.getElementById("hero-powers");

    //used the async function
    let getData = async () => {
        //took the api with the fetch
        await fetch('../../_shared/api.json')
            .then(result => result.json())
            .then(data => {
                //Is an object with element heroes (in array)
                console.log(data.heroes.length)
                //made an event listener with the declared button to start a function when the button is clicked.
                button.addEventListener('click', () => {
                        let newHero = {
                            // add new hero data
                            "id": data.heroes.length + 1, //+ 1 to add a the hero id length to 6
                            "name": newHeroName.value,
                            "alterEgo": newHeroAlterEgo.value,
                            "abilities": newHeroPowers.value
                        }
                        console.log(newHero)
                    //new hero push in data
                    data.heroes.push(newHero);
                    console.log(data)




                })
            })
    }
    getData();


})();
