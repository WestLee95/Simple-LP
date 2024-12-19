const searchBtn = document.getElementById('search-btn')
const searchBox = document.getElementById('search-box')
const inputBox = document.getElementById('input-box')

const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

const image1 = document.getElementById('image1');
  const menu = document.getElementById('menu');

searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('hidden')
    setTimeout(() => {
        inputBox.classList.toggle('opacity-0')
        inputBox.classList.toggle('translate-y-10')
    }, 0);
})

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    mobileMenu.classList.toggle('hidden')
})

image1.addEventListener('click', () => {
    image1.style.display = 'none';
    menu.style.display = 'block';

    // Optionally, trigger the menu display here
    // For example, if you have a menu element with ID 'myMenu':
    document.getElementById('myMenu').style.display = 'block';
  });

  menu.addEventListener('click', () => {
    menu.style.display = 'none';
    image1.style.display = 'block';

    // Optionally, trigger the menu display here
    // For example, if you have a menu element with ID 'myMenu':
    document.getElementById('myMenu').style.display = 'block';
  });