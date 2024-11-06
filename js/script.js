document.addEventListener('DOMContentLoaded', function() {

    //Função para o botão de scroll
    const scrollUpBtn = document.getElementById('scrollUpBtn');

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollUpBtn.classList.add('show');
        } else {
            scrollUpBtn.classList.remove('show');
        }
    };

    scrollUpBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Faz a rolagem suave até o topo
        });
    });
    //-------------------------------//

    //Função para o menu responsivo
    const mobileMenu = document.getElementById('mobile-menu');
        const navList = document.querySelector('.nav-list');

        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    //--------------------------------//


});