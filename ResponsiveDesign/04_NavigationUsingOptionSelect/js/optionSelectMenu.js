//DOM ready
$(function () {

    // Create the dropdown base
    $("<select />").appendTo("nav");

    //Create default option "go to . . ."
    $("<option />", {
        "selected": "selected",
        "value": "",
        "text": "Go to . . ."
    }).appendTo('nav select');

    //populate dropdown with menu items
    $('nav a').each(function () {
        var el = $(this);
        $('<option />', {
            "value": el.attr('href'),
            "text": el.text()
        }).appendTo("nav select");
    });

    //to make drop down actually work
    $('nav select').change(function () {
        window.location = $(this).find("option:selected").val();
    });

});