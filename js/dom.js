$("#purchas-table tbody tr td:nth-child(9)").css("background-color", "yellow");
$("#purchas-table thead tr th:nth-child(9)").css("background-color", "yellow");
$(window).resize(function () {

    if ($(window).width() <= 900) {
        $("#purchas-table").hide();
    } else {
        $("#purchas-table").show();

    }

});