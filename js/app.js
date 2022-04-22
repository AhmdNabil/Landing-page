/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
const sections = [...document.querySelectorAll("section")];
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
//function to make navigation bar
function buildNavBar() {
// making fragment
   const fragment = document.createDocumentFragment();
  // loop and create section list
   sections.forEach(section => {
    const li = document.createElement("li");
    //ancho tag
    li.innerHTML = `<a class = "menu__link"
    href = "#${section.getAttribute("id")}">
    ${section.getAttribute("data-nav")}
    </a>`;
    // scroll to the section when clicking on any one
    li.addEventListener("click" , prevent => {
   prevent.preventDefault();
   section.scrollIntoView({behavior: "smooth",block: "center"});
 });
 // appending items to the fragment
    fragment.appendChild(li);
  });
  document.getElementById("navbar__list").appendChild(fragment);
}
document.addEventListener("DOMContentLoaded", buildNavBar);
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// Add class 'active' to section when near top of viewport
// using IntersectionObserver to add style when the section is on view
function toggleActiveState() {
  const callback = sections => {
   if (sections[0].isIntersecting) {
    sections[0].target.classList.add("your-active-class");
   } else {
    sections[0].target.classList.remove("your-active-class");
   }
}
   const options = {
   root: null,
   rootMargin: "0px",
   threshold:0.65,
};
// applying the toggleActiveState
const observer = new IntersectionObserver(callback, options);
   sections.forEach(section => {
    observer.observe(section);
});
};
window.addEventListener("scroll", toggleActiveState);
/**
 * End Main Functions
 */
