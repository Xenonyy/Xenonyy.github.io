//////////////////////// Website functionality ///////////////////////////
const body = $("body"),
    homepage = $("#homepage"),
    schoolpage = $("#schoolPage"),
    aboutpage = $("#aboutPage"),
    loadPage = $("#loadingPage"),
    pages = $(".page");

// Setting up homepage and the loading screen	
// $(window).on("load", async function () {	
//     await loadAnimation(500, homepage);
    // window.location.assign("https://xenonyy.github.io/home");
// });

// Remove the scrollbar to wait for the loading animation
$(window).on('load', function () {
    setTimeout(() => { $('body').removeClass('stop-scrolling'); }, 1000);
});

document.onreadystatechange = () => {	
    do { 	
        loadPage.fadeIn("fast");	
    } while (document.readyState === "loading" || document.readyState === "interactive");	

    if (document.readyState === "complete") {	
        setTimeout(() => { loadPage.fadeOut("slow"); }, 500);	
    } else {	
        loadPage.fadeIn("fast");
    }
}

// Navigation in between menus
async function loadAnimation(ms, page) {
    pages.slideUp(ms);
    return new Promise(resolve => setTimeout(resolve, ms))
        .then(() => page.slideDown(600));
}
function changeBG(source) {	
    document.body.style.backgroundImage = "url(" + source + ")";	
}

$("#home").click(async function () {
    await loadAnimation(400, homepage);
    changeBG('abstract.jpg');
    // location.assign("https://xenonyy.github.io/home");
});
$("h2").click(async function () {
    await loadAnimation(400, aboutpage);
    changeBG('triangle.jpg');
    $("#footer").hide();
    $("#content-wrap").css("padding-bottom", "0");
    // location.assign("https://xenonyy.github.io/projects");
});
$("h3").click(async function () {
    await loadAnimation(400, schoolpage);
    changeBG('js.jpg');
    $("#schoolPanel").css("visibility", "visible");
    body.css("overflow-y", "auto");
    body.css("background-size", "cover");
    $("#footer").hide();
    $("#content-wrap").css("padding-bottom", "0");
    // location.assign("https://xenonyy.github.io/school");
});

// Turning the website into a scrollable format
$("#aboutPanel").css("visibility", "hidden");
$("#schoolPanel").css("visibility", "hidden");
$(document).scroll(function() {
    if ($(this).scrollTop() > 600 && $(this).scrollTop() < 1200) {
        $('#aboutPanel').css("visibility", "visible");
        $('#aboutPanel').fadeIn(1000);
    } else if ($(this).scrollTop() > 1200) {
        $('#schoolPanel').css("visibility", "visible");
        $('#schoolPanel').fadeIn(1000);
    }
});



$("#sourceCodePage").hide();