$('#abreDropdown1', '#abreDropdown2').on('click', function () {
    $('#dropdown1', 'dropdown2').dropdown('toggle');
});

$('.dropdown').on('show.bs.dropdown', function (e) {
    var txtLink = $(e.relatedTarget).text();
    alert('Dropdown vai ser aberto\nEvento: show.bs.dropdown\nLink clicado: ' + txtLink);
});

$('.dropdown').on('shown.bs.dropdown', function () {
    alert('Dropdown foi aberto\nEvento: shown.bs.dropdown');
});

$('.dropdown').on('hide.bs.dropdown', function () {
    alert('Dropdown vai ser fechado\nEvento: hide.bs.dropdown');
});

$('.dropdown').on('hidden.bs.dropdown', function () {
    alert('Dropdown foi fechado\nEvento: hidden.bs.dropdown');
});