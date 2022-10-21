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