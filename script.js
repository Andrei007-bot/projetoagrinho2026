// Smooth scroll para links internos
document.querySelectorAll('.nav-links a, .btn-cta').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const hash = this.getAttribute('href');
        if (hash && hash.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Botão scroll top
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollBtn.style.display = 'flex';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animação ao carregar a página - efeito fade nas seções
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    console.log("🌱 Site Rotação de Cultura - Projeto Agrinho carregado com sucesso!");
});

// Tooltip interativo nas tabelas (mostra informação extra ao clicar)
const tableRows = document.querySelectorAll('tbody tr');
tableRows.forEach(row => {
    row.addEventListener('click', function() {
        const planta = this.cells[0]?.innerText || '';
        if(planta) {
            // Pequeno feedback visual temporário
            this.style.backgroundColor = '#E9F5DB';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 300);
        }
    });
});

// Contador de ano de safra (pequeno efeito criativo no console)
const anoAtual = new Date().getFullYear();
console.log(`🚜 Projeto Agrinho ${anoAtual} · Rotação de Cultura: Solo que se renova a cada ciclo! 🌽🔄🥬`);