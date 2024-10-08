// const container = document.querySelector('#container');

// const redP = document.createElement('p');
// redP.setAttribute('style', 'color:red;');
// redP.textContent = "Hey I'm red!";

// const subTitle = document.createElement('h3');
// subTitle.setAttribute('style', 'color: blue');
// subTitle.textContent = "I'm a blue h3";

// const blackBox = document.createElement('div');
// blackBox.classList.add('black-box-style');
// blackBox.style.backgroundColor = 'purple'; //element.style.property adds as inline CSS

// const boxTitle = document.createElement('h1');
// boxTitle.textContent = "I'm inside the box!";

// const boxText = document.createElement('p');
// boxText.textContent = 'Me too!';

// container.appendChild(redP);
// container.append(subTitle);
// container.appendChild(blackBox);
// blackBox.appendChild(boxTitle);
// blackBox.appendChild(boxText);

// const btn = document.querySelector('.jsBtn');
// btn.onclick = () => {
//   alert('Hello, world!');
// };

// const eventBtn = document.querySelector('.eventListenerBtn');
// eventBtn.addEventListener('click', () => {
//   alert('hello, world!');
// });

// eventBtn.addEventListener('click', (e) => {
//   e.target.setAttribute('style', 'background-color: blue; color: white'); //setAttribute does not add as inline CSS
// });

// const buttons = document.querySelectorAll('button');

// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     alert('Clicked');
//   });
// });

// const link = document.querySelector('a');
// link.textContent = 'Mozzila Developer Network';
// link.href = 'https://developer.mozilla.org';
// link.target = '_blank';

// link.addEventListener('mouseover', () => {
//   link.style.cursor = 'pointer';
//   link.style.fontSize = '50px';
// });

// link.addEventListener('mouseleave', () => {
//   link.style.fontSize = '24px';
// });

// const sect = document.querySelector('section');
// const sectText = document.createElement('p');
// sectText.textContent = 'I was made from javascript';
// sect.appendChild(sectText);
// const moreText = document.createTextNode(
//   ' - the best source for web dev knowledge'
// );

// sectText.appendChild(moreText);

//Shopping List
const list = document.querySelector('.shopping-list-ul');
const listForm = document.querySelector('#shopping-form');
const listBtn = document.querySelector('.shopping-list-btn');

listBtn.addEventListener('click', () => {
  const listValue = listForm.value;
  listForm.value = '';
  const listItem = document.createElement('li');
  listItem.textContent = listValue;
  list.appendChild(listItem);
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  list.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', () => {
    list.removeChild(listItem);
    list.removeChild(deleteBtn);
  });

  listForm.focus();
});

const user = {
  Name: 'Jared',
  Age: 31,
  'Likes Birds': true,
};

const objBtn = document.querySelector('.alert-obj');

objBtn.addEventListener('click', () => {
  alert(user['Likes Birds']);
});

let key = 'Likes Birds';
console.log(user.key);
console.log(user[key]);

let fruit = 'apple, or some other variable that may change';

let bag = {
  [fruit]: 5, //this will equate to {apple: 5}
  //Can also do something like:
  [fruit + 'Computers']: 5, //appleComputers = 5;
};

const makeUser = (name, age) => {
  return {
    name, //same as name: name
    age,
  };
};

let newUser = makeUser('John', 30);

console.log(newUser);
