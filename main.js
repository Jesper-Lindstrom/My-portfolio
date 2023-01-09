
// window.addEventListener('DOMContentLoaded', main);

// function main() {
//  detectCurrentPage()
// }

const text = [' Front End ', ' UX ', ' Web '];
const timer = setInterval(changeWord, 3000);
let counter = 0;



function changeWord () {
  let span = document.getElementById('changing-word');
  span.textContent = text[counter];
  counter++; 
  if (counter >= text.length) {
    counter = 0;
  }
  
}


function toggle() {
  var div = document.getElementById('hidden')
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

  // function fadeoutNoneActivePage (currentPage) {
  //   const rightPage = document.getElementById('fade-out')
  //   if (currentPage !== 'index.html') {
  //   rightPage.style.color = 'black'
  // } else console.log('not working')
  // }