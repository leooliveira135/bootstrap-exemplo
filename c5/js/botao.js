$("#botaoToggle").click(function () {
    $(this).button('toggle');
});

$("#botaoReset .btn").click(function () {
    $(this).button('loading').delay(1000).queue(function () {
        $(this).button('reset');
        $(this).dequeue();
    });
});

$("#botaoString").click(function () {
    $(this).button('loading').delay(1000).queue(function () {
        $(this).button('complete');
        $(this).dequeue();
    });
});