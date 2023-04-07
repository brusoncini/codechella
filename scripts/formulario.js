const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    //pega os valores dos campos//
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const tipoIngresso = document.querySelector('#tipo-ingresso').value;
    const aniversario = document.querySelector('#aniversario').value;

    // armazena os valores no localStorage //
    localStorage.setItem('nome', nome);
    localStorage.setItem('tipo-ingresso', tipoIngresso);

    // redireciona para a página de ingresso //
    window.location.href = '/pages/ingresso.html';
});