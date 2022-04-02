let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('#navbar');
let header = document.querySelector('#header');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  if (window.scrollY > 100) {
    header.classList.add('active');

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  } else {
    header.classList.remove('active');
  }
};
