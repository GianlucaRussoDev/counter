const auBtn = document.getElementById("au-btn");
const deBtn = document.getElementById("de-btn");
const counterView = document.getElementById("counter-view");
let counter = 0; 
function increment() {
    counter++;
    counterView.innerHTML = counter;
}
function decrement() {
    counter--;
    counterView.innerHTML = counter;   
}
auBtn.addEventListener("click", increment);
deBtn.addEventListener("click", decrement);