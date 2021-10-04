/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // When hovering over the image, change its source attribute to the value specified in the "data-hover"attribute.
    // get the tagname and attributes select html html collection when 0 works like an array.
    const Image = document.getElementsByTagName("img")[0];
    const normalImage = Image.getAttribute("src");
    const hoverImage = Image.getAttribute("data-hover");

    //function when you mouseover
    Image.addEventListener("mouseover",function (){
        Image.src = hoverImage

    })
    // function when mouseleave
    Image.addEventListener("mouseleave",function (){
        Image.src = normalImage

    })







})();
