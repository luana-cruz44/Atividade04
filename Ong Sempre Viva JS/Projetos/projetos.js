
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector("nav.menu");
  const links = document.querySelectorAll("nav.menu a");

  // Alterna visibilidade do menu
  menuToggle.addEventListener("change", () => {
    menu.classList.toggle("ativo", menuToggle.checked);
  });

  // Fecha o menu e simula SPA ao clicar em um item
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const destino = link.textContent.trim().toLowerCase();

      // Fecha o menu
      menuToggle.checked = false;
      menu.classList.remove("ativo");

      // SPA: substitui conteúdo com base no item clicado
      if (destino === "início") {
        document.body.innerHTML = `
          <header style="text-align:center; padding:40px;">
            <h1>Bem-vindo à ONG Sempre-Vivas!</h1>
            <p>Preservando o Cerrado e valorizando as comunidades tradicionais.</p>
          </header>
          <section style="text-align:center; padding:40px;">
            <h2>Obrigado por visitar nosso site!</h2>
            <p>Use o menu para conhecer nossos projetos e ações.</p>
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

