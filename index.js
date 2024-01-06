const conocemeButton = document.querySelector('.conoceme');
const aboutSection = document.querySelector('#about');

conocemeButton.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});