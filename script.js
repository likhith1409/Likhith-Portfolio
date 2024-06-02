// Your existing JavaScript code...
/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*=============== When the user scrolls the page, execute myFunction==============*/
window.onscroll = function() {myFunction()};
            
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




function toggleDetails(id) {
    var content = document.getElementById(id);
    content.classList.toggle('collapsible-active');
}
 



var dropdowns = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      // Adjust the value below to the maximum height you want for the dropdown
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const interests = [
  'Artificial Intelligence',
  'Machine Learning',
  'Python',
  'Deep Learning',
  'Amazon Web Services'
];
let index = 0;

function typeWriter() {
  if (index < interests.length) {
      const textElement = document.getElementById('interests');
      const text = interests[index];
      const delay = 40; // Adjust the delay time between characters

      textElement.innerHTML = ''; // Clear existing text

      for (let i = 0; i < text.length; i++) {
          setTimeout(() => {
              textElement.innerHTML += text.charAt(i);
          }, i * delay);
      }

      index++;

      // Add a delay before starting the next interest
      setTimeout(typeWriter, text.length * delay + 1000);
  } else {
      index = 0; // Reset index to repeat the interests
      setTimeout(typeWriter, 1000); // Add a delay before restarting the interests
  }
}

// Call typeWriter on page load
window.onload = typeWriter;



function showMoreProjects() {
  document.querySelector('.more-projects').style.display = 'flex';
  document.getElementById('show-more').style.display = 'none';
  document.getElementById('show-less').style.display = 'inline';
}

function showLessProjects() {
  document.querySelector('.more-projects').style.display = 'none';
  document.getElementById('show-more').style.display = 'inline';
  document.getElementById('show-less').style.display = 'none';
}


let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

const sliderContainer = document.querySelector('.slider-container');

// Listen for mousewheel event only when mouse is over the slider-container
sliderContainer.addEventListener('wheel', function(event) {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        // Handle horizontal scrolling
        const delta = Math.sign(event.deltaX);
        changeSlide(delta);
    } else {
        // Handle vertical scrolling
        const delta = Math.sign(event.deltaY);
        changeSlide(delta);
    }
    // Prevent default scrolling
    event.preventDefault();
});


