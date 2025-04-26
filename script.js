// Script para interatividade do portfólio

document.addEventListener('DOMContentLoaded', function() {
    // Navegação suave para as seções
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Botão de download do CV
    document.querySelector('.download-btn').addEventListener('click', function() {
        // Aqui você pode adicionar a lógica para download do CV
        alert('Funcionalidade de download do CV será implementada em breve!');
    });
    
    // Adicionar classe ativa ao link de navegação com base na seção visível
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
    });
    
    // Animação para barras de habilidades
    const skillBars = document.querySelectorAll('.skill-level');
    
    // Função para verificar se um elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Função para animar as barras de habilidades quando visíveis
    function animateSkillBars() {
        skillBars.forEach(bar => {
            if (isElementInViewport(bar)) {
                bar.style.width = bar.style.width;
            }
        });
    }
    
    // Verificar quando as barras de habilidades estão visíveis
    window.addEventListener('scroll', animateSkillBars);
    window.addEventListener('resize', animateSkillBars);
    
    // Iniciar animação quando a página carrega
    animateSkillBars();
});
