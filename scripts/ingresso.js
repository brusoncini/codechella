const ingressoDescricao = document.querySelector('.ingresso__descricao');

// pega os valores armazenados no localStorage //
const nome = localStorage.getItem('nome');
const tipoIngresso = localStorage.getItem('tipo-ingresso');
const aniversario = localStorage.getItem('aniversario');

// cria o conteúdo dinâmico do elemento .ingresso__informacoes //
const descricaoHtml = `
  <h3>${nome}</h3>
  <p>Ingresso ${tipoIngresso}</p>
  <p>Data: 11/03</p>
  <p>Local: São Paulo-SP</p>
`;

// insere o conteúdo dinâmico no elemento .ingresso__informacoes //
ingressoDescricao.querySelector('.ingresso__informacoes').innerHTML = descricaoHtml;