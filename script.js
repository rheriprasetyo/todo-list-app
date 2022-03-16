'use strict';

// done task
// let lists = document.querySelectorAll(".list-item");
// let circles = document.querySelectorAll(".fa-circle");

// Array.from(lists).forEach((list) => {
//   list.addEventListener("click", () => {
//     console.log("list");
//     list.classList.add("done");
//   });
// });

// Array.from(circles).forEach((circle) => {
//   circle.addEventListener("click", () => {
//     console.log("circle");
//     circle.classList.remove("fa-regular");
//     circle.classList.add("fa-solid", "fa-circle-check");
//   });
// });

// reserved for date
const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const d = new Date();

// date
let getDate = d.getUTCDate();
const dateNow = document.querySelector('.date');
dateNow.innerHTML = getDate;

// day
let getDay = d.getUTCDay();
const dayNow = document.querySelector('.day');
dayNow.innerHTML = weekday[getDay];

// Month
let getMonth = d.getUTCMonth();
const monthNow = document.querySelector('.month');
monthNow.innerHTML = month[getMonth];

// Years
let getYear = d.getUTCFullYear();
const yearNow = document.querySelector('.year');
yearNow.innerHTML = getYear;
// -----------------

const content = document.querySelector('.content');
const button = document.querySelector('#plus-button');

button.addEventListener('click', e => {
  e.preventDefault();

  const task = prompt('What do you have planned?');

  const createClassList = document.createElement('div');
  const createClassListItem = document.createElement('div');
  const createParagraph = document.createElement('p');
  const createIcon = document.createElement('i');

  createClassList.classList.add('list');
  content.appendChild(createClassList);

  createClassListItem.classList.add('list-item');
  createClassList.appendChild(createClassListItem);

  createParagraph.innerHTML = task;
  createIcon.classList.add('fa-regular', 'fa-circle');

  createClassListItem.appendChild(createParagraph);
  createClassListItem.appendChild(createIcon);
});

content.addEventListener('click', e => {
  // console.log(e.target);
  const item = e.target;
  //console.log(item.classList[0]);
  // delete task
  if (item.classList[0] === 'fa-regular') {
    const taskList = item.parentElement;
    //console.log(taskList);
    //taskList.remove();
    taskList.classList.add('done');
    item.classList.add('fa-solid', 'fa-circle-check');
    item.classList.remove('fa-regular');
  }
});
