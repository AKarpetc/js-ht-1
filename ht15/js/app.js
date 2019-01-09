$(document).ready(function () {

    function GetTour() {

    }

    $("a[href='#sheldure'], a[href='#tour'], .contact").click(function () {
        $(".overlay").show();
        $(".overlay").css("opacity", "0");
        $(".overlay").animate({
                opacity: '0.8'
            }, 1000,
            function () {

            });
        $(".modal").show();
        $(".modal").css("margin-top", "0");
        $(".modal").animate({
            marginTop: "150px",
        }, 1000);

    });
    $(".close").click(function () {

        $(".overlay").animate({
                opacity: '0'
            }, 1000,
            function () {
                $(".overlay").hide();
            });



        $(".modal").animate({
                marginTop: "0px",
            }, 1000,
            function () {
                $(".modal").hide();
            });

    });
});