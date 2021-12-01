// import functions and grab DOM elements
const headForm = document.getElementById('head-form');
const middleForm = document.getElementById('middle-form');
const bottomForm = document.getElementById('bottom-form');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseEL= document.getElementById('catch-phrases');
const reportEl = document.getElementById('report')
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');





// let state
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

let catchprases = [];
// set event listeners 
headForm.addEventListener('change',() => {
  const value = headForm.value;

  headCount++;
  headEl.backgroundImage = ''
  displayStats();
})



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
function displayStats(){
  for (let cathphrase of catchphrases){
    const p = document.createElement('p');
    
    p.addEventListener('catchphrase');
    p.textContent = catchphrases;

    catchphraseEL.append(p);
  }
}