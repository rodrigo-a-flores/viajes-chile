$(document).ready(function () {
    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var gato = this.hash;
            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 50, function () {
                window.location.hash = gato;
            });
        }
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    $("#btnEnviar").click(function () {
        alert("Su mensaje ha sido enviado");
    })
});