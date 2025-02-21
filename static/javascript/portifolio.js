document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const bullets = document.querySelectorAll('.swiper-pagination-bullet');
    const totalSlides = bullets.length;
    let currentIndex = 0;

    // Função para atualizar o carrossel
    function updateCarousel() {
        // Atualiza o transform para mover os slides
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Atualiza os pontos de navegação (bullets)
        bullets.forEach((bullet, index) => {
            bullet.classList.remove('active');
            if (index === currentIndex) {
                bullet.classList.add('active');
            }
        });
    }

    // Avança o carrossel automaticamente a cada 5 segundos (5000 milissegundos)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;  // Avança para o próximo slide
        updateCarousel();
    }, 5000); // Tempo de 5 segundos

    // Adiciona a funcionalidade de clique nos pontos de navegação (bullets)
    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', () => {
            currentIndex = index;  // Altera para o slide correspondente ao ponto clicado
            updateCarousel();
        });
    });

    // Inicia o carrossel com o primeiro slide
    updateCarousel();
});
