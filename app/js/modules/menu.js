export const showMenu = function () {
  let buttonMenu = document.querySelector('#hamburger');
  let navigation = document.querySelector('.navigation');
  let content = document.querySelector('.content');
  let footer = document.querySelector('.footer');
  let linkMenu = document.querySelectorAll('.menu__link');

  function toggleMenu() {
    navigation.classList.toggle('show');
    content.classList.toggle('open-menu');
    footer.classList.toggle('open-menu');
  }
  
  buttonMenu.addEventListener('click', () => {
    toggleMenu();
  });

  linkMenu.forEach(item => {
    item.addEventListener('click', () => {
      navigation.classList.remove('show');
      content.classList.remove('open-menu');
      footer.classList.remove('open-menu');
    })
  })
};