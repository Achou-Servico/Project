// Espera o HTML da página estar pronto
document.addEventListener('DOMContentLoaded', () => {
  // Pega todos os elementos com data-include (nossos marcadores)
  const includes = document.querySelectorAll('[data-include]');

  // Para cada marcador...
  includes.forEach(async (el) => {
    // Lê o caminho do arquivo a ser incluído (ex.: "partials/header.html")
    const file = el.getAttribute('data-include');

    try {
      // Busca o arquivo via HTTP
      const resp = await fetch(file);
      if (!resp.ok) throw new Error(`Erro ao carregar ${file}`);

      // Converte a resposta para texto (HTML em string)
      const html = await resp.text();

      // Cola o HTML dentro do marcador
      el.innerHTML = html;
    } catch (e) {
      // Em caso de erro, mostra um comentário e loga no console
      el.innerHTML = `<!-- Falha ao incluir: ${file} -->`;
      console.error(e);
    }
  });
});
