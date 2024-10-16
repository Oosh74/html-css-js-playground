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

const personConstructor = (name, age) => {
  const obj = {
    name,
    age,
    greeting: function () {
      return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
    },
  };
  return obj;
};

const jared = personConstructor('Jared', '31');

console.log('Dynamic obj ->', jared.greeting());

//Using a constructor
function Person(name, age) {
  (this.name = name),
    (this.age = age),
    (this.greeting = function () {
      return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
    });
}

const salve = new Person('Salva', 40);
console.log('Constructor obj', salve.greeting());

const camelize = (str) => {
  let arr = str.split('-');

  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }

  return arr.join('');
};

console.log('camelize', camelize('hello-world'));

// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filterInventors = (arr) => {
  return arr.filter((inventor) => inventor.year > 1499 && inventor.year < 1600);
};

console.log(filterInventors(inventors));
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const filterInventorFirstNames = (arr) => {
  return arr.map((inventor) => {
    return `${inventor.first} ${inventor.last}`;
  });
};

console.log('inventor first names', filterInventorFirstNames(inventors));

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sortInventors = (arr) => {
  return arr.sort((a, b) => {
    return a.year - b.year;
  });
};

console.log('Inventors sorted by older-younges', sortInventors(inventors));
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const totalYears = (arr) => {
  return arr.reduce((total, inventor) => {
    return (total += inventor.passed - inventor.year);
  }, 0);
};

console.log('total years inventors lived all together', totalYears(inventors));

// 5. Sort the inventors by years lived
const sortYearsLived = (arr) => {
  return arr.sort((a, b) => {
    let aPassed = a.passed - a.year;
    let bPassed = b.passed - b.year;

    return bPassed - aPassed;
  });
};

console.log('yers lived', sortYearsLived(inventors));
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const checkLetters = (arr) => {
  return arr.filter((person) => {
    return person.includes('ev');
  });
};

console.log("People's names", checkLetters(people));
// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];
