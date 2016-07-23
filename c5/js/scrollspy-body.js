$('body').scrollspy({
    target: '#barraNavegacao'
}).on('activate.bs.scrollspy', function () {
    alert('Foi ativado scrollspy');
});