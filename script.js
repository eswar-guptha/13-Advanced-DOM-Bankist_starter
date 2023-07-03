'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
let btnScrollTo = document.querySelector('.btn--scroll-to');
let section1 = document.querySelector('#section--1');
let nav = document.querySelector('.nav');
let tabsContainer = document.querySelector('.operations__tab-container');
let tabs = document.querySelectorAll('.operations__tab');
let tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ================   Button scrolling   ===============

btnScrollTo.addEventListener('click', function (e) {
  // let s1Coords = section1.getBoundingClientRect();
  // console.log(s1Coords);

  // console.log(e.target.getBoundingClientRect());
  // console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientWidth,
  //   document.documentElement.clientHeight
  // );

  // Scrolling
  // window.scrollTo(
  //   s1Coords.left + window.pageXOffset,
  //   s1Coords.top + window.pageYOffset
  // );

  // ---> old version of doing
  // window.scrollTo({
  //   left: s1Coords.left + window.pageXOffset,
  //   top: s1Coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// ================  Page navigation   ================

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     let id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// ====== Event Deligation ======
// Note
// 1:- Add Event listner to common parent element
// 2:- Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // -> My approch
  // let navHref = e.target.getAttribute('href');
  // document.querySelector(navHref)?.scrollIntoView({ behavior: 'smooth' });

  // => Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    let id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// ====================  Tabbed Component ======================

// ===> Event Delegation <===

tabsContainer.addEventListener('click', function (e) {
  let clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  // ===> Removing active class <===
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabsContent.forEach(tabContent =>
    tabContent.classList.remove('operations__content--active')
  );

  // ===> Activating content area <===
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// ================ Menu fade animtion ==================

let handleHover = function (e, opacity) {
  console.log(this,e.target)
  if (e.target.classList.contains('nav__link')) {
    let link = e.target;
    let siblings = link.closest('.nav').querySelectorAll('.nav__link');
    let logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

/*
console.log(document);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
let header = document.querySelector('.header');
let allSections = document.querySelectorAll('.section');
console.log(allSections);

console.log(document.getElementById('section--1'));
let allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//////////////////////////
// ====>>> Creating and inserting elements

let message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `We use cookies for imporved functionality and analytics.`
message.innerHTML = `We use cookies for imporved functionality and analytics.
<button class = "btn btn--close-cookie">Got it!</button>
`;

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message)
// header.after(message)

//////////////////////////
// ====>>> Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

console.log(header);

//////////////////////////
// ====>>> Styles Attributes and classes

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');
// header.style.setProperty('color',"red")

// ====>>> Attributes
let logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.id);

logo.alt = 'Beautiful minimlist logo';

// non standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('src'));

let link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// ====>>> Data Attributes
console.log(logo.dataset.versionNumber);

// ====>>> Classes Attributes
// logo.classList.add('c',"j");
// logo.classList.remove('c',"j");
// logo.classList.toggle('c');
// logo.classList.contains('c');

// Don't use
// logo.className = 'jonas';
*/

/*
//////////////////////////
// ====>>> Types of Events and Event handlers

let h1 = document.querySelector('h1');
let msg = function (e) {
  console.log('hey');

  // -> remove events
  // h1.removeEventListener('mouseenter', msg);
};

h1.addEventListener('mouseenter', msg);

setTimeout(() => h1.removeEventListener('mouseenter', msg), 3000);
*/

/*
//////////////////////////
// ====>>> Event Propagation in practice

// rgb(255,255,255)

let randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

let randomColor = () => `
rgb(${randomNumber(0, 255)},${randomNumber(0, 255)},${randomNumber(0, 255)})`;

// console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // stop propagation
  // e.stopPropagation()
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  // console.log('LINK');
  this.style.backgroundColor = randomColor();
  console.log('nav', e.target, e.currentTarget);
});
*/

let h1 = document.querySelector('h1');

/*
// => Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); // not usefull
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);
h1.firstElementChild.style.color = 'red';
h1.lastElementChild.style.color = 'orangered';

// => Going upwards : parents
console.log(h1.parentNode); // not usefull
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// => Going Sideways: siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.parentElement.children);

console.log(h1.previousSibling); // not usefull
console.log(h1.nextSibling); // not usefull

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
*/
