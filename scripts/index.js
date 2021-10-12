const speakers = [
  {
    name: 'Dr. Jordan B. Peterson',
    bio: 'Dr. Jordan B. Peterson is a clinical psychologist, and the author of the bestsellers Beyond Order: 12 More Rules for Life & 12 Rules for Life: An Antidote to Chaos.',
    occupation: 'Professor of psychology at the University of Toronto',
    img: 'https://via.placeholder.com/120',
  },
  {
    name: 'Dr. Carl Gustav Jung',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id enim quis ex suscipit iaculis. Fusce nibh velit, bibendum et.',
    occupation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'https://via.placeholder.com/120',
  },
  {
    name: 'Wilhelm Wundt',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id enim quis ex suscipit iaculis. Fusce nibh velit, bibendum et.',
    occupation: 'Father of modern psycology',
    img: 'https://via.placeholder.com/120',
  },
  {
    name: 'Dr. Frederick B. Skinner',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id enim quis ex suscipit iaculis. Fusce nibh velit, bibendum et.',
    occupation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'https://via.placeholder.com/120',
  },
  {
    name: 'Dr. Abraham Maslow',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id enim quis ex suscipit iaculis. Fusce nibh velit, bibendum et.',
    occupation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'https://via.placeholder.com/120',
  },
  {
    name: 'Dr. Sigmund Freud',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id enim quis ex suscipit iaculis. Fusce nibh velit, bibendum et.',
    occupation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'https://via.placeholder.com/120',
  }
];

function populateSpeakers() {
  let featuredSpeakers = '';
  speakers.forEach(dr => {
    featuredSpeakers += `<li>
    <div class="speaker-card">
      <img class="speaker-image" src="${dr.img}" alt="">
      <span class="speaker-name">${dr.name}</span>
      <span class="speaker-detail">${dr.occupation}</span>
      <p class="speaker-text">${dr.bio}</p>
    </div>
  </li>`
  });
  document.querySelector('#speakers').innerHTML = featuredSpeakers;
};

populateSpeakers();