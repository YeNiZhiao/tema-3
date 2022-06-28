$(document).ready(function () {

    Swal.fire({
        title: 'Nama Anda',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: false,
        confirmButtonText: 'Kirim',
        preConfirm: (nama) => {
            $(".nama").html(nama);
            AOS.init();
        }

    })
    var buka = document.querySelector(".buka");
    buka.addEventListener("click", function () {
        $(".cover").addClass("hilang");
        $('.fade-left').addClass("oke");
        $("#player").get(0).play();
        document.getElementById('player').muted = false;
    })
    // burger
    $(".burger-button").on("click", function () {

        $(".list").each(function (i) {
            setTimeout(function () {
                $(".list").eq(i).toggleClass("-translate-x-96")
            }, 250 * (i + 1))
        })
        $(".burger").toggleClass("fa-times")
        $(".burger").toggleClass("fa-bars")
        $(".nav").toggleClass("pointer-events-none")
    })
    // save the date
    // $(".simpan").on("click", function () {
    //     console.log($('.tanggal').val());
    //     $('.tanggal').select();
    //     document.execCommand('copy');

    //     // navigator.clipboard.writeText($('.tanggal').html())
    //     alert("Tanggal telah disalin")
    // })

    $(".collapse").on("click", function () {
        $(this).siblings(".collapse-value").toggleClass("max-h-0");
        $(this).siblings(".collapse-value").toggleClass("p-0");
        $(this).siblings(".collapse-value").toggleClass("max-h-16");
        $(this).siblings(".collapse-value").toggleClass("p-4");
        $(this).children("h2:last-child").toggleClass("rotate-180")
        console.log($(this).siblings(".collapse-value"));
    })

    $('.page-scroll').on('click', function (e) {
        //ambil isi href
        var tujuan = $(this).attr('href')
        //tangkap elemen ybs
        console.log(tujuan)
        var elementTujuan = $(tujuan);
        console.log(elementTujuan)
        //pindahkan scroll
        $("html,body").animate({
            scrollTop: elementTujuan.offset().top
        }, 1000, 'swing');
        e.preventDefault();
    });


});



