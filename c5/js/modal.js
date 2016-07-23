$('button[data-target="#modalLogin"]').on('click', function () {
    $('#modalLogin').modal('toggle');
});

$('#modalLogin').on('show.bs.modal', function () {
    alert('Modal vai ser aberta\nEvento: show.bs.modal');
});

$('#modalLogin').on('shown.bs.modal', function () {
    alert('Modal foi aberta\nEvento: shown.bs.modal');
});

$('#modalLogin').on('hide.bs.modal', function () {
    alert('Modal vai ser fechada\nEvento: hide.bs.modal');
});

$('#modalLogin').on('hidden.bs.modal', function () {
    alert('Modal foi fechada\nEvento: hidden.bs.modal');
});