const burgerMenu = document.querySelector('#burgerIcon');
const mobileMenu = document.querySelector('.mobilemenu');

function openMenuBox() {
  burgerMenu.style.display = 'none';
  mobileMenu.style.display = 'flex';
}

burgerMenu.addEventListener('click', openMenuBox);

const closeMobileMenu = document.querySelector('.fa-times');

function closeMenuBox() {
  burgerMenu.style.display = 'block';
  mobileMenu.style.display = 'none';
}
closeMobileMenu.addEventListener('click', closeMenuBox);

// const homePage = document.querySelector('.home-page');
// const programSection = document.querySelector('.program-section');
// const speakerSection = document.querySelector('.speaker-section');
// const sponsorSection = document.querySelector('.sponsor-section');
// const newsSection=  document.querySelector('.news-section');

// function goTohomePage() {
//   closeMenuBox();
//   window.location = '.homePage';
// }
// homePage.addEventListener('click', goTohomePage);

// function goToprogramSection() {
//   closeMenuBox();
//   window.location = '.programSection';
// }
// programSection.addEventListener('click', goToprogramSection);

// function goTospeakerSection() {
//   closeMenuBox();
//   window.location = '.speakerSection';
// }
// speakerSection.addEventListener('click', goTospeakerSection);
