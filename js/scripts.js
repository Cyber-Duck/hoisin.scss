$(document).ready(function () {
    $('.toggle-code').on('click', function (e) {
        let sample = $(this).data('target');
        $(sample).slideToggle('fast');
    });
});
