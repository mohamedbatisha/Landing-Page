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
 * Define Global Variables
 *
 */

const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */


// build the nav
const navBuilder = () => {
  let navUI = '';

  sections.forEach(section => {

    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;

    navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
  });

  //Add all the elements to the navigation
  navigation.innerHTML = navUI;
};

navBuilder();

// Add class 'active' to section when near top of viewport
const getActiveEelemnt = (section) => {
  return Math.floor(section.getBoundingClientRect().top);

};

// Remove the active class
const removeActiveElement = (section) => {
  section.classList.remove('your-active-class');

};

// Add the active class
const addActiveSec = (condition, section) => {
  if (condition) {
    section.classList.add('your-active-class');
  };

};

// Set sections as active

const sectionActivate = () => {
  sections.forEach(section => {
    const elementActive = getActiveEelemnt(section);

    inviewport = () => elementActive < 150 && elementActive >= -150;

    removeActiveElement(section);
    addActiveSec(inviewport(), section);
  });
};

window.addEventListener('scroll', sectionActivate);

// Scroll to section on link click
const scrolling = () => {

  const links = document.querySelectorAll('.navbar__menu a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      for (i = 0; i < sections; i++) {
        sections[i].addEventListener("click", sectionScroll(link));

      };
    });
  });
};

scrolling();
