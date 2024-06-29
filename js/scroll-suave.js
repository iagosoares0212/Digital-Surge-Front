export default function initScrollSuave() {

    document.addEventListener("DOMContentLoaded", function () {
        const menuLinks = document.querySelectorAll("nav a[href^='#']");

        menuLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const targetId = this.getAttribute("href");
                const targetElement = document.querySelector(targetId);

                // Calcula a posição do elemento alvo levando em conta a margem do documento
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            });
        });
    });
    
}