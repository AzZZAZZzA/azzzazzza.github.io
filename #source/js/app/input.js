$(function () {
    $('.contact__input').on("submit", function (event) {
        if ($('#email').val() == "") {
            event.preventDefault();
            alert("Поле мейла не заполнено");
        } else { event.default; }
    });
    $('#email').on("focus", function () {
        $(this).css({
            'border': '2px solid red',
            'background-color': '#f6f6f6'

        });
    });
    $('#email').on("blur", function () {
        $(this).css({
            'border': '1px solid #ccc',
            'background-color': 'none'

        });
    });
    $('#email').on("focus", function () {
        var x = $(this).val();
        if (x == $(this).attr("value")) {
            $(this).val("");
        }
    });
    $('#email').on("blur", function () {
        var x = $(this).val();
        if (x == "") {
            $(this).val($(this).attr("value"));
        }
    });
});