const container = document.querySelector('#container');

const redP = document.createElement('p');
redP.setAttribute('style', 'color:red;');
redP.textContent = "Hey I'm red!";

const subTitle = document.createElement('h3');
subTitle.setAttribute('style', 'color: blue');
subTitle.textContent = "I'm a blue h3";

const blackBox = document.createElement('div');
blackBox.classList.add('black-box-style');

const boxTitle = document.createElement('h1');
boxTitle.textContent = "I'm inside the box!";

const boxText = document.createElement('p');
boxText.textContent = 'Me too!';

container.appendChild(redP);
container.append(subTitle);
container.appendChild(blackBox);
blackBox.appendChild(boxTitle);
blackBox.appendChild(boxText);

const btn = document.querySelector('.jsBtn');
btn.onclick = () => {
  alert('Hello, world!');
};

const eventBtn = document.querySelector('.eventListenerBtn');
eventBtn.addEventListener('click', () => {
  alert('hello, world!');
});

eventBtn.addEventListener('click', (e) => {
  e.target.setAttribute('style', 'background-color: blue; color: white');
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Clicked');
  });
});
