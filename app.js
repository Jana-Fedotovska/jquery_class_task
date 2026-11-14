$(document).ready(function () {

    // ---------- INTRO ----------
    // zils teksts: parādās, pagaida, izgaist, tad parādās poga
    $("#long").fadeIn(1500).delay(3000).fadeOut(1500, function () {
        $("#start").fadeIn(800);
    });

    // ---------- POGA ----------
    $("#start").click(function () {
        $(this).fadeOut(500, function () {
            $("#intro").hide();
            $("#main").show();
            runEffects();
        });
    });

});

// ---------- MŪSU 5 EFEKTI ----------
function runEffects() {

    // 1. Virsraksts: izgaismojas
    $("h1").fadeIn(1000);

    // 2. Citāts: ieslīd, 4. efekts: palielinās un atgriežas
    $("#quote").delay(1000).slideDown(1000)
               .delay(2000)
               .animate({ fontSize: "2.5rem" }, 900)
               .animate({ fontSize: "1.5rem" }, 900);

    // 3. Autors: parādās
    $("#author").delay(2000).fadeIn(1000);

    // 5. Yoda: atlido no kreisās puses
    $("#yoda").delay(5500).animate({ opacity: 1, left: "0px" }, 1500);
}