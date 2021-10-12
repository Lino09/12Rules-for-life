const speakers = [
  {
    name: 'Dr. Jordan B. Peterson',
    bio: 'Dr. Jordan B. Peterson is a clinical psychologist, and the author of the bestsellers Beyond Order: 12 More Rules for Life & 12 Rules for Life: An Antidote to Chaos.',
    occupation: 'Professor of psychology at the University of Toronto',
    img: '../assets/png/speakers/peterson.png',
  },
  {
    name: 'Dr. Carl Gustav Jung',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id enim quis ex suscipit iaculis. Fusce nibh velit, bibendum et.',
    occupation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: '../assets/png/speakers/jung.png',
  },
  {
    name: 'Wilhelm Wundt',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id enim quis ex suscipit iaculis. Fusce nibh velit, bibendum et.',
    occupation: 'Father of modern psycology',
    img: '../assets/png/speakers/wilhelm.png',
  },
  {
    name: 'Dr. Frederick B. Skinner',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id enim quis ex suscipit iaculis. Fusce nibh velit, bibendum et.',
    occupation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: '../assets/png/speakers/skinner.png',
  },
  {
    name: 'Dr. Abraham Maslow',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id enim quis ex suscipit iaculis. Fusce nibh velit, bibendum et.',
    occupation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: '../assets/png/speakers/maslow.png',
  },
  {
    name: 'Dr. Sigmund Freud',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id enim quis ex suscipit iaculis. Fusce nibh velit, bibendum et.',
    occupation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: '../assets/png/speakers/freud.png',
  },
];

const moreButton = document.querySelector('.see-more');
const lessButton = document.querySelector('.see-less');

let featuredSpeakers = '';
function populateSpeakers() {
  for (let i = 0; i <= 2; i += 1) {
    featuredSpeakers += `<li>
    <div class="speaker-card">
      <img class="speaker-image" src="${speakers[i].img}" alt="">
      <span class="speaker-name">${speakers[i].name}</span>
      <span class="speaker-detail">${speakers[i].occupation}</span>
      <p class="speaker-text">${speakers[i].bio}</p>
      <img class="checkers" src="../assets/svg/checkers.svg" alt="">
    </div>
  </li>`;
  }
  document.querySelector('#speakers').innerHTML = featuredSpeakers;
}

function seeMore() {
  for (let i = 3; i <= 5; i += 1) {
    featuredSpeakers += `<li>
    <div class="speaker-card">
      <img class="speaker-image" src="${speakers[i].img}" alt="">
      <span class="speaker-name">${speakers[i].name}</span>
      <span class="speaker-detail">${speakers[i].occupation}</span>
      <p class="speaker-text">${speakers[i].bio}</p>
      <img class="checkers" src="../assets/svg/checkers.svg" alt="">
    </div>
  </li>`;
  }
  document.querySelector('#speakers').innerHTML = featuredSpeakers;
  moreButton.classList.toggle('no-display');
  lessButton.classList.toggle('no-display');
}

function seeLess() {
  featuredSpeakers = '';
  populateSpeakers();
  moreButton.classList.toggle('no-display');
  lessButton.classList.toggle('no-display');
}

moreButton.addEventListener('click', seeMore);
lessButton.addEventListener('click', seeLess);

const mobileMenu = document.querySelector('#mobile-menu');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('menu-mobile-hidden');
  mobileMenu.classList.toggle('menu-mobile-visible');
}

document.querySelector('.icon-opener').addEventListener('click', toggleMobileMenu);
document.querySelector('.icon-closer').addEventListener('click', toggleMobileMenu);

const items = document.querySelectorAll('.mobile-item');

items.forEach((item) => {
  item.addEventListener('click', toggleMobileMenu);
});

populateSpeakers();
const viewportWidth = window.innerWidth;
if (viewportWidth > 768) {
  seeMore();
  lessButton.classList.add('no-display');
}
