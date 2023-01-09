
window.addEventListener('DOMContentLoaded', main);

function main() {
  fadeoutNoneActivePage()
  detectCurrentpage()
}

function detectCurrentpage() {

if (document.URL == 'index.html'){
const text = [' Front End ', ' UX ', ' Web '];
let counter = 0;
const timer = setInterval(changeWord, 3000);
  } console.log('hello');
}


function changeWord () {
  let span = document.getElementById('changing-word');
  span.textContent = text[counter];
  counter++; 
  if (counter >= text.length) {
    counter = 0;
  }
  
}

  function fadeoutNoneActivePage () {
    const rightPage = document.querySelector('.right')
  if (document.URL === ('./projects.html') || ('./contact.html')) {
    rightPage.style.backgroundcolor = 'black'
  } console.log('didnt work')
  }