// Mobile menu
const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menu.addEventListener('click', () => {
  mobileMenu.classList.remove('display-mobile');
});
const closeIcon = document.querySelector('header .mobile-menu .close-menu a');
closeIcon.addEventListener('click', () => {
  mobileMenu.classList.add('display-mobile');
});
const links = document.querySelectorAll('header .mobile-menu ul li a');
for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    mobileMenu.classList.add('display-mobile');
  });
}

// Featured Speakers

const speakers = [
  {
    id: '1',
    name: 'Natalya Vilyavina',
    description: 'Executive Board Member at Oxford Entrepreneurs Network',
    image: './img/feature-1.jpg',
    text: 'Female founders of deep tech AI startups face challenges of access to funding and perception of their leadership role.',
  },

  {
    id: '2',
    name: 'Miriana Itani',
    description: 'Android Team Lead',
    image: './img/feature-2.jpg',
    text: `Google has released a new way of dealing with UI. 
        In this workshop, participants will experience a hands-on experience with jetpack compose.`,
  },
  {
    id: '3',
    name: 'Mandavee Sarma',
    description: 'Senior Software Engineer at JPMorgan',
    image: './img/featured-3.png',
    text: `There are lot of hardships and pitfalls women in tech has to face along with balancing their life. 
         key take away is how to cross those hurdles with success.`,
  },
  {
    id: '4',
    name: 'Deborah Nitka',
    description: 'Manager, Cybersecurity, Technology Risk and Privacy at CohnReznick LLP',
    image: './img/featured-4.jpg',
    text: ` As companies increasingly adopt emerging technologies such as AI, virtual reality, and IoT, the concept of 
          data privacy has come to mean accountability for how personal information is used by the organizations that collect it.`,
  },
  {
    id: '5',
    name: 'Dhanashree Balaram',
    description: 'Senior Machine Learning Scientist at Lily AI',
    image: './img/featured-5.jpg',
    text: 'The last 6 years have shaped my professional life and strategically placed me at the brink of cutting edge ML technology.',
  },
  {
    id: '6',
    name: 'Yanique Williams',
    description: 'Technologist & Founder at Young Ambitious One (YAO)',
    image: './img/featured-6.png',
    text: 'Leveling up In business & technology focuses on how to advance your career in the business and technology industry. ',
  },
];

for (let i = 0; i <= speakers.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('featured-speakers');
  card.innerHTML = `
   <div class="sp-pic">
   <img src="${speakers[i].image}"
   alt="${speakers[i].name}"
   />

   <div class="sp-info">
   <h2>${speakers[i].name}</h2>
   <p class="work">${speakers[i].description}</p>
   <p class="dots">.....</p>
   <p class="about-sp">${speakers[i].text}</p>
  `;
  document.querySelector('.gridContainer').appendChild(card);
}
