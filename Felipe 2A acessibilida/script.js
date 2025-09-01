document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1;
    
    // Função para ajustar o tamanho da fonte
    const ajustarFonte = (ajuste) => {
        tamanhoAtualFonte += ajuste;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    };

    // Alterna a visibilidade das opções de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
        
        // Alterna o atributo aria-expanded sem a necessidade de checar
        botaoDeAcessibilidade.setAttribute('aria-expanded', opcoesDeAcessibilidade.classList.contains('apresenta-lista'));
    });

    // Aumenta o tamanho da fonte
    aumentaFonteBotao.addEventListener('click', function() {
        ajustarFonte(0.1);
    });

    // Diminui o tamanho da fonte
    diminuiFonteBotao.addEventListener('click', function() {
        ajustarFonte(-0.1);
    });

    // Alterna o contraste de cores
    alternaContraste.addEventListener('click', function() {
        document.body.classList.toggle('alto-contraste');
    });

    // Animação de ScrollReveal
    ScrollReveal().reveal('#inicio', { delay: 500 });
    ScrollReveal().reveal('#tropicalia', { delay: 500 });
    ScrollReveal().reveal('#galeria', { delay: 500 });
    ScrollReveal().reveal('#contato', { delay: 500 });
});