/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var button = document.getElementById('run');
    var inputId = document.getElementById('hero-id')

    //used the async function
    var getData = async () => {
        //took the api with the fetch
        await fetch('../../_shared/api.json')
            .then(result => result.json())
            .then(data => {
                //Is an objecct with element heroes (in array)
                console.log(data.heroes)
                //made an event listener with the declared button to start a function when the button is clicked.
                button.addEventListener('click', () => {
                    switch (deleteHero) {
                        case inputId.value == data.heroes[0]
                            break;
                        case inputId.value == data.heroes[1]
                            break;
                        case inputId.value == data.heroes[2]
                            break;
                        case inputId.value == data.heroes[3]
                            break;
                        case inputId.value == data.heroes[4]
                            break;
                        case inputId.value == data.heroes[5]
                            break;




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
