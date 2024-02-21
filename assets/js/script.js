const container = document.querySelector('.container');
const title = document.createElement('h1');
title.id = 'title';
title.textContent = 'Counter XP-10';
container.appendChild(title);
const counterDiv = document.createElement('div');
counterDiv.classList.add('counter');
const counterView = document.createElement('div');
counterView.id = 'counter-view';
counterView.textContent = '0';
counterDiv.appendChild(counterView);
const increaseButton = document.createElement('button');
increaseButton.classList.add('btn');
increaseButton.id = 'au-btn';
increaseButton.textContent = '+';
counterDiv.appendChild(increaseButton);
const decreaseButton = document.createElement('button');
decreaseButton.classList.add('btn');
decreaseButton.id = 'de-btn';
decreaseButton.textContent = '-';
counterDiv.appendChild(decreaseButton);
container.appendChild(counterDiv);

increaseButton.addEventListener('click', () => {
    let currentValue = parseInt(counterView.textContent);
    currentValue++;
    counterView.textContent = currentValue;
});

decreaseButton.addEventListener('click', () => {
    let currentValue = parseInt(counterView.textContent);
    currentValue--;
    counterView.textContent = currentValue;
});