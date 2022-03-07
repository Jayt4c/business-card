const loading = document.getElementById('js-preloader');

window.addEventListener('load', (event) => {
    loading.classList.add('loaded');
});

const openNav = () => {
    document.getElementById("header-nav").style.display = "block"
}
const closeNav = () => {
    document.getElementById("header-nav").style.display = "none"
}