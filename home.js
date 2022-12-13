// navbar

// this is for the navbar. Whenever you scroll the navbar 'follows you' and changes its color to white 
// this works an event (scrolling) and ands (bg) which has been manipulated in css
// couldn't figure out what the number is for tho 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if(scrollY >= 250){
    navbar.classList.add('bg');
  } else{
    navbar.classList.remove('bg');
  }
})