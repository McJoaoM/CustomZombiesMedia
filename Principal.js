function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  //Fecha o menu suspenso se o usuário clicar fora dele
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
// Obtém a referência para a imagem pelo seu ID
var imagemClicavel = document.getElementById("imagemClicavel");

// Adiciona um ouvinte de evento para o clique na imagem
imagemClicavel.addEventListener("click", function() {
  // Exibe um alerta quando a imagem é clicada
  alert("Baixando mapa!");
});
// Variável para controlar a página atual
let paginaAtual = 1;

// Função para carregar mais conteúdo
function carregarMaisConteudo() {
  // Substitua esta parte com a lógica para buscar mais conteúdo
  // Pode ser uma chamada AJAX, por exemplo

  // Exemplo de novo conteúdo: imagem clicável
  const novoConteudo = `
    <div class="imagem-texto-container">
      <img class="imagemgreenrunbo3" src="nova-imagem.jpg">
      <div class="descricao1">Conteúdo da página ${paginaAtual + 1}</div>
    </div>
  `;

  // Adiciona o novo conteúdo ao contêiner
  document.getElementById("conteudo-dinamico").insertAdjacentHTML('beforeend', novoConteudo);

  // Incrementa a página atual
  paginaAtual++;
}

// Adiciona um ouvinte de evento para o clique no botão "Carregar Mais"
document.getElementById("carregar-mais").addEventListener("click", carregarMaisConteudo);