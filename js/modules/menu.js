const menu = () => {
  const body = document.querySelector('body');
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.addEventListener('click', () => {
    body.classList.add('menu');
  });
  const closeMenu = body.querySelector('.close-icon');
  closeMenu.addEventListener('click', () => {
    body.classList.remove('menu');
  });
};

menu();

export default menu;
