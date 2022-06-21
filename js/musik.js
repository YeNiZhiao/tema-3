$(document).ready(function () {

    $(".music").on("click", function () {
        console.log($(".player"));
        $(".player");
        $("#player").get(0).play();
        if (!$(".music").hasClass("mactive")) {
            $(".music").addClass("mactive");
            $(".music").removeClass("shadow-md");
            $(".music").addClass("shadow-lg");
            $(".music").removeClass("bg-primary");
            $(".music").addClass("bg-secondary");

        }
        else {
            $(".music").removeClass("mactive");
            $(".music").removeClass("shadow-lg");
            $(".music").addClass("shadow-md");
            $(".music").removeClass("bg-secondary");
            $(".music").addClass("bg-primary");
            $("#player").get(0).pause();
        }
    });
});

function changeClass() {
    if (!$(".music").hasClass("mactive")) {
        $(".music").addClass("mactive");
        $(".music").removeClass("shadow-md");
        $(".music").addClass("shadow-lg");
        $(".music").removeClass("bg-primary");
        $(".music").addClass("bg-secondary");

    }
    else {
        $(".music").addClass("mactive");
        $(".music").removeClass("shadow-lg");
        $(".music").addClass("shadow-md");
        $(".music").removeClass("bg-secondary");
        $(".music").addClass("bg-primary");
    }
}
