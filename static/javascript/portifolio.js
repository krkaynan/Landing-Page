document.addEventListener('DOMContentLoaded', () => { 
    const slides = document.querySelector('.slides');
    const bullets = document.querySelectorAll('.swiper-pagination-bullet');
    const totalSlides = bullets.length;
    let currentIndex = 0;
    let autoSlideInterval;

    // Função para atualizar o carrossel
    function updateCarousel() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        bullets.forEach((bullet, index) => {
            bullet.classList.remove('active');
            if (index === currentIndex) {
                bullet.classList.add('active');
            }
        });
    }

    // Inicia o slide automático
    function startAutoSlide() {
        // Garante que não haja intervalos duplicados
        stopAutoSlide();
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        }, 3000);
    }

    // Para o slide automático
    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }

    // Inicia o slideshow
    startAutoSlide();
    updateCarousel();

    // Pausa o slideshow quando o mouse entra na área dos slides
    slides.addEventListener('mouseenter', () => {
        stopAutoSlide();
    });

    // Retoma o slideshow quando o mouse sai da área dos slides
    slides.addEventListener('mouseleave', () => {
        startAutoSlide();
    });

    // Permite a navegação pelos bullets
    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
});
