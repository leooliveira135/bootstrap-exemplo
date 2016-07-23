$('.um a').tooltip({
    trigger: 'click',
    title: 'Contém vitaminas B1 e B12',
    placement: 'right'
});

$('.dois i').tooltip({
    html: true,
    title: '<img src="../../img/maca.jpg">',
    placement: 'top'
});

$('.tres a').tooltip({
    html: true,
    title: '<h3>Título do texto</h3><p>Parágrafo com o texto</p>',
    delay: {
        show: 500,
        hide: 1000
    }
});

$('.quatro a').tooltip({
    html: true,
    title: '<img src="../../img/maca.jpg">',
    animation: false
});

$('.cinco').on('click', function (event) {
    event.preventDefault();
    $('.dois i').tooltip('toggle');
});