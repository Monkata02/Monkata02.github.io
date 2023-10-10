const hamMenuBtn = document.querySelector('.header-tab-menu');
const smallMenu = document.querySelector('.header-sm-menu');
const headerHamMenuBtn = document.querySelector('.header-tab-menu-open');
const headerHamMenuCloseBtn = document.querySelector('.header-tab-menu-close');
const headerSmallMenuLinks = document.querySelectorAll('.header-sm-menu-link');
const menuIcon = document.querySelector('.header-tab-menu img'); 

function toggleMobileMenu() {
  smallMenu.classList.toggle('header-sm-menu--active');
  headerHamMenuBtn.classList.toggle('d-none');
  headerHamMenuCloseBtn.classList.toggle('d-none');


  if (smallMenu.classList.contains('header-sm-menu--active')) {
    menuIcon.src = 'images/menu2.svg'; 
  } else {
    menuIcon.src = 'images/menu1.svg'; 
  }
}

hamMenuBtn.addEventListener('click', toggleMobileMenu);

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    toggleMobileMenu();
  });
}

const headerLogoContainer = document.querySelector('.header-logo-container');

headerLogoContainer.addEventListener('click', () => {
  location.href = '/';
});


// navigation
const navLinks = document.querySelectorAll('.header-link');

navLinks.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute('href').substring(1);

  const targetSection = document.getElementById(targetId);

  targetSection.scrollIntoView({ behavior: 'smooth' });
}

// mouse cursor

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  const yOffset = -3; 
  const xOffset = -8; 

  cursor.style.top = e.clientY + yOffset + 'px';
  cursor.style.left = e.clientX + xOffset + 'px';
});

document.addEventListener('click', () => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

// header 

let prevScrollPos = window.pageYOffset;
const header = document.getElementById("myHeader");

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = `-${header.clientHeight}px`;
  }

  prevScrollPos = currentScrollPos;
};


