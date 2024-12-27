document.addEventListener('DOMContentLoaded',function(){$(window).scroll(function(){if(this.scrollY>5){$('.navbar-bottom').addClass("sticky")}else{$('.navbar-bottom').removeClass("sticky")}
if(this.scrollY>500){$('.scroll-up-btn').addClass("show")}else{$('.scroll-up-btn').removeClass("show")}});$('.scroll-up-btn').click(function(){$('html').animate({scrollTop:0})});$(document).ready(function(){$('.owl-carousel').owlCarousel({loop:!0,margin:10,nav:!0,autoplay:!0,autoplayTimeout:9000,autoplayHoverPause:!0,responsive:{0:{items:1,nav:!1},600:{items:2,nav:!1},1000:{items:3,nav:!0}}})})});function openModal(){const modal=document.getElementById("modal");modal.style.display="flex"}
function closeModal(){const modal=document.getElementById("modal");modal.style.display="none"}
window.addEventListener("click",(e)=>{const modal=document.getElementById("modal");if(e.target===modal){closeModal()}})

    const menuItems = document.querySelectorAll('.nav-list a'); // Seleciona todos os links dentro do menu
        const navList = document.querySelector('.nav-list'); // Seleciona a lista de navegação
        const menuToggle = document.querySelector('.menu-toggle'); // Seleciona o botão de toggle do menu

        // Função para fechar o sidebar
        function closeSidebar() {
            navList.classList.remove('active'); // Remove a classe 'active', fazendo o menu sumir
        }

        // Função para abrir o sidebar
        function openSidebar() {
            navList.classList.add('active'); // Adiciona a classe 'active', fazendo o menu aparecer
        }

        // Adiciona o evento de clique para o botão do menu (abrir/fechar)
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation(); // Impede que o clique no botão feche o menu
            navList.classList.toggle('active'); // Alterna a visibilidade do menu
        });

        // Fecha o sidebar automaticamente ao clicar em qualquer link de navegação
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                closeSidebar(); // Fecha o sidebar ao clicar em um item
            });
        });

        // Fecha o sidebar quando clicar fora do menu
        document.addEventListener('click', (event) => {
            // Verifica se o clique foi fora do menu e do botão de menu
            if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
                closeSidebar(); // Fecha o menu se o clique foi fora
            }
        });

        // Impede o clique dentro do menu de fechar o sidebar
        navList.addEventListener('click', (event) => {
            event.stopPropagation(); // Impede que o clique dentro do menu feche o menu
        });
