document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const nascimento = document.getElementById("nascimento");

    let erros = [];

    // Validação simples
    if (nome.value.trim().length < 3) {
      erros.push("Nome deve ter pelo menos 3 caracteres.");
      nome.style.borderColor = "red";
    } else nome.style.borderColor = "";

    if (!email.value.includes("@")) {
      erros.push("E-mail inválido.");
      email.style.borderColor = "red";
    } else email.style.borderColor = "";

    if (!cpf.value.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
      erros.push("CPF inválido.");
      cpf.style.borderColor = "red";
    } else cpf.style.borderColor = "";

    if (!telefone.value.match(/^\(\d{2}\)\s\d{4,5}-\d{4}$/)) {
      erros.push("Telefone inválido.");
      telefone.style.borderColor = "red";
    } else telefone.style.borderColor = "";

    if (!nascimento.value) {
      erros.push("Data de nascimento obrigatória.");
      nascimento.style.borderColor = "red";
    } else nascimento.style.borderColor = "";

    if (erros.length > 0) {
      alert("Corrija os seguintes erros:\n" + erros.join("\n"));
    } else {
      // SPA: substitui conteúdo por template de agradecimento
      document.body.innerHTML = `
        <header><h1>Cadastro Concluído</h1></header>
        <section style="text-align:center; padding:40px;">
          <h2>Obrigado, ${nome.value}!</h2>
          <p>Seu cadastro foi enviado com sucesso.</p>
          <p>A ONG Sempre-Vivas agradece seu apoio à preservação do Cerrado.</p>
        </section>
      `;
    }
  });
});

