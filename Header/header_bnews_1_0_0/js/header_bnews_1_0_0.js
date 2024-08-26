const menu = document.querySelector('#nav-menu');
const backdrop = document.querySelector('#header-backdrop');
document.querySelector('#btn-menu').addEventListener('click', () => {
    menu.classList.add('show');
    backdrop.classList.add('show');
});
backdrop.addEventListener('click', () => {
    menu.classList.remove('show');
    backdrop.classList.remove('show');
});