
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector("nav.menu");
  const links = document.querySelectorAll("nav.menu a");

  // Alterna visibilidade do menu
  menuToggle.addEventListener("change", () => {
    menu.classList.toggle("ativo", menuToggle.checked);
  });

  // Fecha o menu ao clicar em qualquer link
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const destino = link.textContent.trim().toLowerCase();

      // Fecha o menu
      menuToggle.checked = false;
      menu.classList.remove("ativo");

      // SPA: simula carregamento de conteúdo
      if (destino === "início") {
        document.body.innerHTML = `
          <header><h1>Bem-vindo à ONG Sempre-Vivas!</h1></header>
          <section style="text-align:center; padding:40px;">
            <p>Preservando o Cerrado e valorizando as comunidades tradicionais.</p>
            <p>Use o menu para navegar pelos projetos e conhecer nossa missão.</p>
          </section>
          <footer style="text-align:center; padding:20px;">
            &copy; 2025 ONG Sempre-Vivas do Cerrado Mineiro.
          </footer>
        `;
      } else {
        alert(`Você clicou em "${destino}". Em breve essa seção será carregada.`);
      }
    });
  });
});


