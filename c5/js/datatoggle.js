$('a[role="tab"]').on('click', function (e) {
    e.preventDefault;
    $(this).tab('show');
});

$('a[role="tab"]').on('show.bs.tab', function (e) {
    var tabAbrir = e.target
    var tabFechar = e.relatedTarget
    alert('Aba: ' + tabAbrir + ' vai ser aberta\nAba: ' + tabFechar + ' vai ser fechada\nEvento: show.bs.tab');
});