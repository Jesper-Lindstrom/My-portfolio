
// window.addEventListener('DOMContentLoaded', main);

// function main() {
//  detectCurrentPage()
// }

const text = [' Front End ', ' UX ', ' Web '];
const timer = setInterval(changeWord, 3000);
let counter = 0;



function changeWord () {
  let span = document.getElementById('changing-word');
  if (document.body.contains( document.getElementById('changing-word'))) {
  span.textContent = text[counter];
  counter++; 
    if (counter >= text.length) {
    counter = 0;
    } 
  }
}

function toggle() {
  const dropdown = document.getElementById('hidden');
  dropdown.classList.toggle('close')

}




// function toggle() {
//   const navbar = document.getElementById('hidden')
//   if (navbar.style.display === "none") {
//     navbar.style.display = "block";
//   } else {
//     navbar.style.display = "none";
//   }
// }

  // function fadeoutNoneActivePage (currentPage) {
  //   const rightPage = document.getElementById('fade-out')
  //   if (currentPage !== 'index.html') {
  //   rightPage.style.color = 'black'
  // } else console.log('not working')
  // }