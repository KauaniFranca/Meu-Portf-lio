function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar botão de voltar ao topo
window.onscroll = function () {
    const button = document.querySelector('.top-button');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block"; // Mostra o botão
    } else {
        button.style.display = "none"; // Esconde o botão
    }
};