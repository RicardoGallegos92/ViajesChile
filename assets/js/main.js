$(document).ready(function() {
    const btnEnviarCorreo = document.getElementById("enviarCorreo");
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')

    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    $(btnEnviarCorreo).on('click', () => alert('Gracias por los $25USD ☻♥☺'));
   
    $('.card').on('click', function () {
        console.log($(this));
        $('.card').not($(this)).toggle();
        $('.card').parent().toggleClass('col-9 col-lg-9');
    });
});