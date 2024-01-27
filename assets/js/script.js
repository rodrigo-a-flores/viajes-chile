document.addEventListener('DOMContentLoaded', (event) => {
    const barraNavegacion = document.querySelector('.navbar');
    const section = document.querySelector('#quienesSomos');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY || window.pageYOffset;
        const sectionPos = section.offsetTop;
        if (scrollPos > sectionPos) {
        barraNavegacion.classList.add('bg-barra');
        } else {
        barraNavegacion.classList.remove('bg-barra');
        }
    });
});