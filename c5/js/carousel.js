$('#meuCarrossel').carousel({
    interval: 500,
    wrap: false,
    keyboard: false
});

$('#meuCarrossel').on('slide.bs.carousel', function () {
    console.log('Início da movimentação do slide');
});

$('#meuCarrossel').on('slid.bs.carousel', function () {
    console.log('Fim da movimentação do slide');
});