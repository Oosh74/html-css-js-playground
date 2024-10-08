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
// const list = document.querySelector('.shopping-list-ul');
// const listForm = document.querySelector('#shopping-form');
// const listBtn = document.querySelector('.shopping-list-btn');

// listBtn.addEventListener('click', () => {
//   const listValue = listForm.value;
//   listForm.value = '';
//   const listItem = document.createElement('li');
//   listItem.textContent = listValue;
//   list.appendChild(listItem);
//   const deleteBtn = document.createElement('button');
//   deleteBtn.textContent = 'Delete';
//   list.appendChild(deleteBtn);

//   deleteBtn.addEventListener('click', () => {
//     list.removeChild(listItem);
//     list.removeChild(deleteBtn);
//   });

//   listForm.focus();
// });

const user = {
  name: 'Jared',
  age: 31,
  surname: 'Usher',
  'is an admin': true,
};

// const objBtn = document.querySelector('.alert-obj');

// objBtn.addEventListener('click', () => {
//   alert(user['is an admin']);
// });

console.log('Age' in user);
console.log('test' in user);

for (let key in user) {
  console.log('key:', key);
  console.log('value:', user[key]);
}

const schedule = {};

const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

console.log('is the array emptye?', isEmpty(schedule));

const salaries = {
  jared: 90000,
  john: 50000,
  kim: 49000,
};

const sumSalaries = (obj) => {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }

  return sum;
};

console.log('sum salaries', sumSalaries(salaries));

let menu = {
  width: 200,
  height: 300,
  title: 'my menu',
};

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
  return obj;
};

console.log('multiply numbers by 2', multiplyNumeric(menu));
