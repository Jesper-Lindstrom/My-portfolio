
window.addEventListener('DOMContentLoaded', main);

function main() {
  TypeWriter()
}

const text = [' Front End ', ' UX ', ' Web '];
let counter = 0;
const timer = setInterval(changeWord, 3000);



function changeWord () {
  let span = document.getElementById('changing-word');
  span.textContent = text[counter];
  counter++; 
  if (counter >= text.length) {
    counter = 0;
  }
  
}


// if currentpage = fade höger eller vänster
//  window.location.href