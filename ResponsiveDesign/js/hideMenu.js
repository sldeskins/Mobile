$(document).ready(function () {
    $(function () {
        $('#showPhoneNav').click(function () {
            $("#myNav").slideToggle('normal', function () {
                if ($('#myNav').is(':visible')) {
                    $('#showPhoneNav').text('Hide Navigation');
                } else {
                    $('#showPhoneNav').text('Show Navigation');
                }
            });
        });
    });
});
